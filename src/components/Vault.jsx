import React from 'react';
import { History as HistoryIcon, Play, Trash2, Download } from 'lucide-react';

const Vault = ({ items, onPlay, onDelete, onClear, onStudioGo }) => {
    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in duration-500 opacity-60 mt-20">
                <div className="w-24 h-24 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl">
                    <HistoryIcon className="w-10 h-10 text-slate-500" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-2">Vault is Empty</h3>
                <p className="text-sm font-medium text-slate-500 max-w-sm">You haven't generated any studio audio yet. Go back to the studio to brew some magic.</p>
                <button onClick={onStudioGo} className="mt-8 px-8 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 hover:text-blue-400 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-blue-500/20">Go to Studio</button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center px-4">
                <h3 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">Your Master Collection</h3>
                <button onClick={onClear} className="text-[9px] font-black uppercase text-red-500/60 hover:text-red-500 transition-colors flex items-center gap-2">
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500 pb-20">
                {items.map(item => (
                    <div key={item.timestamp} className="bg-[#0F1118] p-6 rounded-[2.5rem] border border-white/5 flex justify-between items-center group hover:border-blue-500/50 transition-all shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-6 relative z-10">
                            <button onClick={() => onPlay(item)} className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner"><Play className="w-5 h-5 fill-current ml-1" /></button>
                            <div>
                                <div className="text-sm font-bold text-white italic line-clamp-1 group-hover:text-blue-200 transition-colors">"{item.text}..."</div>
                                <div className="text-[9px] uppercase font-black text-slate-600 mt-1 tracking-widest">{item.voice} • {item.date}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 relative z-10">
                            <a href={item.url} download={`${item.text.substring(0, 10)}_master.wav`} className="p-3 text-slate-600 hover:text-white transition-colors"><Download className="w-5 h-5" /></a>
                            <button onClick={() => onDelete(item)} className="p-3 text-slate-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"><Trash2 className="w-5 h-5" /></button>
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-3xl -mr-12 -mt-12 transition-opacity opacity-0 group-hover:opacity-100"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vault;
