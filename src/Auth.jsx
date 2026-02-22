import React, { useState } from 'react';
import { Mail, Phone, Lock, ChevronRight, Zap, AlertCircle, User } from 'lucide-react';
import { auth } from './firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    sendPasswordResetEmail,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence
} from 'firebase/auth';
import { Toaster, toast } from 'react-hot-toast';

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

export default function Auth({ onGuestLogin }) {
    const [isLogin, setIsLogin] = useState(true);
    const [authMethod, setAuthMethod] = useState('email'); // 'email' or 'phone'

    // Form States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [rememberMe, setRememberMe] = useState(true);

    const [loading, setLoading] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handleEmailAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                toast.success('Successfully logged in!');
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, { displayName: name });
                toast.success('Account created successfully!');
            }
        } catch (error) {
            toast.error(error.message.replace('Firebase:', '').trim());
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            toast.error('Please enter your email address first.');
            return;
        }
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Password reset email sent! Check your inbox.');
        } catch (error) {
            toast.error(error.message.replace('Firebase:', '').trim());
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleAuth = async () => {
        setLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            toast.success('Successfully logged in with Google!');
        } catch (error) {
            toast.error(error.message.replace('Firebase:', '').trim());
        } finally {
            setLoading(false);
        }
    };

    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
            });
        }
    };

    const handleSendOtp = async (e) => {
        e.preventDefault();
        if (!phone.startsWith('+')) {
            return toast.error("Please enter phone number with country code (e.g. +91...)");
        }
        setLoading(true);
        try {
            setupRecaptcha();
            const appVerifier = window.recaptchaVerifier;
            const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
            window.confirmationResult = confirmationResult;
            setShowOtpInput(true);
            toast.success("OTP sent to your phone");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await window.confirmationResult.confirm(otp);
            toast.success("Phone completely verified!");
        } catch (error) {
            toast.error("Invalid OTP Code");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#08090D] flex items-center justify-center p-6 font-sans relative overflow-hidden text-slate-300">
            <Toaster position="top-center" toastOptions={{ style: { background: '#1c1c24', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />

            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-md relative z-10">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter mb-2">VOKAL <span className="text-blue-500">PRO</span></h2>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">Studio Edition • Access Portal</p>
                </div>

                <div className="bg-[#0F1118]/80 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

                    {/* Google Login */}
                    <button type="button" onClick={handleGoogleAuth} disabled={loading} className="w-full py-4 mb-6 bg-white hover:bg-slate-200 text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl transition-all disabled:opacity-50">
                        <GoogleIcon /> Continue with Google
                    </button>

                    <div className="flex items-center gap-4 mb-6 opacity-30">
                        <div className="flex-1 h-px bg-white"></div>
                        <div className="text-[10px] font-black uppercase text-white tracking-widest">Or Use</div>
                        <div className="flex-1 h-px bg-white"></div>
                    </div>

                    {/* Auth Toggle */}
                    <div className="flex bg-black/40 p-1.5 rounded-2xl border border-white/5 mb-8">
                        <button onClick={() => setAuthMethod('email')} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${authMethod === 'email' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-white'}`}>
                            <Mail className="w-4 h-4" /> Email
                        </button>
                        <button onClick={() => setAuthMethod('phone')} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${authMethod === 'phone' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-white'}`}>
                            <Phone className="w-4 h-4" /> Phone
                        </button>
                    </div>

                    {/* Email/Password Form */}
                    {authMethod === 'email' && (
                        <form onSubmit={handleEmailAuth} className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="space-y-4">
                                {!isLogin && (
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                        </div>
                                        <input type="text" required placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm" />
                                    </div>
                                )}
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                    </div>
                                    <input type="email" required placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm" />
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                    </div>
                                    <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm" />
                                </div>
                            </div>

                            {isLogin && (
                                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
                                    <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                                        <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="rounded border-white/10 bg-black/50 text-blue-500 focus:ring-blue-500 accent-blue-500" />
                                        Remember me
                                    </label>
                                    <button type="button" onClick={handleForgotPassword} className="hover:text-blue-400 transition-colors">Forgot Password?</button>
                                </div>
                            )}

                            <button disabled={loading} type="submit" className="w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50">
                                {loading ? 'Processing...' : isLogin ? 'Sign In To Studio' : 'Create Account'}
                                {!loading && <ChevronRight className="w-4 h-4" />}
                            </button>

                            <div className="text-center mt-6">
                                <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors">
                                    {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Phone Auth Form */}
                    {authMethod === 'phone' && (
                        <form onSubmit={showOtpInput ? handleVerifyOtp : handleSendOtp} className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {!showOtpInput ? (
                                <>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                        </div>
                                        <input type="tel" required placeholder="+91 99999 99999" value={phone} onChange={(e) => setPhone(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-blue-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-medium text-sm tracking-widest" />
                                    </div>
                                    <button disabled={loading} type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-600/30 transition-all disabled:opacity-50">
                                        {loading ? 'Sending OTP...' : 'Send OTP Code'}
                                        {!loading && <Zap className="w-4 h-4" />}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors" />
                                        </div>
                                        <input type="text" required placeholder="Enter 6-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-emerald-500/50 focus:bg-white/5 text-white placeholder:text-slate-600 transition-all font-bold text-lg tracking-[0.5em] text-center" />
                                    </div>
                                    <button disabled={loading} type="submit" className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl font-black text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-600/30 transition-all disabled:opacity-50">
                                        {loading ? 'Verifying...' : 'Verify & Enter'}
                                    </button>
                                    <div className="text-center mt-4">
                                        <button type="button" onClick={() => setShowOtpInput(false)} className="text-xs font-semibold text-slate-500 hover:text-blue-400 transition-colors">
                                            Wrong Number? Go Back
                                        </button>
                                    </div>
                                </>
                            )}
                            <div id="recaptcha-container"></div>
                        </form>
                    )}
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                    <button type="button" onClick={onGuestLogin} className="py-3 px-8 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all flex items-center gap-3 border border-white/5 hover:border-blue-500/30 shadow-lg group">
                        <Zap className="w-4 h-4 text-blue-500 shadow-blue-500/50 group-hover:scale-110 transition-transform" /> Try Studio as Guest
                    </button>
                    <div className="flex items-center gap-2 mt-2 opacity-50"><AlertCircle className="w-3 h-3" /> Secure Google Firebase Authentication</div>
                </div>
            </div>
        </div>
    );
}
