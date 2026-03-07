export const SCRIPT_LANGUAGES = [
    { id: 'Malayalam', native: 'മലയാളം', defaultText: 'മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?' },
    { id: 'English', native: 'ENGLISH', defaultText: 'Hello there! How is everyone doing today? Have you all had your food?' }
];

export const SUBTITLE_LANGUAGES = [
    { id: 'English', label: 'English Sub' },
    { id: 'Malayalam', label: 'Malayalam Sub' }
];

export const VOICE_LIST = [
    // Malayalam - Diverse Natural Models
    { id: "Maya", label: "Maya", type: "Bright Female", desc: "Clear and energetic Malayalam output.", engine: "google", voice_id: "ml-IN-Wavenet-A", lang: "Malayalam" },
    { id: "Charan", label: "Charan", type: "Deep Male", desc: "Commanding and professional male narrative.", engine: "google", voice_id: "ml-IN-Wavenet-B", lang: "Malayalam" },
    { id: "Kavya", label: "Kavya", type: "Calm Female", desc: "Soft and storytelling-focused voice.", engine: "google", voice_id: "ml-IN-Wavenet-C", lang: "Malayalam" },
    { id: "Ravi", label: "Ravi", type: "Radio Male", desc: "Classic broadcast style male voice.", engine: "google", voice_id: "ml-IN-Standard-B", lang: "Malayalam" },

    // English - High Diversity Neural2/Studio
    { id: "Francis", label: "Francis", type: "Professional Male", desc: "Standard business narration.", engine: "google", voice_id: "en-US-Neural2-D", lang: "English" },
    { id: "Sarah", label: "Sarah", type: "Soft Female", desc: "Gentle and smooth American accent.", engine: "google", voice_id: "en-US-Neural2-F", lang: "English" },
    { id: "Jasper", label: "Jasper", type: "Studio Male", desc: "Premium high-fidelity male voice.", engine: "google", voice_id: "en-US-Studio-Q", lang: "English" },
    { id: "Emma", label: "Emma", type: "Expressive Female", desc: "High-pitch and lively character voice.", engine: "google", voice_id: "en-US-Neural2-H", lang: "English" }
];
