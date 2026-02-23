module.exports = async function handler(req, res) {
    // CORS configuration
    const allowed = ['https://mashudmuhd.github.io', 'http://localhost:5173', 'http://localhost:5174'];
    const origin = req.headers.origin;

    if (allowed.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }

    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle Preflight request (OPTIONS)
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
        tts: 'gemini-2.5-flash-preview-tts',
        analysis: 'gemini-2.5-flash',
    };

    const model = modelMap[type];
    if (!model) return res.status(400).json({ error: 'Invalid type' });

    const key = process.env.GEMINI_API_KEY;
    if (!key) return res.status(500).json({ error: 'API key not configured in Vercel' });

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

    try {
        const apiRes = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const data = await apiRes.json();
        return res.status(apiRes.status).json(data);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
