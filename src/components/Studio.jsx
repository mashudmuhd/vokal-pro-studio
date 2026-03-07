import React from 'react';
import {
    Loader2, AlertCircle, Headset, ChevronRight, Sparkles,
    ToggleLeft, ToggleRight, Zap, Eye, PauseCircle, PlayCircle,
    Download, FileCode
} from 'lucide-react';

const Studio = ({
    error, script, setScript, isProcessing, isGuestMode, user, hasPlan, setShowPlans,
    enableSubtitles, setEnableSubtitles, srtLang, setSrtLang, subtitleLanguages,
    selectedVoice, setShowVoiceSheet, voiceList, onGenerate,
    currentAudio, activeSubtitle, isPlayingCurrent, onTogglePlay, onDownload, onDownloadSrt
}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 flex-1">
            <div className="flex flex-col gap-4 flex-1">
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
                            const val = e.target.value;
                            if (isGuestMode && val.length > 50) {
                                // Handled in App level toast
                                setScript(val.substring(0, 50));
                            } else if (!isGuestMode && user && !hasPlan && val.length > 500) {
                                setShowPlans(true);
                                setScript(val.substring(0, 500));
                            } else {
                                setScript(val);
                            }
                        }}
                        placeholder="Type or paste your script here..."
                        className="w-full min-h-[120px] max-h-[220px] lg:min-h-[300px] bg-transparent p-5 pb-12 sm:p-8 sm:pb-14 outline-none text-base sm:text-lg lg:text-2xl font-medium text-slate-100 resize-none transition-all leading-relaxed placeholder:text-slate-700 custom-scrollbar"
                    />
                    <div className="absolute bottom-5 right-6 sm:bottom-6 sm:right-8 text-[11px] font-black tracking-widest uppercase text-slate-600 pointer-events-none select-none flex items-center gap-1.5">
                        <span className={script.length >= (isGuestMode ? 50 : (hasPlan ? Infinity : 500)) ? 'text-blue-500' : 'text-slate-400'}>{script.length}</span>
                        <span className="opacity-40">/</span>
                        <span>{isGuestMode ? 50 : (hasPlan ? '∞' : 500)}</span>
                    </div>
                </div>

                <div className="shrink-0 bg-[#0F1118]/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-6 shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 opacity-50"></div>
                    <div className="relative flex flex-wrap items-center gap-6 z-10 w-full sm:w-auto">
                        <button onClick={() => setEnableSubtitles(!enableSubtitles)} className={`flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase transition-all duration-300 ${enableSubtitles ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/10' : 'bg-black/50 text-slate-500 border border-white/5 hover:bg-white/5 hover:text-slate-300'}`}>
                            {enableSubtitles ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />} Auto Subtitles
                        </button>
                        {enableSubtitles && (
                            <div className="flex gap-2 overflow-x-auto p-1 custom-scrollbar w-full sm:w-auto">
                                {subtitleLanguages.map(sl => (
                                    <button key={sl.id} onClick={() => setSrtLang(sl.id)} className={`shrink-0 px-5 py-3 rounded-xl text-[10px] font-black uppercase transition-all duration-300 border ${srtLang === sl.id ? 'bg-white text-black border-white shadow-lg shadow-white/10' : 'bg-black/50 text-slate-500 border-white/5 hover:bg-white/10 hover:text-slate-300'}`}>{sl.label}</button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 relative z-10">
                        <button onClick={() => setShowVoiceSheet(true)} className="lg:hidden w-full sm:w-auto px-6 py-4 bg-[#0F1118]/80 backdrop-blur-md border border-white/10 hover:bg-white/5 text-slate-300 rounded-2xl font-bold text-xs uppercase flex items-center justify-between gap-3 shadow-lg transition-all active:scale-95">
                            <span className="flex items-center gap-2"><Headset className="w-4 h-4 text-blue-500" /> Voice: {voiceList.find(v => v.id === selectedVoice)?.label || 'Select'}</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>

                        <button onClick={onGenerate} disabled={isProcessing || !script.trim()} className="w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-40 disabled:grayscale">
                            {isProcessing ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />} {isProcessing ? "Synthesizing..." : "Generate Master"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-[460px] shrink-0 flex flex-col gap-6 h-full">
                {/* Voice Model Content from App.jsx goes here in the LG view */}
                <div className="hidden lg:block bg-[#0F1118]/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl shrink-0 transition-hover duration-500 hover:border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>
                    <h4 className="text-[10px] font-black uppercase text-slate-500 mb-6 tracking-[0.2em] flex items-center gap-3"><Headset className="w-4 h-4 text-blue-500" /> Voice Models</h4>
                    {/* Render voice selection content injected or passed from App */}
                    <div className="space-y-3 relative z-10 w-full mb-4">
                        {voiceList.map(v => (
                            <div
                                key={v.id}
                                className={`w-full p-4 rounded-2xl text-left border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${selectedVoice === v.id ? 'bg-blue-500/10 border-blue-500/30 shadow-inner' : 'bg-black/40 border-white/5 hover:border-white/10 hover:bg-white/5'}`}
                                onClick={() => onGenerate.onVoiceSelect(v.id)}
                            >
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onGenerate.onPreview(v.id);
                                    }}
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors z-20 hover:scale-105 active:scale-95 ${onGenerate.playingPreview === v.id ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : (selectedVoice === v.id ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-slate-400 hover:bg-white/10 group-hover:text-white')}`}
                                >
                                    {onGenerate.playingPreview === v.id ? <PauseCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4 ml-0.5" />}
                                </button>
                                <div className="flex-1">
                                    <div className={`text-sm font-bold mb-1 transition-colors ${selectedVoice === v.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{v.label}</div>
                                    <div className="text-[10px] text-slate-500 font-medium">{v.type}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`shrink-0 lg:flex-1 flex flex-col p-6 sm:p-8 rounded-[2.5rem] border transition-all duration-700 shadow-2xl relative overflow-hidden group ${isProcessing ? 'bg-blue-600/5 border-blue-500/40' : (currentAudio ? 'bg-gradient-to-br from-blue-950/20 to-black border-blue-500/30' : 'bg-gradient-to-br from-[#050505] to-[#0A0B10] border-white/5')}`}>
                    {isProcessing && <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent)] animate-pulse"></div>}
                    <h4 className="text-[10px] font-black uppercase text-slate-600 mb-auto tracking-[0.2em] relative z-10 flex items-center gap-3">
                        {isProcessing ? <Zap className="w-3 h-3 text-blue-400 animate-bounce" /> : <Eye className="w-3 h-3 text-blue-500/60" />}
                        {isProcessing ? 'Engine Processing...' : 'Studio Output Engine'}
                    </h4>

                    <div className="relative z-10 my-8 flex-1 flex flex-col items-center justify-center text-center">
                        {isProcessing ? (
                            <div className="flex flex-col items-center gap-6">
                                <div className="flex items-end gap-1.5 h-16">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="w-1.5 bg-blue-500 rounded-full animate-wave" style={{ animationDelay: `${i * 0.1}s`, height: '20%' }}></div>
                                    ))}
                                </div>
                                <p className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] animate-pulse">Synthesizing Voice...</p>
                            </div>
                        ) : (
                            <>
                                <p className={`text-xl sm:text-2xl font-medium leading-relaxed transition-all duration-500 ${activeSubtitle ? 'text-white drop-shadow-lg' : 'text-slate-600 italic'}`}>
                                    {activeSubtitle || (currentAudio ? "Audio ready for playback" : "Awaiting Audio...")}
                                </p>
                            </>
                        )}
                    </div>

                    {currentAudio && !isProcessing && (
                        <div className="relative z-10 flex flex-col gap-5 animate-in slide-in-from-bottom-4 duration-500">
                            <button onClick={onTogglePlay} className={`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl ${isPlayingCurrent ? 'bg-white text-black scale-[0.98]' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>
                                {isPlayingCurrent ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
                                {isPlayingCurrent ? "Pause Master" : "Play Master Track"}
                            </button>

                            <div className="flex gap-3">
                                <button onClick={onDownload} className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 transition-all border border-white/5"><Download className="w-4 h-4 text-blue-500" /> WAV</button>
                                {currentAudio.srt && <button onClick={onDownloadSrt} className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-[9px] font-black uppercase border border-white/5 flex items-center justify-center gap-2 transition-colors"><FileCode className="w-4 h-4 text-emerald-500" /> SRT</button>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Studio;
