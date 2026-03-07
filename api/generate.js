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
        const key = process.env.ELEVENLABS_API_KEY;
        if (!key) return res.status(500).json({ error: 'ELEVENLABS_API_KEY not found' });

        const voiceId = payload.voiceId || "cgSgspJ2msm6clMCkdW9"; // Default Jessica
        const apiUrl = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`;

        try {
            const apiRes = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'xi-api-key': key
                },
                body: JSON.stringify({
                    text: payload.text,
                    model_id: "eleven_multilingual_v2",
                    voice_settings: { stability: 0.5, similarity_boost: 0.75 }
                }),
            });

            if (!apiRes.ok) {
                const errorText = await apiRes.text();
                return res.status(apiRes.status).json({ error: `ElevenLabs API returned ${apiRes.status}`, details: errorText });
            }

            const audioBuffer = await apiRes.arrayBuffer();
            const base64Audio = Buffer.from(audioBuffer).toString('base64');
            return res.status(200).json({ audio: base64Audio });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    const key = process.env.GEMINI_API_KEY;
    if (!key) return res.status(500).json({ error: 'GEMINI_API_KEY not found in server environment' });

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

    try {
        const apiRes = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!apiRes.ok) {
            const errorText = await apiRes.text();
            return res.status(apiRes.status).json({ error: `Gemini API returned ${apiRes.status}`, details: errorText });
        }

        const data = await apiRes.json();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
