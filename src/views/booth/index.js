import React from 'react'
import WebcamComponent from '../../components/camera'
import { Link } from 'react-router-dom';

function Booth({children}) {
    return (
        <div className="Booth">
            <WebcamComponent/>
            <Link to="/">Back</Link>
            {children}
        </div>
    )
}

export default Booth
