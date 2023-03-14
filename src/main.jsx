import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from "firebase/app";
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyDNoV8DGra3Pxc66MfboyycUHradnSDRT4",
  authDomain: "react-camisetas.firebaseapp.com",
  projectId: "react-camisetas",
  storageBucket: "react-camisetas.appspot.com",
  messagingSenderId: "699744551406",
  appId: "1:699744551406:web:2cef2b571aa397a19d4eff"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
