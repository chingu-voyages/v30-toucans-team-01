import React from 'react';
import logo from '../../images/logo.svg';
import './header.css';

function Header() {
    return (
        <header className="Header">
            <img className="Header__logo" src={logo} />
            <p className="Header__tagline">
                Practice your facial expression mimicry with these fun games!
            </p>
        </header>
    );
}

export default Header;