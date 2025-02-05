import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdEj1M9C8jpZ1azWMb9Ty3TiRsBI-HpFs",
  authDomain: "ppratas-c1f89.firebaseapp.com",
  projectId: "ppratas-c1f89",
  storageBucket: "ppratas-c1f89.firebasestorage.app",
  messagingSenderId: "960319144109",
  appId: "1:960319144109:web:2f4de98c3ebdef01000624",
  measurementId: "G-QLX60XXT1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
