import './navbar.css';
import logo from './horizontal_blanco.svg';
function Navbar() {
    return(
        <nav>
        <div class="logo">
    
                <img src={logo}/>
                <i class="fa-solid fa-bars icono"></i>
        </div>
        <div class="menu">
                <a href="index.html" class="item">Inicio</a>
                <a href="ubicacion.html" class="item">Ubícanos</a>
                <a href="opiniones.html" class="item">Opiniones</a>
                <hr class="menu-hr" noshade=""/> 
                <a href="" class="item2"><i class="fa-solid fa-user"></i> Iniciar Sesión</a>
        </div>
        

     
    
     
    </nav>
    
    );
    

}

export default Navbar;