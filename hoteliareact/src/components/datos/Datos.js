
import React from 'react';
import {Link} from 'react-router-dom';

function Datos(){
   return(
   
 
   

    <div class="from">

    <section class="caja">
        <div class="titulor">
            <h2>Regístrate</h2>
        </div>


        <section class="datos">
           
          <div class="izquierda">
                <label class="labelr" >Tipo de documento</label>
                <input class="inputr"  type="text" placeholder="Escoja una opción"/>
                <label class="labelr" >Nombres</label>
                <input class="inputr"  type="text"/>
                <label class="labelr" >Fecha de nacimiento</label>
                <input class="inputr"  type="text"/>
                <label class="labelr" >Email</label>
                <input class="inputr"  type="email"/>
                <label class="labelr" >País de origen</label>
                <input class="inputr"  type="text"/>
                <label class="labelr" >Contraseña</label>
                <input class="inputr"  type="password"/>
          </div>

            <div class="derecha">
                <label class="labelr" >Número de documento</label>
                <input class="inputr"  type="text"/>
                <label class="labelr" >Apellidos</label>
                <input class="inputr"  type="text"/>

                <label class="labelr" >Genero</label>

                    <div class="generos">
                        <input class="inputr"  type="radio"/>
                        <label class="labelr" >Mujer</label>

                        <input class="inputr"  type="radio"/>
                        <label class="labelr" >Hombre</label>

                        <input class="inputr"  type="radio"/>
                        <label class="labelr" >Otro</label>
                   </div>

                <label class="labelr" >Telefono de contacto</label>
                <input class="inputr"  type="number"/>
                <label class="labelr" >Foto</label>
                <input class="inputr"  type="password" placeholder="Seleccionar archivo"/>
                <label class="labelr" >Confirmar contraseña</label>
                <input class="inputr"  type="password" placeholder=""/>
            </div>
            <div class="ter">
                <input   type="checkbox" class="te"/>
                <label class="labelr" >Acepto Terminos y Condiciones</label>
               
            </div>
            <button class="boton"><Link to='/Dashboard'>Ingresar</Link></button>

            
        </section>

        <div class="tercel">
            <input   type="checkbox" class="tecel"/>
            <label class="labelr" >Acepto Terminos y Condiciones</label>
        </div>

          <button class="boton2"><Link to='/Dashboard'>Ingresar</Link></button>

    </section>
</div>



   );
   }
export default Datos;





