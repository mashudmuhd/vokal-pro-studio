export const SCRIPT_LANGUAGES = [
    { id: 'Malayalam', native: 'മലയാളം', defaultText: 'മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?' },
    { id: 'English', native: 'ENGLISH', defaultText: 'Hello there! How is everyone doing today? Have you all had your food?' },
    { id: 'Hindi', native: 'हिन्दी', defaultText: 'नमस्ते! आप सब कैसे हैं? क्या आप सभी ने खाना खा लिया?' },
    { id: 'Tamil', native: 'தமிழ்', defaultText: 'வணக்கம்! எல்லாரும் எப்படி இருக்கீங்க? எல்லாரும் சாப்பிட்டாச்சா?' }
];

export const SUBTITLE_LANGUAGES = [
    { id: 'English', label: 'English Sub' },
    { id: 'Malayalam', label: 'Malayalam Sub' },
    { id: 'Hindi', label: 'Hindi Sub' },
    { id: 'Tamil', label: 'Tamil Sub' }
];

export const VOICE_LIST = [
    { id: "Maya", label: "Maya", type: "Female", desc: "Warm, expressive Malayalam storytelling.", engine: "google", voice_id: "ml-IN-Wavenet-C" },
    { id: "Francis", label: "Francis", type: "Studio Bass", desc: "Deep professional English (USA).", engine: "google", voice_id: "en-US-Neural2-D" },
    { id: "Charan", label: "Charan", type: "Male", desc: "Clear Malayalam male voice.", engine: "google", voice_id: "ml-IN-Wavenet-B" },
    { id: "Ahaana", label: "Ahaana", type: "Professional", desc: "Sweet Hindi voice.", engine: "google", voice_id: "hi-IN-Wavenet-A" },
    { id: "Sarah", label: "Sarah", type: "Female", desc: "Narrative English (USA).", engine: "google", voice_id: "en-US-Neural2-C" }
];
