import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/Dashboard/dash.css';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Registrar from './pages/Registrar/Registrar.js';
import './pages/Registrar/Registrar.css'
import "https://kit.fontawesome.com/6131ecdde6.js";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
    <Registrar />
  </React.StrictMode>
);
