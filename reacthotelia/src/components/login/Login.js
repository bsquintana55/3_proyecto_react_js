
import './login.css';
import logo from './horizontal_negro.svg';
function Login() {
    return(
      
<section className='bodyLogin'>
     
    <div class="cajagrande"> 
        <div id="logologin">
            <img src={logo}/>
        </div>
        <div class="peque">
            <i class="fa-solid fa-user"></i>
            <form  action="#">

                <div class="picky">
                    <label for="">Usuario</label>
                    <input class="inputlog"  type="text"/>
                </div>

                <div class="picky">
                    <label for="">Contraseña</label>
                    <input class="inputlog"  type="password"/>
                </div>
                
                <button id="botonl"><a href="/Dashboard">Ingresar</a></button>
                <br/>

                <p>¿No tienes una cuenta? <a href="/Registrar">Regístrate aquí.</a> </p>
                <br/>
                <p>¿quiere ir al index? <a href="/inicio">Clic Aqui.</a> </p>
            </form>
        
        </div>
    </div>

    </section>
    );
    

}

export default Login;