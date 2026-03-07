export const SCRIPT_LANGUAGES = [
    { id: 'Malayalam', native: 'മലയാളം', defaultText: 'മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?' },
    { id: 'English', native: 'ENGLISH', defaultText: 'Hello there! How is everyone doing today? Have you all had your food?' }
];

export const SUBTITLE_LANGUAGES = [
    { id: 'English', label: 'English Sub' },
    { id: 'Malayalam', label: 'Malayalam Sub' }
];

export const VOICE_LIST = [
    // Malayalam - Strictly Google Wavenet/Natural
    { id: "Maya", label: "Maya", type: "Natural Female", desc: "Warm storytelling voice.", engine: "google", voice_id: "ml-IN-Wavenet-C", lang: "Malayalam" },
    { id: "Charan", label: "Charan", type: "Natural Male", desc: "Clear professional narrative.", engine: "google", voice_id: "ml-IN-Wavenet-B", lang: "Malayalam" },
    { id: "Kavya", label: "Kavya", type: "Natural Female", desc: "Sharp and clear pronunciation.", engine: "google", voice_id: "ml-IN-Wavenet-A", lang: "Malayalam" },
    { id: "Ravi", label: "Ravi", type: "Standard Male", desc: "Direct and straightforward speech.", engine: "google", voice_id: "ml-IN-Standard-B", lang: "Malayalam" },

    // English - Strictly Google Studio/Neural2
    { id: "Francis", label: "Francis", type: "Natural Male", desc: "Deep professional American English.", engine: "google", voice_id: "en-US-Neural2-D", lang: "English" },
    { id: "Sarah", label: "Sarah", type: "Natural Female", desc: "Friendly narrative English.", engine: "google", voice_id: "en-US-Neural2-C", lang: "English" },
    { id: "Jasper", label: "Jasper", type: "Studio Male", desc: "Ultra-high quality studio voice.", engine: "google", voice_id: "en-US-Studio-Q", lang: "English" },
    { id: "Emma", label: "Emma", type: "Natural Female", desc: "Soft and expressive American accent.", engine: "google", voice_id: "en-US-Neural2-F", lang: "English" }
];
