// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8CCTsNqDTSVuBA6ACjHiPGHg_U-3BZkg",
  authDomain: "otvaleparking.firebaseapp.com",
  projectId: "otvaleparking",
  storageBucket: "otvaleparking.firebasestorage.app",
  messagingSenderId: "783468065396",
  appId: "1:783468065396:web:d0f976ed700e34f38d9721",
  measurementId: "G-JBQNFZMBZ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { auth };
