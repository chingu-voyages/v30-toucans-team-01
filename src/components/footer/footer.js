import React from 'react';
import githubLogo from '../../images/repo.svg';

function Footer() {
    return (
        <div>
            <p>Chingu Voyages 30 Toucans Team 01</p>
            <img className="Footer__logo" src={githubLogo}/>
        </div>
    )
}

export default Footer
