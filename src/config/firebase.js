import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA8EvEP0Y021WwChGIJgdUhQ4_xDG2-W1A",
  authDomain: "stockprimo.firebaseapp.com",
  projectId: "stockprimo",
  storageBucket: "stockprimo.firebasestorage.app",
  messagingSenderId: "1099418321352",
  appId: "1:1099418321352:web:3e2e12d1f79c2f3443c0fd",
  measurementId: "G-FS25XPR49E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const storage = getStorage(app);

export const provider = new GoogleAuthProvider();
