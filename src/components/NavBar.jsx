import React from 'react';
import CartWidget from './CartWidget.jsx';
import '../styles/navBar.css'

const NavBar = () => {
return (
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
    );
}

export default NavBar;
