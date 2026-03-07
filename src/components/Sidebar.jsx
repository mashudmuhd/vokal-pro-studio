import React from 'react';
import { Layout, History as HistoryIcon, User, Volume2 } from 'lucide-react';

const Sidebar = ({ activeTab, onTabChange }) => {
    const navItems = [
        { id: 'studio', label: 'Studio', icon: Layout },
        { id: 'vault', label: 'Vault', icon: HistoryIcon },
        { id: 'profile', label: 'Profile', icon: User },
    ];

    return (
        <aside className="fixed bottom-4 left-1/2 -translate-x-1/2 md:static md:translate-x-0 w-[94%] max-w-[360px] md:w-24 bg-[#0F1118]/80 backdrop-blur-3xl border border-white/10 md:border-none md:bg-transparent rounded-[2rem] md:rounded-none flex md:flex-col items-center py-2.5 px-6 md:py-12 gap-4 md:gap-12 justify-center z-50 shadow-2xl shadow-black/80 md:shadow-none">
            <div className="flex md:flex-col gap-8 md:gap-14 items-center w-full md:w-auto justify-around md:justify-start">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl hidden md:flex items-center justify-center shadow-lg shadow-blue-600/20 mb-4">
                    <Volume2 className="text-white w-6 h-6" />
                </div>
                <nav className="flex md:flex-col gap-10 md:gap-12 w-full md:w-auto justify-around md:justify-center">
                    {navItems.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => onTabChange(id)}
                            className={`flex flex-col items-center gap-1.5 group transition-all duration-300 ${activeTab === id ? 'text-blue-500' : 'text-slate-600 hover:text-slate-400'}`}
                        >
                            <div className={`p-3.5 rounded-[1.2rem] transition-all duration-300 relative ${activeTab === id ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/40' : 'bg-white/5 text-slate-500 md:bg-transparent md:hover:bg-white/5'}`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === id ? 'opacity-100' : 'opacity-40'}`}>
                                {label}
                            </span>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
