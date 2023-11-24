import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <div className="app-container">
      <App />
    </div>
  </React.StrictMode>,
  root
);
