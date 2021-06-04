import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import './camera.css';
import Modal from '../modal';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
}
function Camera({addImage}) {
    const webcamRef = React.useRef();
    const [hasCamera, setCamera] = useState(navigator.mediaDevices)
    let imageURL;

    async function  grabImage() {
        imageURL = await webcamRef.current.getScreenshot();
        addImage(imageURL);
    }


    return (
        <div className="Camera" onClick={grabImage}>
            <Webcam
                className="Camera__webcam"
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/webp"
                width={1280}
                videoConstraints={videoConstraints}
                imageSmoothing={true}
            /> 
            {!hasCamera && <Modal/>}
        </div>
    )
}

export default Camera
