const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

// Gemini API key stored as a secret (never visible in source code)
const geminiApiKey = defineSecret("GEMINI_API_KEY");

exports.generateVoice = onRequest(
    { secrets: [geminiApiKey], cors: ["https://mashudmuhd.github.io", "http://localhost:5173"] },
    async (req, res) => {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method Not Allowed" });
        }

        const { type, payload } = req.body;
        if (!type || !payload) {
            return res.status(400).json({ error: "Missing type or payload" });
        }

        const modelMap = {
            tts: "gemini-2.5-flash-preview-tts",
            analysis: "gemini-2.5-flash",
        };

        const model = modelMap[type];
        if (!model) {
            return res.status(400).json({ error: "Invalid type. Use 'tts' or 'analysis'." });
        }

        const key = geminiApiKey.value();
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

        try {
            let retries = 0;
            const maxRetries = 5;

            const attemptFetch = async () => {
                const apiRes = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });

                if (!apiRes.ok) {
                    if (apiRes.status === 429) {
                        throw new Error("TOO_MANY_REQUESTS");
                    }
                    if (retries < maxRetries) {
                        retries++;
                        const delay = Math.pow(2, retries) * 1000;
                        await new Promise((r) => setTimeout(r, delay));
                        return attemptFetch();
                    }
                    throw new Error(`API_ERROR_${apiRes.status}`);
                }
                return apiRes.json();
            };

            const data = await attemptFetch();
            return res.status(200).json(data);
        } catch (err) {
            console.error("Gemini proxy error:", err.message);
            return res.status(500).json({ error: err.message });
        }
    }
);
