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
        desc: "Clear and fluent native Malayalam narrative.",
        engine: "google",
        voice_id: "ml-IN-Wavenet-A",
        lang: "Malayalam",
        pitch: 0,
        speakingRate: 1.1
    },
    {
        id: "Charan",
        label: "Charan",
        type: "Deep Male",
        desc: "Professional narrative male with improved native flow.",
        engine: "google",
        voice_id: "ml-IN-Wavenet-B",
        lang: "Malayalam",
        pitch: -0.3,
        speakingRate: 1.08
    }
];
