import React from 'react';
import { User, Star, Crown, History as HistoryIcon, Zap, LogOut } from 'lucide-react';

const Profile = ({ user, isGuestMode, hasPlan, vaultCount, onUpgrade, onSignOutAction }) => {
    return (
        <div className="flex flex-col items-center max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="relative mb-10">
                <div className="w-32 h-32 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl shadow-blue-500/20">
                    <div className="w-full h-full rounded-[2.8rem] bg-[#0F1118] flex items-center justify-center overflow-hidden border border-white/5">
                        {user?.photoURL ? (
                            <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <User className="w-12 h-12 text-blue-500/50" />
                        )}
                    </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-2xl shadow-xl border-4 border-[#08090D]">
                    <Star className="w-4 h-4 fill-current" />
                </div>
            </div>

            <div className="text-center mb-12">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{user?.displayName || (isGuestMode ? "Guest Creator" : "Pro User")}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">{user?.email || "Studio Guest Access"}</p>
            </div>

            <div className="w-full grid gap-4">
                <div className="bg-[#0F1118] border border-white/5 p-8 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-inner">
                            <Crown className="w-7 h-7 text-blue-500" />
                        </div>
                        <div className="text-left">
                            <div className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1">Current Studio Plan</div>
                            <div className="text-xl font-black text-white uppercase tracking-widest">{hasPlan ? "Studio Pro" : (isGuestMode ? "Guest Tier" : "Free Plan")}</div>
                        </div>
                    </div>
                    {!hasPlan && (
                        <button onClick={onUpgrade} className="relative w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3 group">
                            Upgrade Now <Zap className="w-4 h-4 fill-current group-hover:animate-pulse" />
                        </button>
                    )}
                </div>

                <div className="bg-[#0F1118]/50 border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                            <HistoryIcon className="w-6 h-6 text-slate-500" />
                        </div>
                        <div className="text-left">
                            <div className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1">Total Creations</div>
                            <div className="text-xl font-black text-white tracking-widest">{vaultCount} Master Tracks</div>
                        </div>
                    </div>
                </div>

                <button onClick={onSignOutAction} className="mt-6 w-full py-5 bg-white/5 hover:bg-red-500/10 text-slate-500 hover:text-red-500 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border border-white/5 flex items-center justify-center gap-3">
                    <LogOut className="w-4 h-4" /> {isGuestMode ? "Sign In to Pro Account" : "Sign Out"}
                </button>
            </div>
        </div>
    );
};

export default Profile;
