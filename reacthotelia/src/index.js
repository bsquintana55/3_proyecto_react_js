import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import Login from './components/login/login';

/*
import Login from './components/login/login';
 <Login/>
*/ 

/*    
import Navbar from './components/navbar/navbar';
//import Banner from './components/banner/banner';     <Banner/>
import Info from './components/info/info';
import Feat from './components/features/feat';
import Ubicanos from './components/ubicanos/ubi';
import Opinion from './components/opinion/opi';
import Footer from './components/footer/footer';
    <Navbar/>
    
    <Info/>
    <Feat/>
    
    <Ubicanos/>
    <Opinion/>
    <Footer/> 

*/

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
 <Login/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


