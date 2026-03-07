import React from 'react';
import { LogOut, Star } from 'lucide-react';

const ConfirmDialog = ({ show, title, message, onConfirm, onCancel, type, confirmText }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onCancel}></div>
            <div className="relative w-full max-w-sm bg-[#0F1118] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${type === 'danger' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                    {type === 'danger' ? <LogOut className="w-8 h-8" /> : <Star className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest text-center mb-3">{title}</h3>
                <p className="text-slate-400 text-sm font-medium text-center mb-8 leading-relaxed px-2">{message}</p>
                <div className="flex flex-col gap-3">
                    <button
                        onClick={onConfirm}
                        className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-xl ${type === 'danger' ? 'bg-red-500 hover:bg-red-400 text-white shadow-red-500/20' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20'}`}
                    >
                        {confirmText || "Yes, I'm sure"}
                    </button>
                    <button
                        onClick={onCancel}
                        className="w-full py-4 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5"
                    >
                        No, Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
