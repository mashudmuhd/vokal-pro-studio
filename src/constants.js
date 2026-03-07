export const SCRIPT_LANGUAGES = [
    { id: 'Malayalam', native: 'മലയാളം', defaultText: 'മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?' },
    { id: 'English', native: 'ENGLISH', defaultText: 'Hello there! How is everyone doing today? Have you all had your food?' }
];

export const SUBTITLE_LANGUAGES = [
    { id: 'English', label: 'English Sub' },
    { id: 'Malayalam', label: 'Malayalam Sub' }
];

export const VOICE_LIST = [
    // Malayalam - Strictly Wavenet (Premium) for less robotic feel
    { id: "Maya", label: "Maya", type: "Natural Female", desc: "Warm and expressive Malayalam voice.", engine: "google", voice_id: "ml-IN-Wavenet-C", lang: "Malayalam", pitch: 0, speakingRate: 1.0 },
    { id: "Charan", label: "Charan", type: "Deep Male", desc: "Professional and calm male tone.", engine: "google", voice_id: "ml-IN-Wavenet-B", lang: "Malayalam", pitch: -1.5, speakingRate: 0.95 },
    { id: "Kavya", label: "Kavya", type: "Bright Female", desc: "Clear and energetic pronunciation.", engine: "google", voice_id: "ml-IN-Wavenet-A", lang: "Malayalam", pitch: 0.5, speakingRate: 1.05 },
    { id: "Ravi", label: "Ravi", type: "Radio Male", desc: "Dynamic and fast-paced male voice.", engine: "google", voice_id: "ml-IN-Wavenet-B", lang: "Malayalam", pitch: 1.0, speakingRate: 1.1 },

    // English - Using Studio & Neural2 (Most human-like available)
    { id: "Francis", label: "Francis", type: "Studio Male", desc: "Ultra-premium studio quality male voice.", engine: "google", voice_id: "en-US-Studio-Q", lang: "English", pitch: 0, speakingRate: 1.0 },
    { id: "Sarah", label: "Sarah", type: "Studio Female", desc: "Highest fidelity natural female audio.", engine: "google", voice_id: "en-US-Studio-O", lang: "English", pitch: 0, speakingRate: 1.0 },
    { id: "Jasper", label: "Jasper", type: "Natural Male", desc: "Engaging neural2 male narrative.", engine: "google", voice_id: "en-US-Neural2-D", lang: "English", pitch: -1.0, speakingRate: 1.0 },
    { id: "Emma", label: "Emma", type: "Natural Female", desc: "Soft neural2 storytelling female voice.", engine: "google", voice_id: "en-US-Neural2-H", lang: "English", pitch: 0.5, speakingRate: 1.05 }
];
