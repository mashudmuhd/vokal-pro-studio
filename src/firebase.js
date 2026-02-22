import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwsOIpiopAc2ZnuDrp8eRlj5m_HTq2JaA",
    authDomain: "vokal-pro-studio-app-2026.firebaseapp.com",
    projectId: "vokal-pro-studio-app-2026",
    storageBucket: "vokal-pro-studio-app-2026.firebasestorage.app",
    messagingSenderId: "390591097726",
    appId: "1:390591097726:web:fceb62a64f27876578212f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
