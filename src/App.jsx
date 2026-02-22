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

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const ttsModel = "gemini-2.5-flash-preview-tts";
const analysisModel = "gemini-2.5-flash";

const SCRIPT_LANGUAGES = [
    { id: 'Malayalam', native: 'മലയാളം' },
    { id: 'English', native: 'English' },
    { id: 'Hindi', native: 'ഹിन्दी' },
    { id: 'Tamil', native: 'தமிழ்' }
];

const SUBTITLE_LANGUAGES = [
    { id: 'English', label: 'English Sub' },
    { id: 'Malayalam', label: 'Malayalam Sub' },
    { id: 'Hindi', label: 'Hindi Sub' },
    { id: 'Tamil', label: 'Tamil Sub' }
];

const VOICE_LIST = [
    { id: "Callirrhoe", label: "Lalitha - Matriarch", type: "Female", desc: "Warm, expressive, maternal storytelling." },
    { id: "Morgan_Legend", label: "Morgan - The Legend", type: "Ultra Bass", desc: "Legendary voice with deep cinematic resonance." },
    { id: "Charon", label: "Charon - Deep Slow", type: "Slow Bass", desc: "Deep and slow flow." },
    { id: "Achernar", label: "Achernar - Calm", type: "Professional", desc: "Clear professional voice." }
];

const App = () => {
    const [activeTab, setActiveTab] = useState('studio');
    const [lang, setLang] = useState('Malayalam');
    const [srtLang, setSrtLang] = useState('English');
    const [enableSubtitles, setEnableSubtitles] = useState(false);
    const [error, setError] = useState(null);
    const [apiKeyValue, setApiKeyValue] = useState(apiKey);

    const [script, setScript] = useState("മക്കളേ, സുഖമാണോ? എല്ലാവരും ഭക്ഷണം കഴിച്ചോ?");
    const [isProcessing, setIsProcessing] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState("Callirrhoe");
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

    const callApi = async (model, payload) => {
        if (!apiKeyValue) throw new Error("Gemini API Key is missing. Please enter it in the top right.");
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKeyValue}`;
        let retries = 0;
        const maxRetries = 5;
        const attemptFetch = async () => {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                if (res.status === 429) {
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
            let voiceName = selectedVoice === "Morgan_Legend" ? "Charon" : selectedVoice;
            let stylePrompt = selectedVoice === "Callirrhoe"
                ? "Speak in a mature, maternal, warm, highly expressive Malayalam female tone like KPAC Lalitha."
                : "Speak in a clear professional voice with deep cinematic bass.";

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
                srtPromise = callApi(analysisModel, { contents: [{ role: "user", parts: [{ text: srtPrompt }] }] });
            }

            const [vRes, sRes] = await Promise.all([callApi(ttsModel, voicePayload), srtPromise]);
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
            }
        } catch (e) { setError(e.message); } finally { setIsProcessing(false); }
    };

    if (authLoading) return <div className="min-h-screen bg-[#08090D] flex items-center justify-center"><Loader2 className="w-10 h-10 text-rose-500 animate-spin" /></div>;

    if (!user && !isGuestMode) return <Auth onGuestLogin={() => setIsGuestMode(true)} />;

    return (
        <div className="h-[100dvh] bg-[#08090D] text-slate-300 flex flex-col md:flex-row overflow-hidden font-sans">
            <Toaster position="top-center" toastOptions={{ style: { background: '#1c1c24', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />

            {showPlans && (
                <div className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4">
                    <div className="bg-[#0F1118] border border-white/5 rounded-[2.5rem] w-full max-w-5xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                        <button onClick={() => setShowPlans(false)} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10"><X className="w-6 h-6" /></button>
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-rose-900/10 pointer-events-none"></div>
                        <div className="p-12">
                            <div className="text-center mb-12 relative z-10">
                                <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter mb-4">VOKAL <span className="text-rose-500">PRO</span> PLANS</h2>
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
                                <div className="bg-gradient-to-b from-rose-900/40 to-black/80 border border-rose-500/30 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-rose-900/20">
                                    <div className="absolute -top-4 inset-x-0 flex justify-center"><span className="bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-rose-500/30">Most Popular</span></div>
                                    <div className="text-rose-500 mb-6 bg-rose-500/20 w-16 h-16 rounded-2xl flex items-center justify-center"><Star className="w-8 h-8" /></div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2">Creator</h3>
                                    <div className="text-rose-200/60 text-sm font-medium mb-6">For serious creators</div>
                                    <div className="text-4xl font-black text-white mb-8">₹499 <span className="text-sm font-medium text-rose-500/50">/ 100 Audio</span></div>
                                    <ul className="space-y-4 mb-8 flex-1">
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" /> 100 Audio Generations</li>
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" /> Cinematic Vocals</li>
                                        <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" /> SRT Subtitle Export</li>
                                    </ul>
                                    <button onClick={() => { setHasPlan(true); setShowPlans(false); toast.success('Creator Plan Activated!', { icon: '💳' }); }} className="w-full py-4 bg-rose-600 hover:bg-rose-500 text-white shadow-xl shadow-rose-600/20 rounded-xl font-bold uppercase tracking-widest transition-all">Buy Creator</button>
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

            {!isAudioInitialized && (
                <div onClick={initializeAudio} className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center cursor-pointer backdrop-blur-xl">
                    <Mic2 className="w-16 h-16 text-rose-600 animate-pulse mb-6" />
                    <h1 className="text-xl font-black text-white uppercase tracking-[0.5em]">Tap to Start Studio</h1>
                </div>
            )}

            <aside className="w-full md:w-20 bg-[#0F1118] border-t md:border-t-0 md:border-r border-white/5 flex md:flex-col items-center py-4 px-6 md:p-0 md:py-10 gap-4 md:gap-8 justify-between shrink-0 z-50 order-last md:order-first">
                <div className="flex md:flex-col gap-4 md:gap-8 items-center w-full md:w-auto justify-between md:justify-start">
                    <div className="w-10 h-10 bg-rose-600 rounded-xl hidden md:flex items-center justify-center shadow-lg"><Volume2 className="text-white w-5 h-5" /></div>
                    <nav className="flex md:flex-col gap-2 md:gap-6 w-full md:w-auto justify-center">
                        <button onClick={() => setActiveTab('studio')} className={`p-4 rounded-xl transition-all flex-1 md:flex-none flex justify-center ${activeTab === 'studio' ? 'bg-rose-600 text-white shadow-xl shadow-rose-600/20' : 'text-slate-600 hover:bg-white/5'}`}><Layout /></button>
                        <button onClick={() => setActiveTab('vault')} className={`p-4 rounded-xl transition-all flex-1 md:flex-none flex justify-center ${activeTab === 'vault' ? 'bg-rose-600 text-white shadow-xl shadow-rose-600/20' : 'text-slate-600 hover:bg-white/5'}`}><HistoryIcon /></button>
                    </nav>
                </div>
            </aside>

            <main className="flex-1 p-6 md:p-12 overflow-y-auto flex flex-col h-full min-h-0 order-first md:order-last">
                <header className="flex flex-col lg:flex-row justify-between items-center mb-8 shrink-0 gap-6">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">VOKAL <span className="text-rose-500">PRO</span></h2>
                        <p className="text-[9px] font-black uppercase text-slate-600 tracking-[0.3em]">Studio Edition</p>
                    </div>

                    <div className="flex items-center flex-wrap justify-center gap-4">
                        <div className="flex bg-[#0F1118] p-1.5 rounded-2xl border border-white/5 shadow-xl">
                            {SCRIPT_LANGUAGES.map(l => (
                                <button key={l.id} onClick={() => setLang(l.id)} className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all duration-300 ${lang === l.id ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/20' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}>{l.native}</button>
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
                            }} className="p-2 sm:p-2.5 rounded-xl transition-all text-slate-600 hover:text-rose-500 hover:bg-rose-500/10 flex items-center justify-center shrink-0" title={isGuestMode ? "Sign In" : "Sign Out"}>
                                {isGuestMode ? <Lock className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform" /> : <LogOut className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform" />}
                            </button>
                        </div>
                    </div>
                </header>

                {activeTab === 'studio' && (
                    <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
                        <div className="flex-1 flex flex-col gap-6 h-full">
                            {error && (
                                <div className="p-5 bg-rose-500/10 border border-rose-500/30 text-rose-500 rounded-2xl text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
                                    <AlertCircle className="w-5 h-5 shrink-0" /> {error}
                                </div>
                            )}
                            <div className="flex-1 relative group bg-gradient-to-b from-[#0F1118] to-[#0A0B10] rounded-[2.5rem] border border-white/5 shadow-2xl p-1 flex flex-col transition-all duration-500 hover:border-rose-500/30">
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent"></div>
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
                                    className="flex-1 w-full min-h-[150px] lg:h-auto bg-transparent p-6 sm:p-10 outline-none text-lg sm:text-xl lg:text-2xl font-medium text-slate-100 resize-none transition-all leading-relaxed placeholder:text-slate-700 custom-scrollbar"
                                />
                            </div>

                            <div className="shrink-0 bg-[#0F1118]/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-6 shadow-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-rose-500/5 opacity-50"></div>
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

                                <button onClick={handleGenerateVoice} disabled={isProcessing || !script.trim()} className="w-full sm:w-auto relative z-10 shrink-0 px-8 py-5 bg-gradient-to-r from-rose-600 to-rose-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:shadow-rose-600/30 transition-all active:scale-95 disabled:opacity-40 disabled:grayscale">
                                    {isProcessing ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />} {isProcessing ? "Synthesizing..." : "Generate Master"}
                                </button>
                            </div>
                        </div>

                        <div className="w-full lg:w-[460px] shrink-0 flex flex-col gap-6 h-full pb-8 md:pb-0">
                            <div className="bg-[#0F1118]/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl shrink-0 transition-hover duration-500 hover:border-white/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl group-hover:bg-rose-500/10 transition-colors duration-700"></div>
                                <h4 className="text-[10px] font-black uppercase text-slate-500 mb-6 tracking-[0.2em] flex items-center gap-3"><Headset className="w-4 h-4 text-rose-500" /> Voice Models</h4>
                                <div className="space-y-3 relative z-10">
                                    {VOICE_LIST.map(v => (
                                        <div key={v.id} className={`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${selectedVoice === v.id ? 'bg-rose-500/10 border-rose-500/30 shadow-inner' : 'bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5'}`} onClick={() => setSelectedVoice(v.id)}>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (playingPreview === v.id) {
                                                        voiceRef.current.pause();
                                                        setPlayingPreview(null);
                                                    } else {
                                                        // Fallback sample audio or generating real preview could go here. 
                                                        // For now simulating a play state change on the UI
                                                        setPlayingPreview(v.id);
                                                        if (isPlayingCurrent) voiceRef.current.pause();
                                                        // Simulate preview ending after a bit
                                                        setTimeout(() => setPlayingPreview(null), 3000);
                                                    }
                                                }}
                                                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${playingPreview === v.id ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : (selectedVoice === v.id ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' : 'bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white')}`}
                                            >
                                                {playingPreview === v.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                            </button>
                                            <div className="flex-1">
                                                <div className={`text-sm font-bold mb-1 transition-colors ${selectedVoice === v.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{v.label}</div>
                                                <div className="text-[10px] text-slate-500 font-medium">{v.type}</div>
                                            </div>
                                            {selectedVoice === v.id && <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 bg-gradient-to-br from-[#050505] to-[#0A0B10] p-8 rounded-[2.5rem] border border-white/5 flex flex-col shadow-inner min-h-[160px] relative overflow-hidden group">
                                <div className="absolute -inset-10 bg-gradient-to-t from-rose-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl"></div>
                                <h4 className="text-[10px] font-black uppercase text-slate-600 mb-auto tracking-[0.2em] relative z-10 flex items-center gap-2">
                                    <Eye className="w-3 h-3 text-rose-500/60" /> Subtitle Engine
                                </h4>
                                <div className="relative z-10 mt-6 flex-1 flex items-center justify-center text-center">
                                    <p className={`text-xl sm:text-2xl font-medium leading-relaxed transition-all duration-500 ${activeSubtitle ? 'text-white drop-shadow-md' : 'text-slate-600 italic'}`}>
                                        {activeSubtitle || "Awaiting Audio..."}
                                    </p>
                                </div>
                            </div>

                            {currentAudio && (
                                <div className="shrink-0 bg-gradient-to-br from-rose-950/40 to-black backdrop-blur-3xl p-8 rounded-[2.5rem] border border-rose-500/30 flex flex-col gap-6 animate-in slide-in-from-bottom-8 fade-in duration-500 shadow-2xl shadow-rose-900/20 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-rose-500/5 mix-blend-overlay"></div>
                                    <div className="absolute right-0 top-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
                                    <div className="relative z-10 flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-600/5 border border-rose-500/20 text-rose-400 flex items-center justify-center animate-pulse shadow-inner">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-base">Master Export Ready</div>
                                            <div className="text-[10px] text-rose-400/80 uppercase tracking-widest font-bold mt-1">Lossless Studio Quality</div>
                                        </div>
                                    </div>
                                    <button onClick={() => {
                                        if (voiceRef.current.src !== currentAudio.url) {
                                            voiceRef.current.src = currentAudio.url;
                                        }
                                        if (isPlayingCurrent) {
                                            voiceRef.current.pause();
                                        } else {
                                            voiceRef.current.play();
                                            setIsPlayingCurrent(true);
                                        }
                                    }} className="relative z-10 w-full py-5 bg-white text-black hover:bg-slate-200 rounded-2xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-3 transition-colors shadow-xl">
                                        {isPlayingCurrent ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />} {isPlayingCurrent ? "Pause Playback" : "Play Master Track"}
                                    </button>
                                    <div className="relative z-10 flex gap-4">
                                        <a href={currentAudio.url} download="master_audio.wav" className="flex-1 bg-gradient-to-b from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white py-4 rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-rose-600/30"><Download className="w-4 h-4" /> WAV HQ</a>
                                        {currentAudio.srt && <button onClick={() => {
                                            const b = new Blob([currentAudio.srt], { type: 'text/plain' });
                                            const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'subtitles.srt'; a.click();
                                        }} className="flex-1 bg-black/60 hover:bg-black/80 text-rose-100 py-4 rounded-xl text-[10px] font-black uppercase border border-rose-500/30 flex items-center justify-center gap-2 transition-colors hover:border-rose-500/50"><FileCode className="w-4 h-4 text-rose-400" /> SRT</button>}
                                    </div>
                                </div>
                            )}
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
                            <button onClick={() => setActiveTab('studio')} className="mt-8 px-8 py-3 bg-rose-600/10 hover:bg-rose-600/20 text-rose-500 hover:text-rose-400 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-rose-500/20">Go to Studio</button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500">
                            {vaultItems.map(item => (
                                <div key={item.timestamp} className="bg-[#0F1118] p-6 rounded-[2rem] border border-white/5 flex justify-between items-center group hover:border-rose-500/50 transition-all shadow-xl">
                                    <div className="flex items-center gap-6">
                                        <button onClick={() => { voiceRef.current.src = item.url; setParsedSubtitles(item.srt ? parseSRT(item.srt) : []); voiceRef.current.play(); }} className="w-12 h-12 bg-rose-600/10 text-rose-500 rounded-2xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all shadow-inner"><Play className="w-5 h-5 fill-current ml-1" /></button>
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