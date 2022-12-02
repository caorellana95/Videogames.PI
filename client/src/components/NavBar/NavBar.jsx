import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../logoHenry.png'

// import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                {/* <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link exact to="/" >Home</Link>
                        <Link to="/favs" >Favoritas</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
