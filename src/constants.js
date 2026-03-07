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
    { id: "Maya", label: "Maya", type: "Female", desc: "Warm, expressive, maternal storytelling." },
    { id: "Francis", label: "Francis", type: "Ultra Bass", desc: "Legendary voice with deep cinematic resonance." },
    { id: "Charan", label: "Charan", type: "Slow Bass", desc: "Deep and slow flow." },
    { id: "Ahaana", label: "Ahaana", type: "Professional", desc: "Clear professional voice." }
];

export const GEMINI_VOICE_MAP = {
    "Maya": "Aoede", // Warm Female
    "Francis": "Charon", // Deep Male
    "Charan": "Charon", // Slow Deep
    "Ahaana": "Kore"  // Professional Female
};
