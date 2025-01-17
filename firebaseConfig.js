import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

import { getFirestore } from 'firebase/firestore';

// Replace the following with your Firebase project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTSMgoKyQrfU5MAqoIBft51kXHNReNDiA",
    authDomain: "travel-app-5b0d8.firebaseapp.com",
    projectId: "travel-app-5b0d8",
    storageBucket: "travel-app-5b0d8.firebasestorage.app",
    messagingSenderId: "113412606229",
    appId: "1:113412606229:web:9614adea3ff2699b66011c",
    measurementId: "G-8CSR2ZV2G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (for database usage)
const db = getFirestore(app);

const auth = getAuth(app);

export {auth, db };
