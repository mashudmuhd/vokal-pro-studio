import React, { useState, useEffect, useRef } from 'react';
import { Loader2, Headset, X, Play, Pause, PlayCircle, PauseCircle } from 'lucide-react';

import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Auth from './Auth';
import { Toaster, toast } from 'react-hot-toast';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Studio from './components/Studio';
import Vault from './components/Vault';
import Profile from './components/Profile';
import Plans from './components/Plans';
import ConfirmDialog from './components/ConfirmDialog';

import { SCRIPT_LANGUAGES, SUBTITLE_LANGUAGES, VOICE_LIST } from './constants';
import { getVaultItems, saveAudioToVault, deleteVaultItem, clearVault } from './utils/vault';

const CLOUD_FUNCTION_URL = import.meta.env.VITE_API_URL || "https://vokal-pro-api.vercel.app/api/generate";

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

const App = () => {
    const [activeTab, setActiveTab] = useState('studio');
    const [lang, setLang] = useState('Malayalam');
    const [srtLang, setSrtLang] = useState('English');
    const [enableSubtitles, setEnableSubtitles] = useState(false);
    const [showVoiceSheet, setShowVoiceSheet] = useState(false);
    const [error, setError] = useState(null);

    const [script, setScript] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState("Maya");
    const [vaultItems, setVaultItems] = useState([]);

    const [currentAudio, setCurrentAudio] = useState(null);
    const [parsedSubtitles, setParsedSubtitles] = useState([]);
    const [activeSubtitle, setActiveSubtitle] = useState("");

    // Playback states
    const [isPlayingCurrent, setIsPlayingCurrent] = useState(false);
    const [playingPreview, setPlayingPreview] = useState(null);
    const [isAudioInitialized, setIsAudioInitialized] = useState(false);

    // Auth & User states
    const [user, setUser] = useState(null);
    const [isGuestMode, setIsGuestMode] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);

    // Plans State
    const [hasPlan, setHasPlan] = useState(false);
    const [showPlans, setShowPlans] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
    const [confirmDialog, setConfirmDialog] = useState({ show: false, title: '', message: '', onConfirm: null, type: 'danger' });

    const voiceRef = useRef(null);
    const previewRef = useRef(new Audio());

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        // Load vault items from IndexedDB
        getVaultItems().then(items => {
            setVaultItems(items);
        });
    }, []);

    useEffect(() => {
        const currentVoice = VOICE_LIST.find(v => v.id === selectedVoice);
        if (currentVoice) {
            // Check if current script is one of the many previous defaults to allow overwriting
            const isDefault = SCRIPT_LANGUAGES.some(l => l.defaultText === script) ||
                script.trim() === '' ||
                script.includes("മക്കളേ, സുഖമാണോ") ||
                script.includes("സഹായിക്കുന്നതിനായി ഞാൻ ഇവിടെയുണ്ട്") ||
                script.includes("help you create your professional voice") ||
                script.startsWith("Hello! നമസ്കാരം");

            if (isDefault) {
                if (currentVoice.lang === 'Malayalam') {
                    setScript(`Hello! നമസ്കാരം, ഞാൻ ${currentVoice.label}യാണ്. `);
                } else {
                    setScript(`Hello! I am ${currentVoice.label}. `);
                }
            }
        }
    }, [selectedVoice, lang]);

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

    const changeAudioSpeed = async (audioBlob, speed) => {
        if (speed === 1.0) return audioBlob;
        const arrayBuffer = await audioBlob.arrayBuffer();
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        const offlineCtx = new OfflineAudioContext(
            audioBuffer.numberOfChannels,
            audioBuffer.length / speed,
            audioBuffer.sampleRate
        );

        const source = offlineCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.playbackRate.value = speed;
        source.connect(offlineCtx.destination);
        source.start();

        const renderedBuffer = await offlineCtx.startRendering();

        // Convert to WAV
        const length = renderedBuffer.length * renderedBuffer.numberOfChannels * 2 + 44;
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);

        const writeString = (offset, string) => {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        };

        writeString(0, 'RIFF');
        view.setUint32(4, length - 8, true);
        writeString(8, 'WAVE');
        writeString(12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, renderedBuffer.numberOfChannels, true);
        view.setUint32(24, renderedBuffer.sampleRate, true);
        view.setUint32(28, renderedBuffer.sampleRate * renderedBuffer.numberOfChannels * 2, true);
        view.setUint16(32, renderedBuffer.numberOfChannels * 2, true);
        view.setUint16(34, 16, true);
        writeString(36, 'data');
        view.setUint32(40, length - 44, true);

        let offset = 44;
        for (let i = 0; i < renderedBuffer.length; i++) {
            for (let channel = 0; channel < renderedBuffer.numberOfChannels; channel++) {
                let sample = renderedBuffer.getChannelData(channel)[i];
                sample = Math.max(-1, Math.min(1, sample));
                view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
                offset += 2;
            }
        }

        return new Blob([buffer], { type: 'audio/wav' });
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
                const errText = await res.text().catch(() => "{}");
                let err = {};
                try { err = JSON.parse(errText); } catch (e) { }

                if (res.status === 429 || err?.error?.code === 429 || err?.error === 'TOO_MANY_REQUESTS') {
                    throw new Error("Whoops! You're making requests too fast. Please wait a minute and try again.");
                }
                if (retries < maxRetries) {
                    retries++;
                    const delay = Math.pow(2, retries) * 1000;
                    await new Promise(r => setTimeout(r, delay));
                    return attemptFetch();
                }

                const apiDetailedError = err?.error?.message || err?.error || errText;
                console.error("API Error details:", apiDetailedError);
                throw new Error(`System Error: ${res.status}`);
            }
            return await res.json();
        };
        return attemptFetch();
    };

    const handleGenerateVoice = async () => {
        if (isProcessing) return;

        // Premium Limit
        if (!hasPlan && script.length > 500) {
            setShowPlans(true);
            toast.error("Upgrade to Premium to generate longer audio! 👑", { icon: '👑' });
            return;
        }

        // Subtitle Premium Check
        if (enableSubtitles && !hasPlan) {
            setShowPlans(true);
            toast.error("Auto Subtitles require a Premium plan! 👑", { icon: '👑' });
            return;
        }

        if (isGuestMode) {
            let used = parseInt(localStorage.getItem('vokal_guest_used') || '0');
            if (used + script.length > 100) {
                const ipRes = await fetch('https://api64.ipify.org?format=json').catch(() => null);
                const ip = ipRes ? (await ipRes.json()).ip : 'Unknown';
                let deviceId = localStorage.getItem('vokal_device_id');
                if (!deviceId) {
                    deviceId = 'DEV_' + Math.random().toString(36).substr(2, 9).toUpperCase();
                    localStorage.setItem('vokal_device_id', deviceId);
                }
                toast.error(`Access Denied! Device (${deviceId}) has reached the 100 char free limit. Please register to continue.`, { icon: '🛑', duration: 7000 });
                setShowPlans(true);
                return;
            }
        }

        if (!isAudioInitialized) await initializeAudio();
        if (!script.trim()) return;

        // Smart Caching: 1. Instant check against current loaded audio
        if (currentAudio &&
            currentAudio.fullText === script &&
            currentAudio.voice === selectedVoice &&
            currentAudio.srtLang === (enableSubtitles ? srtLang : "None")) {
            return;
        }

        // 2. Deep check against the entire local vault (previous generations)
        const existingItem = vaultItems.find(item =>
            (item.fullText === script || item.text.trim() === script.substring(0, 40).trim()) &&
            item.voice === selectedVoice &&
            item.srtLang === (enableSubtitles ? srtLang : "None")
        );

        if (existingItem) {
            setCurrentAudio(existingItem);
            setParsedSubtitles(enableSubtitles ? parseSRT(existingItem.srt) : []);
            voiceRef.current.src = existingItem.url;
            return;
        }

        setIsProcessing(true); setError(null);
        try {
            const voiceObj = VOICE_LIST.find(v => v.id === selectedVoice);
            const voiceId = voiceObj?.voice_id || "ml-IN-Wavenet-C";

            const langMap = {
                'Malayalam': 'ml-IN',
                'English': 'en-US'
            };

            const voicePayload = {
                text: script,
                voiceId: voiceId,
                langCode: langMap[lang] || 'ml-IN',
                pitch: voiceObj?.pitch || 0,
                speakingRate: voiceObj?.speakingRate || 1.0
            };

            let srtPromise = null;
            if (enableSubtitles) {
                const srtPrompt = `Generate .SRT subtitles in ${srtLang} for: "${script}"`;
                srtPromise = callApi('analysis', { contents: [{ role: "user", parts: [{ text: srtPrompt }] }] });
            }

            const [vRes, sRes] = await Promise.all([callApi('tts', voicePayload), srtPromise]);
            const audioBase64 = vRes?.audio;
            const srtText = sRes?.candidates?.[0]?.content?.parts?.[0]?.text || "";

            if (audioBase64) {
                const byteCharacters = atob(audioBase64);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const wavBlob = new Blob([byteArray], { type: 'audio/mpeg' });

                const meta = {
                    srt: srtText, srtLang: enableSubtitles ? srtLang : "None",
                    text: script.substring(0, 40),
                    fullText: script, // Full script for 100% accurate cache matching
                    date: new Date().toLocaleTimeString(),
                    voice: selectedVoice, timestamp: Date.now()
                };

                await saveAudioToVault(meta, wavBlob);
                const items = await getVaultItems();
                setVaultItems(items);

                if (isGuestMode) {
                    let used = parseInt(localStorage.getItem('vokal_guest_used') || '0');
                    localStorage.setItem('vokal_guest_used', used + script.length);
                }

                const newItem = items[0]; // Assuming nearest timestamp is listed first
                setCurrentAudio(newItem);
                setParsedSubtitles(enableSubtitles ? parseSRT(srtText) : []);

                if (newItem && newItem.url) {
                    voiceRef.current.src = newItem.url;
                }

                toast.success('Studio Master Generated Successfully!', { icon: '✨' });
            }
        } catch (e) {
            setError(e.message);
            toast.error('Generation Failed: ' + e.message, { icon: '❌' });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleSignOutConfirm = () => {
        setConfirmDialog({
            show: true,
            title: isGuestMode ? 'Exit Guest Mode?' : 'Sign Out?',
            message: isGuestMode
                ? 'Are you sure you want to exit Tryout mode and sign in?'
                : 'Are you sure you want to sign out? You will need to log back in to access your pro features.',
            type: 'danger',
            confirmText: isGuestMode ? 'Sign In Now' : 'Sign Out Now',
            onConfirm: () => {
                if (isGuestMode) {
                    setIsGuestMode(false);
                    setConfirmDialog(prev => ({ ...prev, show: false }));
                } else {
                    signOut(auth).then(() => {
                        toast.success('Signed out successfully');
                        setActiveTab('studio');
                        setConfirmDialog(prev => ({ ...prev, show: false }));
                    });
                }
            },
            onCancel: () => setConfirmDialog(prev => ({ ...prev, show: false }))
        });
    };

    if (authLoading) return <div className="min-h-screen bg-[#08090D] flex items-center justify-center"><Loader2 className="w-10 h-10 text-blue-500 animate-spin" /></div>;
    if (!user && !isGuestMode) return <Auth onGuestLogin={() => setIsGuestMode(true)} />;

    return (
        <div className="h-[100dvh] bg-[#08090D] text-slate-300 flex flex-col md:flex-row overflow-hidden font-sans">
            <GlobalStyles />
            <ConfirmDialog
                show={confirmDialog.show}
                title={confirmDialog.title}
                message={confirmDialog.message}
                type={confirmDialog.type}
                confirmText={confirmDialog.confirmText}
                onConfirm={confirmDialog.onConfirm}
                onCancel={() => setConfirmDialog({ ...confirmDialog, show: false })}
            />
            <Toaster position="top-center" toastOptions={{ style: { background: '#1c1c24', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />

            <Plans
                show={showPlans}
                onClose={() => setShowPlans(false)}
                onSelectPlan={(plan) => {
                    setHasPlan(true);
                    setShowPlans(false);
                    toast.success(`${plan.name} Access Granted! (Payment portal coming soon)`, { icon: '💳' });
                }}
            />

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
                            <div className="space-y-3 relative z-10 w-full mb-4">
                                {VOICE_LIST.filter(v => v.lang === lang).map(v => (
                                    <div
                                        key={v.id}
                                        className={`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${selectedVoice === v.id ? 'bg-blue-500/10 border-blue-500/30 shadow-inner' : 'bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5'}`}
                                        onClick={() => { setSelectedVoice(v.id); setShowVoiceSheet(false); }}
                                    >
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (playingPreview === v.id) {
                                                    previewRef.current.pause();
                                                    previewRef.current.currentTime = 0;
                                                    setPlayingPreview(null);
                                                } else {
                                                    if (isPlayingCurrent) voiceRef.current.pause();
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
                                            {playingPreview === v.id ? <PauseCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4 ml-0.5" />}
                                        </button>
                                        <div className="flex-1">
                                            <div className={`text-sm font-bold mb-1 transition-colors ${selectedVoice === v.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{v.label}</div>
                                            <div className="text-[10px] text-slate-500 font-medium">{v.type}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!isAudioInitialized && (
                <div onClick={initializeAudio} className="fixed inset-0 z-[1000] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 60%, #050918 0%, #000 70%)' }}>
                    <div style={{ position: 'relative', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', zIndex: 10, flexShrink: 0 }}>
                        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)', animation: 'glow-pulse 2.5s ease-in-out infinite' }}></div>
                        <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', border: '1px solid rgba(59,130,246,0.2)', animation: 'spin-slow 12s linear infinite' }}>
                            <div style={{ position: 'absolute', top: '-4px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 14px 4px #3b82f6' }}></div>
                        </div>
                        <div style={{ position: 'absolute', width: '240px', height: '240px', borderRadius: '50%', border: '1px solid rgba(99,102,241,0.25)', animation: 'spin-slow-rev 8s linear infinite' }}>
                            <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8', boxShadow: '0 0 10px 3px #818cf8' }}></div>
                        </div>
                        <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', border: '1px solid rgba(59,130,246,0.15)', animation: 'spin-slow 6s linear infinite' }}></div>
                        <div style={{ position: 'relative', zIndex: 5, width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px 12px rgba(59,130,246,0.35), 0 0 80px 20px rgba(59,130,246,0.12)', animation: 'float-mic 3s ease-in-out infinite' }}>
                            <Headset style={{ width: '44px', height: '44px', color: 'white' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '40px', marginBottom: '28px', zIndex: 10 }}>
                        {[['bar1', '#3b82f6'], ['bar2', '#6366f1'], ['bar3', '#3b82f6'], ['bar4', '#60a5fa'], ['bar5', '#818cf8'], ['bar1', '#3b82f6'], ['bar2', '#6366f1']].map(([cls, color], i) => (
                            <div key={i} className={`animate-${cls}`} style={{ width: '5px', borderRadius: '3px', background: color, opacity: 0.85 }}></div>
                        ))}
                    </div>
                    <h1 style={{ fontSize: 'clamp(1rem,5vw,1.5rem)', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', zIndex: 10, background: 'linear-gradient(90deg,#60a5fa,#a5b4fc,#3b82f6,#60a5fa)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'text-shimmer 3s linear infinite', textAlign: 'center', padding: '0 24px' }}>Vokal Pro Studio</h1>
                    <p style={{ marginTop: '10px', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(148,163,184,0.6)', zIndex: 10, fontWeight: 700 }}>AI Voice Engine</p>
                    <div style={{ position: 'absolute', bottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 10 }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(59,130,246,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'tap-bounce 1.5s ease-in-out infinite' }}>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M6 1v12M6 13l-4-4M6 13l4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(148,163,184,0.45)', fontWeight: 700, textTransform: 'uppercase' }}>Tap anywhere</span>
                    </div>
                </div>
            )}

            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

            <main className="flex-1 p-6 sm:p-8 md:p-12 pb-32 md:pb-12 overflow-y-auto flex flex-col min-h-0 order-first md:order-last custom-scrollbar">
                <Header
                    user={user}
                    isGuestMode={isGuestMode}
                    hasPlan={hasPlan}
                    lang={lang}
                    languages={SCRIPT_LANGUAGES}
                    onLangChange={(newLang) => {
                        setLang(newLang);
                        const langObj = SCRIPT_LANGUAGES.find(l => l.id === newLang);
                        if (langObj) {
                            // Automatically select the best voice for the chosen language
                            const langToVoice = {
                                'Malayalam': 'Maya',
                                'English': 'Francis'
                            };
                            if (langToVoice[newLang]) {
                                setSelectedVoice(langToVoice[newLang]);
                            }

                            // Overwrite the script if it's the default one
                            const isDefault = SCRIPT_LANGUAGES.some(l => l.defaultText === script);
                            if (isDefault || script.trim() === '') {
                                setScript(langObj.defaultText);
                            }
                        }
                    }}
                    onSignOutAction={handleSignOutConfirm}
                />

                {activeTab === 'studio' && (
                    <Studio
                        error={error}
                        script={script}
                        setScript={setScript}
                        isProcessing={isProcessing}
                        isGuestMode={isGuestMode}
                        user={user}
                        hasPlan={hasPlan}
                        setShowPlans={setShowPlans}
                        enableSubtitles={enableSubtitles}
                        setEnableSubtitles={setEnableSubtitles}
                        srtLang={srtLang}
                        setSrtLang={setSrtLang}
                        subtitleLanguages={SUBTITLE_LANGUAGES}
                        selectedVoice={selectedVoice}
                        setShowVoiceSheet={setShowVoiceSheet}
                        voiceList={VOICE_LIST.filter(v => v.lang === lang)}
                        onGenerate={{
                            handle: handleGenerateVoice,
                            onVoiceSelect: setSelectedVoice,
                            playingPreview: playingPreview,
                            onPreview: (id) => {
                                if (playingPreview === id) {
                                    previewRef.current.pause();
                                    previewRef.current.currentTime = 0;
                                    setPlayingPreview(null);
                                } else {
                                    if (isPlayingCurrent) voiceRef.current.pause();
                                    const basePath = import.meta.env.BASE_URL || "/";
                                    const previewPath = `previews/${lang.toLowerCase()}/${id.toLowerCase()}.wav`;
                                    previewRef.current.src = basePath + previewPath;
                                    previewRef.current.play().catch(err => {
                                        console.warn("Preview missing:", previewPath);
                                        toast.error(`Missing audio for ${lang}: ${id}`, {
                                            icon: '📂',
                                            description: `File should be at: ${previewPath}`
                                        });
                                    });
                                    setPlayingPreview(id);
                                    previewRef.current.onended = () => setPlayingPreview(null);
                                }
                            }
                        }}
                        currentAudio={currentAudio}
                        activeSubtitle={activeSubtitle}
                        isPlayingCurrent={isPlayingCurrent}
                        onTogglePlay={() => {
                            if (voiceRef.current.src !== currentAudio.url) voiceRef.current.src = currentAudio.url;
                            if (isPlayingCurrent) {
                                voiceRef.current.pause();
                            } else {
                                voiceRef.current.playbackRate = playbackSpeed; // Apply speed on play
                                voiceRef.current.play();
                            }
                        }}
                        onDownload={async () => {
                            const blob = await fetch(currentAudio.url).then(r => r.blob());
                            const finalBlob = await changeAudioSpeed(blob, playbackSpeed);
                            const url = URL.createObjectURL(finalBlob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `master_audio_${playbackSpeed}x.wav`;
                            a.click();
                        }}
                        playbackSpeed={playbackSpeed}
                        setPlaybackSpeed={setPlaybackSpeed}
                        onDownloadSrt={() => {
                            const b = new Blob([currentAudio.srt], { type: 'text/plain' });
                            const a = document.createElement('a');
                            a.href = URL.createObjectURL(b);
                            a.download = 'subtitles.srt';
                            a.click();
                        }}
                    />
                )}

                {activeTab === 'vault' && (
                    <Vault
                        items={vaultItems}
                        onPlay={(item) => {
                            voiceRef.current.src = item.url;
                            setParsedSubtitles(item.srt ? parseSRT(item.srt) : []);
                            voiceRef.current.play();
                            setIsPlayingCurrent(true);
                            setCurrentAudio(item);
                        }}
                        onDelete={(item) => {
                            setConfirmDialog({
                                show: true,
                                title: 'Delete Track?',
                                message: 'Are you sure you want to delete this master track from your history?',
                                type: 'danger',
                                confirmText: 'Delete Track',
                                onConfirm: async () => {
                                    await deleteVaultItem(item.timestamp);
                                    const items = await getVaultItems();
                                    setVaultItems(items);
                                    toast.success('Track Deleted');
                                    setConfirmDialog(p => ({ ...p, show: false }));
                                },
                                onCancel: () => setConfirmDialog(p => ({ ...p, show: false }))
                            });
                        }}
                        onClear={() => {
                            setConfirmDialog({
                                show: true,
                                title: 'Clear Vault?',
                                message: 'This will permanently remove all your generated audio from the local vault. This action cannot be undone.',
                                type: 'danger',
                                confirmText: 'Clear Vault',
                                onConfirm: async () => {
                                    await clearVault();
                                    const items = await getVaultItems();
                                    setVaultItems(items);
                                    toast.success('Vault Cleared');
                                    setConfirmDialog(p => ({ ...p, show: false }));
                                },
                                onCancel: () => setConfirmDialog(p => ({ ...p, show: false }))
                            });
                        }}
                        onStudioGo={() => setActiveTab('studio')}
                    />
                )}

                {activeTab === 'profile' && (
                    <Profile
                        user={user}
                        isGuestMode={isGuestMode}
                        hasPlan={hasPlan}
                        vaultCount={vaultItems.length}
                        onUpgrade={() => setShowPlans(true)}
                        onSignOutAction={handleSignOutConfirm}
                    />
                )}
            </main>
        </div>
    );
};

export default App;