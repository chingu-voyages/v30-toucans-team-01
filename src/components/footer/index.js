import React from 'react';
import githubLogo from '../../images/repo.svg';
import Progress from '../progress'
import './Footer.css'

function Footer({storageData}) {
    return (
        <div className="Footer">
            <Progress storageData={storageData}/>
           <a className="Footer__link" href="https://github.com/chingu-voyages/v30-toucans-team-01"> 
               <p className="Footer__text">Chingu Voyages 30 Toucans Team 01</p>
                <img className="Footer__logo" alt="githubLogo" src={githubLogo}/>
            </a>
        </div>
    )
}

export default Footer
