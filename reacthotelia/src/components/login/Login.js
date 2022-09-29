import './login.css';
import logo from './horizontal_negro.svg';
function Login() {
    return(
      

     
    <div class="cajagrande"> 
        <div id="logo">
            <img src={logo}/>
        </div>
        <div class="peque">
            <i class="fa-solid fa-user"></i>
            <form action="#">

                <div class="picky">
                    <label for="">Usuario</label>
                    <input type="text"/>
                </div>

                <div class="picky">
                    <label for="">Contraseña</label>
                    <input type="text"/>
                </div>


                <button id="boton"><a href="/dashboard.html">Ingresar</a></button>
                <br/>

                <p>¿No tienes una cuenta? <a href="/registrar.html">Regístrate aquí.</a> </p>
                <br/>
                <p>¿quiere ir al index? <a href="/index.html">Clic Aqui.</a> </p>
            </form>
        
        </div>
    </div>

      
    );
    

}

export default Login;