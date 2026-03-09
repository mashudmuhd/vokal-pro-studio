export const maxDuration = 60; // 60 seconds (max for Hobby plan on Vercel)

export default async function handler(req, res) {
    // Standard CORS headers for all responses
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { type, payload } = req.body;
    if (!type || !payload) {
        return res.status(400).json({ error: 'Missing type or payload' });
    }

    const modelMap = {
        tts: 'elevenlabs',
        analysis: 'gemini-1.5-flash',
    };

    const type_sel = modelMap[type];
    if (!type_sel) return res.status(400).json({ error: 'Invalid type' });

    if (type === 'tts') {
        let text = payload.text;
        let voiceId = payload.voiceId || "ml-IN-Wavenet-C";
        const engine = payload.engine || "google";

        if (engine === 'gemini') {
            const key = process.env.GEMINI_API_KEY;
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${key}`;

            const geminiVoiceMap = {
                'Maya': 'Aoede',   // Warm/Natural female
                'Charan': 'Charon' // Deep/Narrative male
            };

            const geminiVoice = geminiVoiceMap[payload.id] || 'Aoede';

            try {
                const apiRes = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: text }] }],
                        generationConfig: {
                            responseModalities: ["AUDIO"],
                            speechConfig: {
                                voiceConfig: {
                                    prebuiltVoiceConfig: {
                                        voiceName: geminiVoice
                                    }
                                }
                            }
                        }
                    }),
                });

                if (apiRes.ok) {
                    const data = await apiRes.json();

                    // Check if safety protocols blocked the content
                    if (data.candidates?.[0]?.finishReason && data.candidates[0].finishReason !== 'STOP') {
                        console.warn('Gemini Audio Blocked or Finished Early:', data.candidates[0].finishReason);
                    } else {
                        const audioBase64 = data.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
                        if (audioBase64) {
                            return res.status(200).json({ audio: audioBase64 });
                        }
                    }
                } else {
                    const errData = await apiRes.text();
                    console.error("Gemini TTS Error, falling back to Google Cloud Wavenet:", errData);
                    // If it's a 429 Quota Exceeded, we gracefully ignore and fallback automatically
                }
            } catch (err) {
                console.error("Gemini Engine Exception, falling back:", err.message);
            }
            // Auto Fallback to standard Google Wavenet TTS if Gemini fails
        }

        // Standard Google Cloud TTS Path (Also acts as fallback)
        let detectedLang = payload.langCode || "ml-IN";
        if (voiceId.includes('-')) {
            const parts = voiceId.split('-');
            if (parts.length >= 2) {
                detectedLang = `${parts[0]}-${parts[1]}`;
            }
        }

        const key = process.env.GEMINI_API_KEY;
        const apiUrl = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${key}`;
        try {
            const apiRes = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    input: { text },
                    voice: { languageCode: detectedLang, name: voiceId },
                    audioConfig: {
                        audioEncoding: "MP3",
                        pitch: payload.pitch || 0,
                        speakingRate: payload.speakingRate || 1.0,
                        sampleRateHertz: 48000
                    }
                }),
            });
            if (!apiRes.ok) {
                const errData = await apiRes.text();
                throw new Error(`Google TTS Error: ${errData}`);
            }
            const data = await apiRes.json();
            return res.status(200).json({ audio: data.audioContent });
        } catch (err) { return res.status(500).json({ error: err.message }); }
    }

    const key = process.env.GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    try {
        const apiRes = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        const data = await apiRes.json();
        return res.status(200).json(data);
    } catch (err) { return res.status(500).json({ error: err.message }); }
}
