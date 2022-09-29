import React from 'react';
import logo from './horizontal_blanco.svg';

function Barra(){
   return(
  
    <section className='bloque'>
             <div class="logo">
    
    <img src={logo}/>
    <i class="fa-solid fa-bars icono"></i>
</div>
            <div className='txt'>
            <h4 className='compt'>Eres más que  bienvenido</h4><br/>
            <h4 className='cel'>Un lugar en tu corazón</h4>
        </div>
      
      </section>
    
   );
   
} 
export default Barra;