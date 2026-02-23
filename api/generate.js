// Node 18+ has native fetch built-in, no imports needed

export default async function handler(req, res) {
    // CORS — allows only our app domains
    const allowed = ['https://mashudmuhd.github.io', 'http://localhost:5173', 'http://localhost:5174'];
    const origin = req.headers.origin || '';
    if (allowed.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const { type, payload } = req.body;
    if (!type || !payload) return res.status(400).json({ error: 'Missing type or payload' });

    const modelMap = {
        tts: 'gemini-2.5-flash-preview-tts',
        analysis: 'gemini-2.5-flash',
    };
    const model = modelMap[type];
    if (!model) return res.status(400).json({ error: 'Invalid type' });

    // ✅ API key ONLY on the server — NEVER sent to browser
    const key = process.env.GEMINI_API_KEY;
    if (!key) return res.status(500).json({ error: 'Server misconfigured: missing GEMINI_API_KEY' });

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

    let retries = 0;
    const maxRetries = 3;

    const attemptFetch = async () => {
        const apiRes = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!apiRes.ok) {
            if (apiRes.status === 429) throw new Error('TOO_MANY_REQUESTS');
            if (retries < maxRetries) {
                retries++;
                await new Promise(r => setTimeout(r, Math.pow(2, retries) * 1000));
                return attemptFetch();
            }
            throw new Error(`API_ERROR_${apiRes.status}`);
        }
        return apiRes.json();
    };

    try {
        const data = await attemptFetch();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
