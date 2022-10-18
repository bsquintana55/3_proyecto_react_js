
import React from 'react';
import {Link} from 'react-router-dom';

import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';

function Datos(){

    const history=useNavigate();

    const [data,setData]=useState({_id:"",tipodoc:"",nombre:"",apellido:"",
    fnacimiento:"",genero:"",email:"",telefono:"",paisorigen:"",password:"",tipouser:"",img:""});
   
    const handleChange=({target})=>{
          setData({
                ...data,
                [target.name]:target.value
          })
    }

  const url="https://hoteliakuepa.herokuapp.com/users";  

      const handleSubmit=async(e)=>{
          e.preventDefault();
          const response=await axios.post(url,data);
          if (response.status === 201) 
          {
                Swal.fire(
                      'Error!',
                      'Hubo un problema al registrar el huesped!',
                      'error'
                )
              
          }
          else {
                Swal.fire(
                      'Guardado!',
                      `El huesped ha sido guardado exitosamente!`,
                      'success'
                )
          }
      }




   return(

    <div class="from" >

    <section class="caja">
        <div class="titulor">
            <h2>Regístrate</h2>
        </div>

        <Form class="form" onSubmit={handleSubmit}>
        <section class="datos">
           
          <div class="izquierda">
                <label class="labelr" >Tipo de documento</label>
                <select name="tipodoc" onChange={handleChange}>
                    <option>Escoja una opción</option>
                    <option value="CC">Cédula</option>
                    <option value="CCE">Cédula Extranjera</option>
                    <option value="O">Otro</option>
                </select>
                
                <label class="labelr" >Nombres</label>
                <input class="inputr"  type="text" name="nombre" value={data.nombre} onChange={handleChange}/>
                <label class="labelr" >Fecha de nacimiento</label>
                <input class="inputr"  type="date" name="fnacimiento" value={data.fnacimiento} onChange={handleChange}/>
                <label class="labelr" >Email</label>
                <input class="inputr"  type="email" name="email" value={data.email} onChange={handleChange}/>
                
                <label class="labelr" >País de origen</label>
                <select name="paisorigen" onChange={handleChange}>
                    <option>Escoja una opción</option>
                    <option value="V">Venezuela</option>
                    <option value="C">Colombia</option>
                    <option value="O">Otro</option>
                </select>

                <label class="labelr" >Contraseña</label>
                <input class="inputr" type="password" name="password" value={data.password} onChange={handleChange}/>

                <label class="labelr" >Foto</label>
                <input class="inputr"  type="file"  name="img" value={data.img} onChange={handleChange}/>
          </div>

            <div class="derecha">
                <label class="labelr" >Número de documento</label>
                <input class="inputr"  type="text" name="_id" value={data._id} onChange={handleChange}/>
                <label class="labelr" >Apellidos</label>
                <input class="inputr"  type="text" name="apellido" value={data.apellido} onChange={handleChange}/>

                <label class="labelr" >Genero</label>
                    <div class="generos">
                        <select  name="genero" value={data.genero} onChange={handleChange}>
                            <option >Escoger G</option>
                            <option type="radio" value="V">Femenino</option>
                            <option type="radio" value="C">Masculino</option>
                            <option type="radio" value="O">Otro</option>
                        </select>
                    </div>

                <label class="labelr" >Telefono de contacto</label>
                <input class="inputr"  type="number" name="telefono" value={data.telefono} onChange={handleChange}/>
                
                <label className="labelr">Tipo de Usuario</label>
                 <input className="inputr" type="text"  name="tipouser" value={data.tipouser} onChange={handleChange}/>
                             
                

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

        </Form>
        </section>
      
    </div>



   );
   }
export default Datos;





