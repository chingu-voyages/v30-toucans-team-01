import React from 'react';
import githubLogo from '../../images/repo.svg';
import './Footer.css'

function Footer() {
    return (
        <div className="Footer">
           <a href="https://github.com/chingu-voyages/v30-toucans-team-01"> 
               <p>Chingu Voyages 30 Toucans Team 01</p>
                <img className="Footer__logo" src={githubLogo}/>
            </a>
        </div>
    )
}

export default Footer
