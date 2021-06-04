import React from 'react'
import Camera from '../../components/camera'
import { Link } from 'react-router-dom'
import backIcon from '../../images/back-icon.svg'
import './booth.css'

function Booth({children, className, addImage}) {
    return (
        <div className={`Booth ${className || ''}`}>
            <Camera addImage={addImage}/>
            <div className="Booth__overlay">
                <Link to="/" className="Booth__back-button"><img className="Booth__backBtn" alt="back button" src={backIcon}/></Link>
                <div className="Booth__children">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Booth
