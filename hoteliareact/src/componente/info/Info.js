import React from 'react';

import cara6 from '../../componente/cara6.jpg';
function Info(){
   return(
  
    <div class="informacion">
<div class="contenido">
    <div class="Bienvenido">
        <h2>Bienvenido, Angie Vargas</h2>
    </div>
    <div class="inferior">
        <div class="foto">
        <img src={cara6} alt=""/>
            <div class="iconos">
                <i class="fa-solid fa-file-arrow-up icon_1"></i>
                <i class="fa-solid fa-upload"></i>
            </div>
            <div class="contra">
                <a href="">Cambiar contraseña</a>
            </div>
        </div>



        <div class="formulario">
              <form action="">
                    <div class="form-cont">
                          <div class="form">
                                <label for="">Tipo de documento</label>
                                <input type="text" placeholder="Cédula de ciudadanía"/>
                          </div>
                          <div class="form">
                                <label for="">Número de documento</label>
                                <input type="text" placeholder="1025417456"/>
                          </div>
                    </div>

                    <div class="form-cont">
                          <div class="form">
                                <label for="">Nombres</label>
                                <input type="text" placeholder="Angie Camila"/>
                          </div>
                          <div class="form">
                                <label for="">Apellidos</label>
                                <input type="text" placeholder="Vargas Pinzón"/>
                          </div>
                    </div>

                    <div class="form-cont">
                          <div class="form">
                                <label for="">Fecha nacimiento</label>
                                <input type="text" placeholder="10/08/197"/>
                          </div>
                          <div class="form">
                                <label for="">País de origen</label>
                                <input type="text" placeholder="Colombia"/>
                          </div>
                    </div>
                    <div class="form-cont">
                          <div class="form">
                                <label for="">Género</label>
                                <div class="radio">
                                      <label for="">Mujer</label>
                                      <input type="radio"/>
                                      <label for="">Hombre</label>
                                      <input type="radio"/>
                                      <label for="">Otro</label>
                                      <input type="radio"/>
                                </div>
                                
                          </div>
                          <div class="form separador">
                                <label for="">Teléfono de contacto</label>
                                <input type="text"/>
                          </div>
                    </div>

                    <div class="form-cont-2">
                          <div class="form">
                                <label for="">Email</label>
                                <input type="text"/>
                          </div>

                    </div>

                    <div class="form-cont-2">
                          <div class="form">
                                <a href="">Actualizar</a>
                          </div>

                    </div>
                    <div class="form-cont">
                          <div class="form">
                                <label for="">Contraseña</label>
                                <input type="text"/>
                          </div>
                          <div class="form">
                                <label for="">Confirmar contraseña</label>
                                <input type="text"/>
                          </div>
                    </div>
                    <div class="form-cont-2">
                          <div class="form">
                                <a href="">Cambiar</a>
                          </div>

                    </div>
              </form>
        </div>
    </div>
</div>
</div>
   );
   
} 
export default Info;