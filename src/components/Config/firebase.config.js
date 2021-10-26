import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword    } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDXAO-UrKXVdhqGg1mpH_uAlJNfOhzZx4g",
    authDomain: "city-ride-925bb.firebaseapp.com",
    projectId: "city-ride-925bb",
    storageBucket: "city-ride-925bb.appspot.com",
    messagingSenderId: "806412355355",
    appId: "1:806412355355:web:facf3fb27528b3605eb5be"
}

const app = initializeApp(firebaseConfig);
export default app;

const auth = getAuth();
export {auth};
export {updateProfile }
export { createUserWithEmailAndPassword }
export { onAuthStateChanged  }
export { signInWithEmailAndPassword }
