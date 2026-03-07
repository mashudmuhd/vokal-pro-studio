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
        const text = payload.text;
        const langCode = payload.langCode || "ml-IN";
        const voiceId = payload.voiceId || "ml-IN-Wavenet-C";

        // Google Cloud TTS (Natural & Stable for all languages)
        const key = process.env.GEMINI_API_KEY;
        const apiUrl = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${key}`;
        try {
            const apiRes = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    input: { text },
                    voice: { languageCode: langCode, name: voiceId },
                    audioConfig: { audioEncoding: "MP3" }
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
