import React from 'react'
import Camera from '../../components/camera'
import { Link } from 'react-router-dom';
import backIcon from '../../images/back-icon.svg'

function Booth({children}) {
    function addImage(){
        console.log("Pass")
    }
    return (
        <div className="Booth">
            <Camera addImage={addImage}/>
            <Link to="/"><img className="Booth__backBtn" src={backIcon}/></Link>
            {children}
        </div>
    )
}

export default Booth
