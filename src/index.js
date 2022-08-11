import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAcgIL4hkq4jPgHhOsBmOTXV3EO6N3QcVI",
  authDomain: "mi-proyecto-282119.firebaseapp.com",
  projectId: "mi-proyecto-282119",
  storageBucket: "mi-proyecto-282119.appspot.com",
  messagingSenderId: "295004043369",
  appId: "1:295004043369:web:548e8d71db8b5f2cec8af8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
