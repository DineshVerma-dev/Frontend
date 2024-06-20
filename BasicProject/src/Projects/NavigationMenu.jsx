import React, { useState } from 'react';
import './NavMenu/NavigationMenu.css';

function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>  {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navigation-container">
            <button className="menu-icon bg-green-300" onClick={toggleMenu}>
                ☰
            </button>

            <ul className={`menu ${isOpen ? 'open' : ''} `}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
                <li>Signup</li>
                <li>Donk</li>
            </ul>
        </div>
    );
}

export default NavigationMenu;
