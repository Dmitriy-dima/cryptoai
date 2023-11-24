import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
require('dotenv').config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app-container">
      <App />
    </div>
  </React.StrictMode>,
);
