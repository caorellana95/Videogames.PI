import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../logoHenry.png'

// import './Navbar.css';

function NavBar() {
    return (
        <div className="navbar-div">
        <Link to='/'><button>Home</button></Link>
        <Link to='/videogame'><button>Videogame</button></Link>
        <Link to='/crearjuego'><button>CrearJuego</button></Link>
        <Link to='/sobre'><button>Sobre</button></Link>
</div>
    )
}


export default NavBar;