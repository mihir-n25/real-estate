// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-rel-estate.firebaseapp.com",
  projectId: "mern-rel-estate",
  storageBucket: "mern-rel-estate.appspot.com",
  messagingSenderId: "736963868429",
  appId: "1:736963868429:web:763f2c142e542640e6a244"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);