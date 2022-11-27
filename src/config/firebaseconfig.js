// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbmBNBKwbp7GSyCN6e0T0cAPQRQhTTSEI",
  authDomain: "casperbot-mnwp.firebaseapp.com",
  projectId: "casperbot-mnwp",
  storageBucket: "casperbot-mnwp.appspot.com",
  messagingSenderId: "29912029284",
  appId: "1:29912029284:web:8d6d0264745add65ece771",
  measurementId: "G-8KHY761D53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
const analytics = getAnalytics(app);