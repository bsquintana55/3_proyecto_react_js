import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css';

import Inicio from './pages/index/inicio.js';
import Login from './pages/login/login.js';

import Dashboard from './pages/Dashboard/Dashboard.js';
import Registrar from './pages/Registrar/Registrar.js';

import Error404 from './pages/error/Error404.js';



import "https://kit.fontawesome.com/6131ecdde6.js";



/*  
<BrowserRouter>
 <Routes>
    
    
     <Route path={'/'} element={<Inicio />}/>
    <Route path={'/Login'} element={<Login />}/>
    <Route path={'/Registrar'} element={<Registrar/>} />
    <Route path={'/Dashboard'} element={<Dashboard/>} />

    </Routes>
    </BrowserRouter>
     */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
 <BrowserRouter>
 <Routes>
    
    
     <Route path={'/'} element={<Inicio />}/>
    <Route path={'/Login'} element={<Login />}/>
    <Route path={'/Registrar'} element={<Registrar/>} />
    <Route path={'/Dashboard'} element={<Dashboard/>} />
    <Route path={'/*'} element={<Error404/>} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


