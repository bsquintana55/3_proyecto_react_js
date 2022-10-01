import './navbar.css';
import logo from './horizontal_blanco.svg';
//import './menu.js'

function Navbar() {
    return(

        <nav>
        <div class="logo">
    
                <img src={logo}/>
                <i class="fa-solid fa-bars icono"></i>
        </div>

        <div class="menu">
                <a href="/" class="item">Inicio</a>
                <a href="" class="item">Ubícanos</a>
                <a href="" class="item">Opiniones</a>
                <hr class="" noshade=""/>
                <a href="Login" class="item2"><i class="fa-solid fa-user"></i> Iniciar Sesión</a>
        </div>

    </nav>
     
    
    );
    

}

export default Navbar;