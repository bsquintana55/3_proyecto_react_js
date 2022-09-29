
import React from 'react';


function Datos(){
   return(
    
    <div class="form">

    <section class="caja">
        <div class="titulo">
            <h2>Regístrate</h2>
        </div>


        <section class="datos">
           
          <div class="izquierda">
                <label>Tipo de documento</label>
                <input type="text" placeholder="Escoja una opción"/>
                <label>Nombres</label>
                <input type="text"/>
                <label>Fecha de nacimiento</label>
                <input type="text"/>
                <label>Email</label>
                <input type="email"/>
                <label>País de origen</label>
                <input type="text"/>
                <label>Contraseña</label>
                <input type="password"/>
          </div>

            <div class="derecha">
                <label>Número de documento</label>
                <input type="text"/>
                <label>Apellidos</label>
                <input type="text"/>

                <label>Genero</label>

                    <div class="generos">
                        <input type="radio"/>
                        <label>Mujer</label>

                        <input type="radio"/>
                        <label>Hombre</label>

                        <input type="radio"/>
                        <label>Otro</label>
                   </div>

                <label>Telefono de contacto</label>
                <input type="number"/>
                <label>Foto</label>
                <input type="password" placeholder="Seleccionar archivo"/>
                <label>Confirmar contraseña</label>
                <input type="password" placeholder=""/>
            </div>
            <div class="ter">
                <input type="checkbox" class="te"/>
                <label>Acepto Terminos y Condiciones</label>
               
            </div>
            <button class="boton"><a href="dashboard.html">Ingresar</a></button>

            
        </section>

        <div class="tercel">
            <input type="checkbox" class="tecel"/>
            <label>Acepto Terminos y Condiciones</label>
        </div>

          <button class="boton2"><a href="dashboard.html">Ingresar</a></button>

    </section>
</div>



   );
   }
export default Datos;
