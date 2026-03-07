export const SCRIPT_LANGUAGES = [
    { id: 'Malayalam', native: 'മലയാളം', defaultText: 'നമസ്കാരം' },
    { id: 'English', native: 'ENGLISH', defaultText: 'Hello' }
];

export const SUBTITLE_LANGUAGES = [
    { id: 'English', label: 'English Sub' },
    { id: 'Malayalam', label: 'Malayalam Sub' }
];

export const VOICE_LIST = [
    // Malayalam - Using Gemini 2.0 Flash (Canvas Engine) for ultimate naturalness
    {
        id: "Maya",
        label: "Maya",
        type: "Studio Female",
        desc: "Ultra-natural Gemini Canvas voice (Female).",
        engine: "gemini",
        voice_id: "ml-IN-Wavenet-A", // Fallback ID
        lang: "Malayalam"
    },
    {
        id: "Charan",
        label: "Charan",
        type: "Studio Male",
        desc: "Ultra-natural Gemini Canvas voice (Male).",
        engine: "gemini",
        voice_id: "ml-IN-Wavenet-B", // Fallback ID
        lang: "Malayalam"
    }
];
