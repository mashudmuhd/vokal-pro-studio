import React, { useState, useEffect, useRef } from 'react';
import {
    Play, Download, Loader2, Volume2, PlayCircle,
    Trash2, History as HistoryIcon, ChevronRight,
    Layout, Ghost, Zap, Headset, Pause,
    Sparkles, AlertCircle, CheckCircle2, Mic2, PauseCircle,
    GitBranch, Map, Eye, Languages, ToggleLeft, ToggleRight,
    Archive, FileCode, Package, Share2, Lock, X, Crown, Star, LogOut, User
} from 'lucide-react';

import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Auth from './Auth';
import { Toaster, toast } from 'react-hot-toast';

// ✅ No API key on the client — Gemini calls go through our secure Vercel backend proxy.
const CLOUD_FUNCTION_URL = "https://vokal-pro-api.vercel.app/api/generate";

const SCRIPT_LANGUAGES = [
    { id: 'Malayalam', native: 'മലയാളം' },
    { id: 'English', native: 'English' },
    { id: 'Hindi', native: 'ഹിन्दी' },
    { id: 'Tamil', native: 'தமிழ்' }
];

const GlobalStyles = () => (
    <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes wave {
            0%, 100% { height: 20%; }
            50% { height: 100%; }
        }
        .animate-wave {
            animation: wave 1.2s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(59, 130, 246, 0.5);
        }
    `}} />
);

const SUBTITLE_LANGUAGES = [
    { id: 'English', label: 'English Sub' },
    { id: 'Malayalam', label: 'Malayalam Sub' },
    { id: 'Hindi', label: 'Hindi Sub' },
    { id: 'Tamil', label: 'Tamil Sub' }
];

const VOICE_LIST = [
    { id: "Maya", label: "Maya", type: "Female", desc: "Warm, expressive, maternal storytelling." },
    { id: "Francis", label: "Francis", type: "Ultra Bass", desc: "Legendary voice with deep cinematic resonance." },
    { id: "Charan", label: "Charan", type: "Slow Bass", desc: "Deep and slow flow." },
    { id: "Ahaana", label: "Ahaana", type: "Professional", desc: "Clear professional voice." }
];

const App = () => {
    const [activeTab, setActiveTab] = useState('studio');
    const [lang, setLang] = useState('Malayalam');
    const [srtLang, setSrtLang] = useState('English');
    const [enableSubtitles, setEnableSubtitles] = useState(false);
    const [showVoiceSheet, setShowVoiceSheet] = useState(false);
    const [error, setError] = useState(null);
    // API key is now securely handled server-side via Firebase Cloud Function

    const [script, setScript] = useState("മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?");
    const [isProcessing, setIsProcessing] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState("Maya");
    const [vaultItems, setVaultItems] = useState([]);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [parsedSubtitles, setParsedSubtitles] = useState([]);
    const [activeSubtitle, setActiveSubtitle] = useState("");
    const [isPlayingCurrent, setIsPlayingCurrent] = useState(false);
    const [playingPreview, setPlayingPreview] = useState(null);
    const [isAudioInitialized, setIsAudioInitialized] = useState(false);

    const [user, setUser] = useState(null);
    const [isGuestMode, setIsGuestMode] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);

    // Plans State
    const [hasPlan, setHasPlan] = useState(false);
    const [showPlans, setShowPlans] = useState(false);
    const [credits, setCredits] = useState(60);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) setCredits(60);
            setAuthLoading(false);
        });
        return unsubscribe;
    }, []);

    const voiceRef = useRef(null);
    const previewRef = useRef(new Audio());

    const pcmToWav = (pcmData, sampleRate) => {
        const buffer = new ArrayBuffer(44 + pcmData.length * 2);
        const view = new DataView(buffer);
        const writeString = (offset, string) => {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        };
        writeString(0, 'RIFF');
        view.setUint32(4, 32 + pcmData.length * 2, true);
        writeString(8, 'WAVE');
        writeString(12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, 1, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * 2, true);
        view.setUint16(32, 2, true);
        view.setUint16(34, 16, true);
        writeString(36, 'data');
        view.setUint32(40, pcmData.length * 2, true);
        let offset = 44;
        for (let i = 0; i < pcmData.length; i++, offset += 2) {
            view.setInt16(offset, pcmData[i], true);
        }
        return new Blob([buffer], { type: 'audio/wav' });
    };

    const parseSRT = (srtString) => {
        if (!srtString) return [];
        const segments = srtString.trim().split(/\n\s*\n/);
        return segments.map(segment => {
            const lines = segment.split('\n');
            if (lines.length < 3) return null;
            const timeMatch = lines[1].match(/(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/);
            if (!timeMatch) return null;
            const toSec = (t) => {
                const [h, m, s_ms] = t.split(':');
                const [s, ms] = s_ms.split(',');
                return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s) + parseInt(ms) / 1000;
            };
            return { start: toSec(timeMatch[1]), end: toSec(timeMatch[2]), text: lines.slice(2).join(' ') };
        }).filter(s => s !== null);
    };

    useEffect(() => {
        voiceRef.current = new Audio();
        const updateTime = () => {
            if (!voiceRef.current || parsedSubtitles.length === 0) return;
            const t = voiceRef.current.currentTime;
            const active = parsedSubtitles.find(s => t >= s.start && t <= s.end);
            setActiveSubtitle(active ? active.text : "");
        };
        voiceRef.current.addEventListener('timeupdate', updateTime);
        voiceRef.current.onplay = () => {
            if (currentAudio && voiceRef.current.src === currentAudio.url) {
                setIsPlayingCurrent(true);
            }
        };
        voiceRef.current.onpause = () => {
            setIsPlayingCurrent(false);
            setPlayingPreview(null);
        };
        voiceRef.current.onended = () => {
            setIsPlayingCurrent(false);
            setActiveSubtitle("");
            setPlayingPreview(null);
        };
        return () => voiceRef.current?.removeEventListener('timeupdate', updateTime);
    }, [parsedSubtitles, currentAudio]);

    const initializeAudio = async () => {
        setIsAudioInitialized(true);
        try {
            const silent = "data:audio/wav;base64,UklGRigAAABXQVZFRm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==";
            voiceRef.current.src = silent;
            await voiceRef.current.play().then(() => voiceRef.current.pause());
        } catch (e) { console.warn("Engine Unlocked"); }
    };

    // 🔒 All Gemini calls go to our secure Cloud Function — no key on client
    const callApi = async (type, payload) => {
        let retries = 0;
        const maxRetries = 3;
        const attemptFetch = async () => {
            const res = await fetch(CLOUD_FUNCTION_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type, payload })
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                if (res.status === 429 || err?.error === 'TOO_MANY_REQUESTS') {
                    throw new Error("Whoops! You're making requests too fast. Please wait a minute and try again.");
                }
                if (retries < maxRetries) {
                    retries++;
                    const delay = Math.pow(2, retries) * 1000;
                    await new Promise(r => setTimeout(r, delay));
                    return attemptFetch();
                }
                throw new Error(`System Error: ${res.status}`);
            }
            return await res.json();
        };
        return attemptFetch();
    };

    const handleGenerateVoice = async () => {
        if (isProcessing) return; // Prevent multiple clicks
        if (!isGuestMode && user && !hasPlan) {
            setShowPlans(true);
            toast.error("Please upgrade to a Studio Pro plan to generate full-length audios!", { icon: '👑' });
            return;
        }

        if (!isAudioInitialized) await initializeAudio();
        if (!script.trim()) return;
        setIsProcessing(true); setError(null);
        try {
            // Map the simple IDs to the actual Gemini voice models
            const voiceMap = {
                "Maya": "Aoede", // Warm Female
                "Francis": "Charon", // Deep Male
                "Charan": "Charon", // Slow Deep
                "Ahaana": "Kore"  // Professional Female
            };

            let voiceName = voiceMap[selectedVoice] || selectedVoice;
            let stylePrompt = (selectedVoice === "Maya" || selectedVoice === "Ahaana")
                ? "Speak in a natural, warm, and expressive Malayalam female voice with a steady, conversational pace. Ensure the flow is natural and not rushed."
                : "Speak in a clear, professional male voice with a natural, steady conversational flow. Maintain a balanced and natural speed.";

            const voicePayload = {
                contents: [{ parts: [{ text: `${stylePrompt}: ${script}` }] }],
                generationConfig: {
                    responseModalities: ["AUDIO"],
                    speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voiceName } } }
                }
            };

            let srtPromise = null;
            if (enableSubtitles) {
                const srtPrompt = `Generate .SRT subtitles in ${srtLang} for: "${script}"`;
                srtPromise = callApi('analysis', { contents: [{ role: "user", parts: [{ text: srtPrompt }] }] });
            }

            const [vRes, sRes] = await Promise.all([callApi('tts', voicePayload), srtPromise]);
            const audioData = vRes.candidates?.[0]?.content?.parts?.[0]?.inlineData;
            const srtText = sRes?.candidates?.[0]?.content?.parts?.[0]?.text || "";

            if (audioData) {
                const binaryString = atob(audioData.data);
                const len = binaryString.length;
                const bytes = new Int16Array(len / 2);
                for (let i = 0; i < len; i += 2) {
                    bytes[i / 2] = (binaryString.charCodeAt(i + 1) << 8) | binaryString.charCodeAt(i);
                }
                const sampleRate = parseInt(audioData.mimeType.split('rate=')[1]) || 24000;
                const wavBlob = pcmToWav(bytes, sampleRate);
                const url = URL.createObjectURL(wavBlob);

                const meta = {
                    url, srt: srtText, srtLang: enableSubtitles ? srtLang : "None",
                    text: script.substring(0, 40), date: new Date().toLocaleTimeString(),
                    voice: selectedVoice, timestamp: Date.now()
                };
                setCurrentAudio(meta);
                setParsedSubtitles(enableSubtitles ? parseSRT(srtText) : []);
                setVaultItems(prev => [meta, ...prev]);
                voiceRef.current.src = url;
                toast.success('Studio Master Generated Successfully!', { icon: '✨' });
            }
        } catch (e) {
            setError(e.message);
            toast.error('Generation Failed: ' + e.message, { icon: '❌' });
        } finally {
            setIsProcessing(false);
        }
    };

    if (authLoading) return <div className="min-h-screen bg-[#08090D] flex items-center justify-center"><Loader2 className="w-10 h-10 text-blue-500 animate-spin" /></div>;
    if (!user && !isGuestMode) return <Auth onGuestLogin={() => setIsGuestMode(true)} />;

    const voiceModelsContent = (
        <div className="space-y-3 relative z-10 w-full mb-4">
            {VOICE_LIST.map(v => (
                <div key={v.id} className={`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${selectedVoice === v.id ? 'bg-blue-500/10 border-blue-500/30 shadow-inner' : 'bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5'}`} onClick={() => { setSelectedVoice(v.id); setShowVoiceSheet(false); }}>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (playingPreview === v.id) {
                                previewRef.current.pause();
                                previewRef.current.currentTime = 0;
                                setPlayingPreview(null);
                            } else {
                                // Stop master if playing
                                if (isPlayingCurrent) voiceRef.current.pause();

                                // Setup preview - dynamic path based on language
                                const basePath = import.meta.env.BASE_URL || "/";
                                const previewPath = `previews/${lang.toLowerCase()}/${v.id.toLowerCase()}.wav`;
                                previewRef.current.src = basePath + previewPath;

                                previewRef.current.play().catch(err => {
                                    console.warn("Preview missing:", previewPath);
                                    toast.error(`Missing audio for ${lang}: ${v.id}`, {
                                        icon: '📂',
                                        description: `File should be at: ${previewPath}`
                                    });
                                });

                                setPlayingPreview(v.id);
                                previewRef.current.onended = () => setPlayingPreview(null);
                            }
                        }}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${playingPreview === v.id ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : (selectedVoice === v.id ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white')}`}
                    >
                        {playingPreview === v.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <div className="flex-1">
                        <div className={`text-sm font-bold mb-1 transition-colors ${selectedVoice === v.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{v.label}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{v.type}</div>
                    </div>
                    {selectedVoice === v.id && <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />}
                </div>
            ))}
        </div>
    );

    return (
        <div className="h-[100dvh] bg-[#08090D] text-slate-300 flex flex-col md:flex-row overflow-hidden font-sans">
            <GlobalStyles />
            <Toaster position="top-center" toastOptions={{ style: { background: '#1c1c24', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />

            {showPlans && (
                <div className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4">
                    <div className="bg-[#0F1118] border border-white/5 rounded-[2.5rem] w-full max-w-5xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col">
                        <button onClick={() => setShowPlans(false)} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10"><X className="w-6 h-6" /></button>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-900/10 pointer-events-none"></div>
                        <div className="p-8 sm:p-12 overflow-y-auto flex-1 custom-scrollbar">
                            <div className="text-center mb-12 relative z-10">
                                <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter mb-4">VOKAL <span className="text-blue-500">PRO</span> PLANS</h2>
                                <p className="text-slate-400 max-w-xl mx-auto font-medium">Choose a studio plan to unlock high-fidelity AI voice generation and cinematic subtitle sync capabilities.</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                {/* Basic Plan */}
                                <div className="bg-black/50 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-emerald-500/30 transition-all group">
                                    <div className="text-emerald-500 mb-6 bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"><Zap className="w-8 h-8" /></div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2">Starter</h3>
                                    <div className="text-slate-400 text-sm font-medium mb-6">Perfect for testing</div>
                                    <div className="text-4xl font-black text-white mb-8">₹99 <span className="text-sm font-medium text-slate-500">/ 3 Audio</span></div>
                                    <ul className="space-y-4 mb-8 flex-1">
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> 3 Audio Generations</li>
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Standard Quality</li>
                                    </ul>
                                    <button onClick={() => { setHasPlan(true); setShowPlans(false); toast.success('Starter Plan Activated!', { icon: '💳' }); }} className="w-full py-4 bg-white/5 hover:bg-emerald-500 hover:text-white text-slate-300 rounded-xl font-bold uppercase tracking-widest transition-all">Buy Now</button>
                                </div>
                                {/* Pro Plan */}
                                <div className="bg-gradient-to-b from-blue-900/40 to-black/80 border border-blue-500/30 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20">
                                    <div className="absolute -top-4 inset-x-0 flex justify-center"><span className="bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-blue-500/30">Most Popular</span></div>
                                    <div className="text-blue-500 mb-6 bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center"><Star className="w-8 h-8" /></div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2">Creator</h3>
                                    <div className="text-blue-200/60 text-sm font-medium mb-6">For serious creators</div>
                                    <div className="text-4xl font-black text-white mb-8">₹499 <span className="text-sm font-medium text-blue-500/50">/ 100 Audio</span></div>
                                    <ul className="space-y-4 mb-8 flex-1">
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> 100 Audio Generations</li>
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Cinematic Vocals</li>
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> SRT Subtitle Export</li>
                                    </ul>
                                    <button onClick={() => { setHasPlan(true); setShowPlans(false); toast.success('Creator Plan Activated!', { icon: '💳' }); }} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20 rounded-xl font-bold uppercase tracking-widest transition-all">Buy Creator</button>
                                </div>
                                {/* Unlimited Plan */}
                                <div className="bg-black/50 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-amber-500/30 transition-all group">
                                    <div className="text-amber-500 mb-6 bg-amber-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"><Crown className="w-8 h-8" /></div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2">Studio</h3>
                                    <div className="text-slate-400 text-sm font-medium mb-6">Unlimited Everything</div>
                                    <div className="text-4xl font-black text-white mb-8">₹999 <span className="text-sm font-medium text-slate-500">/ Lifetime</span></div>
                                    <ul className="space-y-4 mb-8 flex-1">
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> Unlimited Generations</li>
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> Priority Processing</li>
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> Commercial Rights</li>
                                    </ul>
                                    <button onClick={() => { setHasPlan(true); setShowPlans(false); toast.success('Studio Plan Activated!', { icon: '💳' }); }} className="w-full py-4 bg-white/5 hover:bg-amber-500 hover:text-white text-slate-300 rounded-xl font-bold uppercase tracking-widest transition-all">Go Unlimited</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Voice Bottom Sheet */}
            {showVoiceSheet && (
                <div className="fixed inset-0 z-[60] lg:hidden flex flex-col justify-end">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowVoiceSheet(false)}></div>
                    <div className="relative bg-[#0F1118] border-t border-white/10 rounded-t-[2.5rem] w-full max-h-[85vh] flex flex-col pt-8 pb-10 px-6 sm:px-10 shadow-2xl animate-in slide-in-from-bottom-full duration-300">
                        <div className="flex justify-between items-center mb-6 shrink-0">
                            <h4 className="text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-[0.2em] flex items-center gap-3">
                                <Headset className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" /> Choose Voice Model
                            </h4>
                            <button onClick={() => setShowVoiceSheet(false)} className="p-2 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="overflow-y-auto custom-scrollbar flex-1 pr-2">
                            {voiceModelsContent}
                        </div>
                    </div>
                </div>
            )}

            {!isAudioInitialized && (
                <div onClick={initializeAudio} className="fixed inset-0 z-[1000] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 60%, #050918 0%, #000 70%)' }}>
                    <style>{`
                        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                        @keyframes spin-slow-rev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                        @keyframes float-mic { 0%,100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-14px) scale(1.05); } }
                        @keyframes bar1 { 0%,100%{height:12px} 50%{height:40px} }
                        @keyframes bar2 { 0%,100%{height:28px} 50%{height:10px} }
                        @keyframes bar3 { 0%,100%{height:20px} 25%{height:44px} 75%{height:8px} }
                        @keyframes bar4 { 0%,100%{height:36px} 40%{height:14px} }
                        @keyframes bar5 { 0%,100%{height:16px} 60%{height:38px} }
                        @keyframes glow-pulse { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:0.8;transform:scale(1.08)} }
                        @keyframes text-shimmer { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
                        @keyframes tap-bounce { 0%,100%{transform:translateY(0);opacity:1} 50%{transform:translateY(6px);opacity:0.5} }
                        .bar1{animation:bar1 0.9s ease-in-out infinite}
                        .bar2{animation:bar2 0.7s ease-in-out infinite}
                        .bar3{animation:bar3 1.1s ease-in-out infinite}
                        .bar4{animation:bar4 0.8s ease-in-out infinite 0.1s}
                        .bar5{animation:bar5 1s ease-in-out infinite 0.2s}
                    `}</style>

                    {/* === Centered circle group: rings + mic centered together === */}
                    <div style={{ position: 'relative', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', zIndex: 10, flexShrink: 0 }}>

                        {/* Background radial glow */}
                        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)', animation: 'glow-pulse 2.5s ease-in-out infinite' }}></div>

                        {/* Outer spinning ring */}
                        <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', border: '1px solid rgba(59,130,246,0.2)', animation: 'spin-slow 12s linear infinite' }}>
                            <div style={{ position: 'absolute', top: '-4px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 14px 4px #3b82f6' }}></div>
                        </div>

                        {/* Middle spinning ring reverse */}
                        <div style={{ position: 'absolute', width: '240px', height: '240px', borderRadius: '50%', border: '1px solid rgba(99,102,241,0.25)', animation: 'spin-slow-rev 8s linear infinite' }}>
                            <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8', boxShadow: '0 0 10px 3px #818cf8' }}></div>
                        </div>

                        {/* Inner glow ring */}
                        <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', border: '1px solid rgba(59,130,246,0.15)', animation: 'spin-slow 6s linear infinite' }}></div>

                        {/* Mic orb — perfectly centered in the rings */}
                        <div style={{ position: 'relative', zIndex: 5, width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px 12px rgba(59,130,246,0.35), 0 0 80px 20px rgba(59,130,246,0.12)', animation: 'float-mic 3s ease-in-out infinite' }}>
                            <Mic2 style={{ width: '44px', height: '44px', color: 'white' }} />
                        </div>
                    </div>

                    {/* Equalizer bars */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '40px', marginBottom: '28px', zIndex: 10 }}>
                        {[['bar1', '#3b82f6'], ['bar2', '#6366f1'], ['bar3', '#3b82f6'], ['bar4', '#60a5fa'], ['bar5', '#818cf8'], ['bar1', '#3b82f6'], ['bar2', '#6366f1']].map(([cls, color], i) => (
                            <div key={i} className={cls} style={{ width: '5px', borderRadius: '3px', background: color, opacity: 0.85 }}></div>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 style={{ fontSize: 'clamp(1rem,5vw,1.5rem)', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', zIndex: 10, background: 'linear-gradient(90deg,#60a5fa,#a5b4fc,#3b82f6,#60a5fa)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'text-shimmer 3s linear infinite', textAlign: 'center', padding: '0 24px' }}>Vokal Pro Studio</h1>

                    {/* Subtitle */}
                    <p style={{ marginTop: '10px', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(148,163,184,0.6)', zIndex: 10, fontWeight: 700 }}>AI Voice Engine</p>

                    {/* Tap hint */}
                    <div style={{ position: 'absolute', bottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 10 }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(59,130,246,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'tap-bounce 1.5s ease-in-out infinite' }}>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M6 1v12M6 13l-4-4M6 13l4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(148,163,184,0.45)', fontWeight: 700, textTransform: 'uppercase' }}>Tap anywhere</span>
                    </div>
                </div>
            )}

            <aside className="w-full md:w-20 bg-[#0F1118] border-t md:border-t-0 md:border-r border-white/5 flex md:flex-col items-center py-4 px-6 md:p-0 md:py-10 gap-4 md:gap-8 justify-between shrink-0 z-50 order-last md:order-first">
                <div className="flex md:flex-col gap-4 md:gap-8 items-center w-full md:w-auto justify-between md:justify-start">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl hidden md:flex items-center justify-center shadow-lg"><Volume2 className="text-white w-5 h-5" /></div>
                    <nav className="flex md:flex-col gap-2 md:gap-6 w-full md:w-auto justify-center">
                        <button onClick={() => setActiveTab('studio')} className={`p-4 rounded-xl transition-all flex-1 md:flex-none flex justify-center ${activeTab === 'studio' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-600 hover:bg-white/5'}`}><Layout /></button>
                        <button onClick={() => setActiveTab('vault')} className={`p-4 rounded-xl transition-all flex-1 md:flex-none flex justify-center ${activeTab === 'vault' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-600 hover:bg-white/5'}`}><HistoryIcon /></button>
                    </nav>
                </div>
            </aside>

            <main className="flex-1 p-4 sm:p-6 md:p-12 overflow-y-auto flex flex-col min-h-0 order-first md:order-last">
                <header className="flex flex-col lg:flex-row justify-between items-center mb-8 shrink-0 gap-6">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">VOKAL <span className="text-blue-500">PRO</span></h2>
                        <p className="text-[9px] font-black uppercase text-slate-600 tracking-[0.3em]">Studio Edition</p>
                    </div>

                    <div className="flex items-center flex-wrap justify-center gap-4">
                        <div className="flex bg-[#0F1118] p-1.5 rounded-2xl border border-white/5 shadow-xl">
                            {SCRIPT_LANGUAGES.map(l => (
                                <button key={l.id} onClick={() => setLang(l.id)} className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all duration-300 ${lang === l.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}>{l.native}</button>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4 bg-[#0F1118] p-1.5 sm:p-2 pr-3 sm:pr-4 rounded-2xl border border-white/5 shadow-xl">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden shrink-0">
                                {user?.photoURL ? (
                                    <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                                ) : (
                                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                                )}
                            </div>

                            <div className="flex flex-col text-left justify-center">
                                <span className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest truncate max-w-[80px] sm:max-w-[100px]">{user ? (user.displayName || user.email?.split('@')[0] || user.phoneNumber) : 'Guest User'}</span>
                                {hasPlan ? (
                                    <span className="text-[8px] sm:text-[9px] text-amber-500 font-black uppercase tracking-widest flex items-center gap-1 mt-0.5"><Crown className="w-3 h-3" /> Studio Pro</span>
                                ) : (
                                    !isGuestMode ? <span className="text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5">Free User</span> : <span className="text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5">Tryout Mode</span>
                                )}
                            </div>

                            <div className="w-px h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2"></div>

                            <button onClick={() => {
                                if (isGuestMode) {
                                    setIsGuestMode(false);
                                    toast.success('Please sign in to continue');
                                } else {
                                    signOut(auth).then(() => toast.success('Signed out'));
                                }
                            }} className="p-2 sm:p-2.5 rounded-xl transition-all text-slate-600 hover:text-blue-500 hover:bg-blue-500/10 flex items-center justify-center shrink-0" title={isGuestMode ? "Sign In" : "Sign Out"}>
                                {isGuestMode ? <Lock className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform" /> : <LogOut className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform" />}
                            </button>
                        </div>
                    </div>
                </header>

                {activeTab === 'studio' && (
                    <div className="flex flex-col lg:flex-row gap-6 flex-1">
                        <div className="flex flex-col gap-4">
                            {error && (
                                <div className="p-5 bg-blue-500/10 border border-blue-500/30 text-blue-500 rounded-2xl text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
                                    <AlertCircle className="w-5 h-5 shrink-0" /> {error}
                                </div>
                            )}
                            <div className={`flex-1 relative group bg-gradient-to-b from-[#0F1118] to-[#0A0B10] rounded-[2.5rem] border shadow-2xl p-1 flex flex-col transition-all duration-700 ${isProcessing ? 'border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.2)]' : 'border-white/5 hover:border-blue-500/30'}`}>
                                {isProcessing && <div className="absolute inset-0 bg-blue-500/5 rounded-[2.5rem] animate-pulse"></div>}
                                <textarea
                                    value={script}
                                    onChange={(e) => {
                                        if (isGuestMode && e.target.value.length > 50) {
                                            toast.error("Guest Limit Exceeded (5s limit). Please create an account for unlimited access!", { icon: '🔒' });
                                            setScript(e.target.value.substring(0, 50));
                                        } else if (!isGuestMode && user && !hasPlan && e.target.value.length > 800) {
                                            toast.error("Free Plan Limit Exceeded (1 min limit). Upgrade to create longer audios!", { icon: '👑' });
                                            setShowPlans(true);
                                            setScript(e.target.value.substring(0, 800));
                                        } else {
                                            setScript(e.target.value);
                                        }
                                    }}
                                    placeholder="Type or paste your script here..."
                                    className="w-full min-h-[120px] max-h-[220px] lg:min-h-[300px] bg-transparent p-5 sm:p-8 outline-none text-base sm:text-lg lg:text-2xl font-medium text-slate-100 resize-none transition-all leading-relaxed placeholder:text-slate-700 custom-scrollbar"
                                />
                            </div>

                            <div className="shrink-0 bg-[#0F1118]/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-6 shadow-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 opacity-50"></div>
                                <div className="relative flex flex-wrap items-center gap-6 z-10 w-full sm:w-auto">
                                    <button onClick={() => setEnableSubtitles(!enableSubtitles)} className={`flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase transition-all duration-300 ${enableSubtitles ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/10' : 'bg-black/50 text-slate-500 border border-white/5 hover:bg-white/5 hover:text-slate-300'}`}>
                                        {enableSubtitles ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />} Auto Subtitles
                                    </button>
                                    {enableSubtitles && (
                                        <div className="flex gap-2 overflow-x-auto p-1 custom-scrollbar w-full sm:w-auto">
                                            {SUBTITLE_LANGUAGES.map(sl => (
                                                <button key={sl.id} onClick={() => setSrtLang(sl.id)} className={`shrink-0 px-5 py-3 rounded-xl text-[10px] font-black uppercase transition-all duration-300 border ${srtLang === sl.id ? 'bg-white text-black border-white shadow-lg shadow-white/10' : 'bg-black/50 text-slate-500 border-white/5 hover:bg-white/10 hover:text-slate-300'}`}>{sl.label}</button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 relative z-10">
                                    <button onClick={() => setShowVoiceSheet(true)} className="lg:hidden w-full sm:w-auto px-6 py-4 bg-[#0F1118]/80 backdrop-blur-md border border-white/10 hover:bg-white/5 text-slate-300 rounded-2xl font-bold text-xs uppercase flex items-center justify-between gap-3 shadow-lg transition-all active:scale-95">
                                        <span className="flex items-center gap-2"><Headset className="w-4 h-4 text-blue-500" /> Voice: {VOICE_LIST.find(v => v.id === selectedVoice)?.label || 'Select'}</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>

                                    <button onClick={handleGenerateVoice} disabled={isProcessing || !script.trim()} className="w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-40 disabled:grayscale">
                                        {isProcessing ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />} {isProcessing ? "Synthesizing..." : "Generate Master"}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-[460px] shrink-0 flex flex-col gap-6 h-full pb-8 md:pb-0">
                            <div className="hidden lg:block bg-[#0F1118]/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl shrink-0 transition-hover duration-500 hover:border-white/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>
                                <h4 className="text-[10px] font-black uppercase text-slate-500 mb-6 tracking-[0.2em] flex items-center gap-3"><Headset className="w-4 h-4 text-blue-500" /> Voice Models</h4>
                                {voiceModelsContent}
                            </div>

                            {/* Unified Output Engine Box */}
                            <div className={`flex-1 flex flex-col p-8 rounded-[2.5rem] border transition-all duration-700 shadow-2xl relative overflow-hidden group ${isProcessing ? 'bg-blue-600/5 border-blue-500/40' : (currentAudio ? 'bg-gradient-to-br from-blue-950/20 to-black border-blue-500/30' : 'bg-gradient-to-br from-[#050505] to-[#0A0B10] border-white/5')}`}>
                                {/* Background Effects */}
                                {isProcessing && <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent)] animate-pulse"></div>}
                                {currentAudio && <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>}

                                <h4 className="text-[10px] font-black uppercase text-slate-600 mb-auto tracking-[0.2em] relative z-10 flex items-center gap-3">
                                    {isProcessing ? <Zap className="w-3 h-3 text-blue-400 animate-bounce" /> : <Eye className="w-3 h-3 text-blue-500/60" />}
                                    {isProcessing ? 'Engine Processing...' : 'Studio Output Engine'}
                                </h4>

                                <div className="relative z-10 my-8 flex-1 flex flex-col items-center justify-center text-center">
                                    {isProcessing ? (
                                        <div className="flex flex-col items-center gap-6">
                                            <div className="flex items-end gap-1.5 h-16">
                                                {[...Array(12)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-1.5 bg-blue-500 rounded-full animate-wave"
                                                        style={{ animationDelay: `${i * 0.1}s`, height: '20%' }}
                                                    ></div>
                                                ))}
                                            </div>
                                            <p className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] animate-pulse">Synthesizing Voice...</p>
                                        </div>
                                    ) : (
                                        <>
                                            <p className={`text-xl sm:text-2xl font-medium leading-relaxed transition-all duration-500 ${activeSubtitle ? 'text-white drop-shadow-lg' : 'text-slate-600 italic'}`}>
                                                {activeSubtitle || (currentAudio ? "Audio ready for playback" : "Awaiting Audio...")}
                                            </p>

                                            {currentAudio && !activeSubtitle && !isPlayingCurrent && (
                                                <div className="mt-4 w-12 h-1 bg-blue-500/20 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 w-1/3"></div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* Integrated Audio Controls */}
                                {currentAudio && !isProcessing && (
                                    <div className="relative z-10 flex flex-col gap-5 animate-in slide-in-from-bottom-4 duration-500">
                                        <button onClick={() => {
                                            if (voiceRef.current.src !== currentAudio.url) voiceRef.current.src = currentAudio.url;
                                            if (isPlayingCurrent) voiceRef.current.pause();
                                            else { voiceRef.current.play(); setIsPlayingCurrent(true); }
                                        }} className={`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl ${isPlayingCurrent ? 'bg-white text-black scale-[0.98]' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>
                                            {isPlayingCurrent ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
                                            {isPlayingCurrent ? "Pause Master" : "Play Master Track"}
                                        </button>

                                        <div className="flex gap-3">
                                            <a href={currentAudio.url} download="master_audio.wav" className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 transition-all border border-white/5"><Download className="w-4 h-4 text-blue-500" /> WAV</a>
                                            {currentAudio.srt && <button onClick={() => {
                                                const b = new Blob([currentAudio.srt], { type: 'text/plain' });
                                                const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'subtitles.srt'; a.click();
                                            }} className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase border border-white/5 flex items-center justify-center gap-2 transition-colors"><FileCode className="w-4 h-4 text-emerald-500" /> SRT</button>}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'vault' && (
                    vaultItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in duration-500 opacity-60">
                            <div className="w-24 h-24 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl">
                                <HistoryIcon className="w-10 h-10 text-slate-500" />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase tracking-widest mb-2">Vault is Empty</h3>
                            <p className="text-sm font-medium text-slate-500 max-w-sm">You haven't generated any studio audio yet. Go back to the studio to brew some magic.</p>
                            <button onClick={() => setActiveTab('studio')} className="mt-8 px-8 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 hover:text-blue-400 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-blue-500/20">Go to Studio</button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500">
                            {vaultItems.map(item => (
                                <div key={item.timestamp} className="bg-[#0F1118] p-6 rounded-[2rem] border border-white/5 flex justify-between items-center group hover:border-blue-500/50 transition-all shadow-xl">
                                    <div className="flex items-center gap-6">
                                        <button onClick={() => { voiceRef.current.src = item.url; setParsedSubtitles(item.srt ? parseSRT(item.srt) : []); voiceRef.current.play(); }} className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner"><Play className="w-5 h-5 fill-current ml-1" /></button>
                                        <div><div className="text-sm font-bold text-white italic line-clamp-1">"{item.text}..."</div><div className="text-[9px] uppercase font-black text-slate-600 mt-1 tracking-widest">{item.voice} • {item.date}</div></div>
                                    </div>
                                    <a href={item.url} download className="p-3 text-slate-500 hover:text-white transition-colors"><Download className="w-5 h-5" /></a>
                                </div>
                            ))}
                        </div>
                    )
                )}
            </main>
        </div >
    );
};

export default App;