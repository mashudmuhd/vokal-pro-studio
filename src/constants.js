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
    { id: "Francis", label: "Francis", type: "Ultra Bass", desc: "Cinematic resonance.", engine: "elevenlabs", voice_id: "5Q0t7uMcjduPzGP9uTZp" },
    { id: "Charan", label: "Charan", type: "Slow Bass", desc: "Deep and slow flow.", engine: "google", voice_id: "ml-IN-Wavenet-B" },
    { id: "Ahaana", label: "Ahaana", type: "Professional", desc: "Clear professional voice.", engine: "google", voice_id: "ml-IN-Standard-A" },
    { id: "Sarah", label: "Sarah", type: "English Pro", desc: "Perfect English accent.", engine: "elevenlabs", voice_id: "EXAVITQu4vr4xnSDxMaL" }
];
