import './login.css';
import logo from './horizontal_negro.svg';
function Login() {
    return(
      
<section className='bodyLogin'>
     
    <div class="cajagrande"> 
        <div id="logologin">
            <img id="logologin" src={logo}/>
        </div>
        <div class="peque">
            <i id='loginI' class="fa-solid fa-user"></i>
            <form id='fomlogin' action="#">

                <div class="picky">
                    <label id="labellogin" for="">Usuario</label>
                    <input id="inputlogin"  type="text"/>
                </div>

                <div class="picky">
                    <label id="labellogin"  for="">Contraseña</label>
                    <input id="inputlogin"  type="password"/>
                </div>
                
                <button id="bonlogin">
                    <a id="alogin"href="/Dashboard">Ingresar</a>
                </button>
                <br/>

                <p id='plogin'>¿No tienes una cuenta? <a id="alogin" href="/Registrar">Regístrate aquí.</a> </p>
                <br/>
                <p id='plogin'>¿quiere ir al index? < a id="alogin"href="/">Clic Aqui.</a> </p>
            </form>
        
        </div>
    </div>

    </section>
    );
    

}

export default Login;