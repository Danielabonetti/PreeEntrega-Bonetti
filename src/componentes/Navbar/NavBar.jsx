import React from 'react';
import logoCafe from '../../../img/logo.png';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="brand">
            <div>
                <img src={logoCafe} width={150} alt="Café Logo" />
            </div>
            <ul>
                <li>Espresso</li>
                <li>Latte</li>
                <li>Macchiato</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;