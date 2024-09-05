import React from 'react'
import ReactDOM from 'react-dom/client'
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

defineElement(lottie.loadAnimation);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
