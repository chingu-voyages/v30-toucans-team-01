import React from 'react'
import './index.css';
import { GithubSVG, ReactUrlSVG, ReactWebcamSVG} from '../svg/FooterSVG.js';

function Footer() {
    const githubRepoURL = 'https://github.com/chingu-voyages/v30-toucans-team-01';
    const reactURL = 'https://reactjs.org/';
    const reactWebcamURL = 'https://github.com/mozmorris/react-webcam';
    return (
        <footer>
            <div className="footer-top">
                <ul class="links links-border">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Play</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
                <div className="bar"/>
                <p>Chingu Voyage V30 Toucans Team 1</p>
                <ul class="links icons">
                    <li><a href={githubRepoURL} target="_blank"><GithubSVG size={25}/></a></li>
                    <li><a href={reactURL} target="_blank"><ReactUrlSVG size={25}/></a></li>
                    <li><a href={reactWebcamURL} target="_blank"><ReactWebcamSVG size={25}/></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2021 FaceIt, designed by <span>Lily</span> & <span>Trek</span></p>
            </div>
        </footer>
    )
}

export default Footer
