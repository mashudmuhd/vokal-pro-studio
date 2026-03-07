import React from 'react';
import { User, Lock, LogOut, Crown } from 'lucide-react';

const Header = ({ user, isGuestMode, hasPlan, lang, languages, onLangChange, onSignOutAction }) => {
    return (
        <header className="flex flex-col lg:flex-row justify-between items-center mb-8 shrink-0 gap-6">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter transition-all hover:scale-105 duration-300">
                    VOKAL <span className="text-blue-500">PRO</span>
                </h2>
                <p className="text-[9px] font-black uppercase text-slate-600 tracking-[0.3em]">Studio Edition</p>
            </div>

            <div className="flex items-center flex-wrap justify-center gap-4">
                <div className="flex bg-[#0F1118] p-1.5 rounded-2xl border border-white/5 shadow-xl">
                    {languages.map(l => (
                        <button
                            key={l.id}
                            onClick={() => onLangChange(l.id)}
                            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all duration-300 ${lang === l.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
                        >
                            {l.native}
                        </button>
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
                        <span className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest truncate max-w-[80px] sm:max-w-[100px]">
                            {user ? (user.displayName || user.email?.split('@')[0] || user.phoneNumber) : 'Guest User'}
                        </span>
                        {hasPlan ? (
                            <span className="text-[8px] sm:text-[9px] text-amber-500 font-black uppercase tracking-widest flex items-center gap-1 mt-0.5"><Crown className="w-3 h-3" /> Studio Pro</span>
                        ) : (
                            !isGuestMode ? <span className="text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5">Free User</span> : <span className="text-[8px] sm:text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5">Tryout Mode</span>
                        )}
                    </div>

                    <div className="w-px h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2"></div>

                    <button
                        onClick={onSignOutAction}
                        className="p-2 sm:p-2.5 rounded-xl transition-all text-slate-600 hover:text-blue-500 hover:bg-blue-500/10 flex items-center justify-center shrink-0"
                        title={isGuestMode ? "Sign In" : "Sign Out"}
                    >
                        {isGuestMode ? <Lock className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform" /> : <LogOut className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition-transform" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
