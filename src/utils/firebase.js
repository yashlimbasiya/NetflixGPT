// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2xzDkO4xere8Dd73Tm40GzC1nP5R-Nd8",
  authDomain: "netflixgpt-3fd47.firebaseapp.com",
  projectId: "netflixgpt-3fd47",
  storageBucket: "netflixgpt-3fd47.appspot.com",
  messagingSenderId: "938612452341",
  appId: "1:938612452341:web:da85af4384f4e5a67a8ebc",
  measurementId: "G-820Y69NBVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();