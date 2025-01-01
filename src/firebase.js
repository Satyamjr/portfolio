// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDYEqR2u37fNxXwM_41P9dVPZW8uYz9pNM",
  authDomain: "portfolio-99e69.firebaseapp.com",
  projectId: "portfolio-99e69",
  storageBucket: "portfolio-99e69.firebasestorage.app",
  messagingSenderId: "316829814002",
  appId: "1:316829814002:web:e657efb9718d04ee92546b",
  measurementId: "G-5FDBDVZ958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);