import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdEj1M9C8jpZ1azWMb9Ty3TiRsBI-HpFs",
  authDomain: "ppratas-c1f89.firebaseapp.com",
  projectId: "ppratas-c1f89",
  storageBucket: "ppratas-c1f89.firebasestorage.app",
  messagingSenderId: "960319144109",
  appId: "1:960319144109:web:2f4de98c3ebdef01000624",
  measurementId: "G-QLX60XXT1Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
