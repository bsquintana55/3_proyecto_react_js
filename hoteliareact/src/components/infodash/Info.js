import React from 'react';

import cara6 from '../../components/img/cara6.jpg';
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
                                       <label class="forml"for="">Tipo de documento</label>
                                       <input class="formin"  type="text" placeholder="Cédula de ciudadanía"/>
                                </div>
                                <div class="form">
                                       <label class="forml"for="">Número de documento</label>
                                       <input class="formin"  type="text" placeholder="1025417456"/>
                                </div>
                          </div>

                          <div class="form-cont">
                                <div class="form">
                                       <label class="forml"for="">Nombres</label>
                                       <input class="formin"  type="text" placeholder="Angie Camila"/>
                                </div>
                                <div class="form">
                                       <label class="forml"for="">Apellidos</label>
                                       <input class="formin"  type="text" placeholder="Vargas Pinzón"/>
                                </div>
                          </div>

                          <div class="form-cont">
                                <div class="form">
                                       <label class="forml"for="">Fecha nacimiento</label>
                                       <input class="formin"  type="text" placeholder="10/08/197"/>
                                </div>
                                <div class="form">
                                       <label class="forml"for="">País de origen</label>
                                       <input class="formin"  type="text" placeholder="Colombia"/>
                                </div>
                          </div>
                          <div class="form-cont">
                                <div class="form">
                                       <label class="forml"for="">Género</label>
                                      <div class="radio">
                                             <label class="forml"for="">Mujer</label>
                                             <input class="formin"  type="radio"/>
                                             <label class="forml"for="">Hombre</label>
                                             <input class="formin"  type="radio"/>
                                             <label class="forml"for="">Otro</label>
                                             <input class="formin"  type="radio"/>
                                      </div>
                                      
                                </div>
                                <div class="form separador">
                                       <label class="forml"for="">Teléfono de contacto</label>
                                       <input class="formin"  type="text"/>
                                </div>
                          </div>

                          <div class="form-cont-2">
                                <div class="form">
                                       <label class="forml"for="">Email</label>
                                       <input class="formin"  type="text"/>
                                </div>

                          </div>

                          <div class="form-cont-2">
                                <div class="form">
                                      <a href="">Actualizar</a>
                                </div>

                          </div>
                          <div class="form-cont">
                                <div class="form">
                                       <label class="forml"for="">Contraseña</label>
                                       <input class="formin"  type="text"/>
                                </div>
                                <div class="form">
                                       <label class="forml"for="">Confirmar contraseña</label>
                                       <input class="formin"  type="text"/>
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