export const SCRIPT_LANGUAGES = [
    { id: 'Malayalam', native: 'മലയാളം' },
    { id: 'English', native: 'English' },
    { id: 'Hindi', native: 'ഹിന്ദി' },
    { id: 'Tamil', native: 'தமிழ்' }
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
