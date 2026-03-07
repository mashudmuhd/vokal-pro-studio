export const SCRIPT_LANGUAGES = [
    { id: 'Malayalam', native: 'മലയാളം', defaultText: 'നമസ്കാരം' },
    { id: 'English', native: 'ENGLISH', defaultText: 'Hello' }
];

export const SUBTITLE_LANGUAGES = [
    { id: 'English', label: 'English Sub' },
    { id: 'Malayalam', label: 'Malayalam Sub' }
];

export const VOICE_LIST = [
    // Malayalam - Optimized for Naturalness
    {
        id: "Maya",
        label: "Maya",
        type: "Natural Female",
        desc: "Clear and warm native Malayalam voice.",
        engine: "google",
        voice_id: "ml-IN-Wavenet-A",
        lang: "Malayalam",
        pitch: 0.5,
        speakingRate: 1.05
    },
    {
        id: "Charan",
        label: "Charan",
        type: "Deep Narrative Male",
        desc: "Deep narrative voice with natural Malayalam inflections.",
        engine: "google",
        voice_id: "ml-IN-Wavenet-B",
        lang: "Malayalam",
        pitch: -1.5,
        speakingRate: 1.0
    }
];
