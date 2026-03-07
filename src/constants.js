export const SCRIPT_LANGUAGES = [
    { id: 'Malayalam', native: 'മലയാളം', defaultText: 'നമസ്കാരം, നിങ്ങളുടെ പ്രൊഫഷണൽ വോയ്‌സ് കണ്ടന്റ് തയ്യാറാക്കാൻ സഹായിക്കുന്നതിനായി ഞാൻ ഇവിടെയുണ്ട്. ഇന്ന് നമുക്ക് എന്ത് കഥയാണ് പറയേണ്ടത്?' },
    { id: 'English', native: 'ENGLISH', defaultText: 'Hello! I am here to help you create your professional voice content today. How can I assist you with your project?' }
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
        desc: "Warm and expressive Malayalam voice.",
        engine: "google",
        voice_id: "ml-IN-Wavenet-C",
        lang: "Malayalam",
        pitch: 0,
        speakingRate: 0.95
    },
    {
        id: "Charan",
        label: "Charan",
        type: "Deep Narrative Male",
        desc: "Deep, bass-rich voice inspired by Morgan Freeman.",
        engine: "google",
        voice_id: "ml-IN-Wavenet-B",
        lang: "Malayalam",
        pitch: -6.5, // Targetting high bass for Morgan Freeman feel
        speakingRate: 0.85 // Slower, more authoritative pace
    }
];
