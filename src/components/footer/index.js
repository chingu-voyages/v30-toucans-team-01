import React from 'react';
import githubLogo from '../../images/repo.svg';
import './Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <p>Chingu Voyages 30 Toucans Team 01</p>
            <img className="Footer__logo" src={githubLogo}/>
        </div>
    )
}

export default Footer
