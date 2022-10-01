import React from 'react';

import logo from '../img/horizontal_blanco.svg';

 

function Barra(){
   return(
  
       
         <section className='bloque'>

               <div class="logop"> 
                  <img src={logo}/>
               </div>

               <div className='txt'>
                  <h4 className='compt'>Eres más que bienvenido</h4>
                  <h4 className='cel'>Un lugar en tu corazón</h4>
               </div>
            
         </section>

 
   );
   
} 
export default Barra;