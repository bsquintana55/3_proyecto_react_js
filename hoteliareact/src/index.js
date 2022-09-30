import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './pages/Dashboard/dash.css';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Registrar from './pages/Registrar/Registrar.js';
import './pages/Registrar/Registrar.css'
import "https://kit.fontawesome.com/6131ecdde6.js";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path={'/'} element={<Registrar/>} />
    <Route path={'/Dashboard'} element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
