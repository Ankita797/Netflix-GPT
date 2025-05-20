// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiRFhqnqBKyO7wd5Q1k62aiR670pb5WzQ",
  authDomain: "netflixgpt-a01f4.firebaseapp.com",
  projectId: "netflixgpt-a01f4",
  storageBucket: "netflixgpt-a01f4.firebasestorage.app",
  messagingSenderId: "157588765456",
  appId: "1:157588765456:web:1bf8957a95a67d71058395",
  measurementId: "G-DMJ3SJDW9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();