import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';





/*
import Login from './components/login/login';
 <Login/>
*/ 

   
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';     
import Info from './components/info/Info';
import Feat from './components/features/Features';
import Ubicanos from './components/ubicanos/Ubicanos';
import Opinion from './components/opinion/Opinion';
import Footer from './components/footer/Footer';

  /* 
    
    <Login/>

*/

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
 <Navbar/>
  <Banner/>
    <Info/>
    <Feat/>
    
    <Ubicanos/>
    <Opinion/>
    <Footer/> 
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


