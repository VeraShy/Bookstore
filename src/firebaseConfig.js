
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import { getAuth , createUserWithEmailAndPassword , updateProfile , onAuthStateChanged , signInWithEmailAndPassword , signOut , browserLocalPersistence , setPersistence } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyA1dMuavIro8Pgdh0qHnvj0KWyopDpNvHc",
  authDomain: "bookstore-d4d81.firebaseapp.com",
  projectId: "bookstore-d4d81",
  storageBucket: "bookstore-d4d81.appspot.com",
  messagingSenderId: "140155505506",
  appId: "1:140155505506:web:9516c844461a3e69593a3b",
  measurementId: "G-7H1KZSS0NT"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export {createUserWithEmailAndPassword , updateProfile , onAuthStateChanged , signInWithEmailAndPassword , signOut};

//auth.setPersistence(auth, browserLocalPersistence);