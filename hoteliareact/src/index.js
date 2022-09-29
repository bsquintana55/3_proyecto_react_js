import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../reacthotelia/src/pages/Dashboard/dash.css';
import Dashboard from '../../reacthotelia/src/pages/Dashboard/Dashboard.js';
import Registrar from '../../reacthotelia/src/pages/Registrar/Registrar.js';
import '../../reacthotelia/src/pages/Registrar/Registrar.css'
import "https://kit.fontawesome.com/6131ecdde6.js";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
    <Registrar />
  </React.StrictMode>
);
