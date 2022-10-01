import React from 'react';
import logoD from '../../components/img/horizontal_blanco.svg';
import logo2 from '../../components/img/hotelia campana.svg';
import cara6 from '../../components/img/cara6.jpg';
import {Link} from 'react-router-dom';


function Usbar(){
   return(
  
      <section className='bodyDash'>
      <section class="menuDash">
      <div class="persona">
            <div class="logoD">
            <img src={logoD} className='desktop'/>
                  <img src={logo2} class="mobile"/>
            </div>

            <div class="descripcion">
                  <div class="fotoP">
                        <img src={cara6} id="perfil"/>
                  </div>
                  <div>
                 
                  <h3>Angie Vargas</h3>
                  <h4>angie@gmail.com</h4>
                  </div>
            </div>         
      </div>
      <div class="servicios"> 
            <div class="op">
            <a href="" class="serv"><i class="fa-solid fa-bed" id="iconS"></i><p>Habitaciones</p></a>
            <a href="" class="serv"><i class="fa-solid fa-bell-concierge" id="iconS"></i><p>Reservas</p></a>
            <a href="" class="serv"><i class="fa-solid fa-bed" id="iconS"></i><p>Habitaciones</p></a>
            <a href="" class="serv"><i class="fa-solid fa-bell-concierge" id="iconS"></i><p>Habitaciones</p></a>
            </div>
            <div class="cerrar">
            <Link to='/Registrar'><i class="fa-solid fa-arrow-right-from-bracket" id="serv"></i><p>Cerrar sesión</p></Link>
            </div>
      </div>              
</section>
</section>


   );
   
} 
export default Usbar;