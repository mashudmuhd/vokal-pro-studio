import React from 'react';
import { X, Zap, Star, Crown, CheckCircle2 } from 'lucide-react';

const Plans = ({ show, onClose, onSelectPlan }) => {
    if (!show) return null;

    const planOptions = [
        {
            id: 'starter',
            name: 'Starter',
            desc: 'Perfect for testing',
            price: '₹99',
            period: '/ 3 Audio',
            icon: Zap,
            color: 'emerald',
            benefits: ['3 Audio Generations', 'Standard Quality'],
            buttonText: 'Buy Now'
        },
        {
            id: 'creator',
            name: 'Creator',
            desc: 'For serious creators',
            price: '₹499',
            period: '/ 100 Audio',
            icon: Star,
            color: 'blue',
            benefits: ['100 Audio Generations', 'Cinematic Vocals', 'SRT Subtitle Export'],
            buttonText: 'Buy Creator',
            popular: true
        },
        {
            id: 'studio',
            name: 'Studio',
            desc: 'Unlimited Everything',
            price: '₹999',
            period: '/ Lifetime',
            icon: Crown,
            color: 'amber',
            benefits: ['Unlimited Generations', 'Priority Processing', 'Commercial Rights'],
            buttonText: 'Go Unlimited'
        }
    ];

    return (
        <div className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4">
            <div className="bg-[#0F1118] border border-white/5 rounded-[2.5rem] w-full max-w-5xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col">
                <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10">
                    <X className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-900/10 pointer-events-none"></div>
                <div className="p-8 sm:p-12 overflow-y-auto flex-1 custom-scrollbar">
                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter mb-4">
                            VOKAL <span className="text-blue-500">PRO</span> PLANS
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto font-medium">
                            Choose a studio plan to unlock high-fidelity AI voice generation and cinematic subtitle sync capabilities.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {planOptions.map((plan) => {
                            const Icon = plan.icon;
                            let colorClasses = "";
                            let btnClasses = "";
                            let iconBg = "";
                            let textColor = "";

                            if (plan.color === 'emerald') {
                                colorClasses = "hover:border-emerald-500/30";
                                btnClasses = "hover:bg-emerald-500";
                                iconBg = "bg-emerald-500/10";
                                textColor = "text-emerald-500";
                            } else if (plan.color === 'blue') {
                                colorClasses = "bg-gradient-to-b from-blue-900/40 to-black/80 border-blue-500/30 transform md:-translate-y-4 shadow-2xl shadow-blue-900/20";
                                btnClasses = "bg-blue-600 hover:bg-blue-500";
                                iconBg = "bg-blue-500/20";
                                textColor = "text-blue-500";
                            } else {
                                colorClasses = "hover:border-amber-500/30";
                                btnClasses = "hover:bg-amber-500";
                                iconBg = "bg-amber-500/10";
                                textColor = "text-amber-500";
                            }

                            return (
                                <div key={plan.id} className={`${plan.id !== 'creator' ? 'bg-black/50 border border-white/10' : ''} rounded-3xl p-8 flex flex-col transition-all group relative ${colorClasses}`}>
                                    {plan.popular && (
                                        <div className="absolute -top-4 inset-x-0 flex justify-center">
                                            <span className="bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-blue-500/30">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <div className={`${textColor} mb-6 ${iconBg} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2">{plan.name}</h3>
                                    <div className="text-slate-400 text-sm font-medium mb-6">{plan.desc}</div>
                                    <div className="text-4xl font-black text-white mb-8">
                                        {plan.price} <span className="text-sm font-medium text-slate-500">{plan.period}</span>
                                    </div>
                                    <ul className="space-y-4 mb-8 flex-1">
                                        {plan.benefits.map((benefit, i) => (
                                            <li key={i} className="flex gap-3 text-slate-300 text-sm">
                                                <CheckCircle2 className={`w-5 h-5 ${textColor} shrink-0`} /> {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => onSelectPlan(plan)}
                                        className={`w-full py-4 text-white rounded-xl font-bold uppercase tracking-widest transition-all ${plan.id !== 'creator' ? 'bg-white/5 ' + btnClasses : btnClasses + ' shadow-xl shadow-blue-600/20'}`}
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
