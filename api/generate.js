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
        tts: 'gemini-2.5-flash-preview-tts',
        analysis: 'gemini-1.5-flash',
    };

    const model = modelMap[type];
    if (!model) return res.status(400).json({ error: 'Invalid type' });

    const key = process.env.GEMINI_API_KEY;
    if (!key) return res.status(500).json({ error: 'GEMINI_API_KEY not found in server environment' });

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

    try {
        const apiRes = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!apiRes.ok) {
            const errorText = await apiRes.text();
            console.error('Gemini API Error:', errorText);
            return res.status(apiRes.status).json({ error: `Gemini API returned ${apiRes.status}`, details: errorText });
        }

        const data = await apiRes.json();
        return res.status(200).json(data);
    } catch (err) {
        console.error('Vercel Function Error:', err.message);
        return res.status(500).json({ error: err.message });
    }
}
