import React, {useState} from 'react';
import Webcam from 'react-webcam';
import './camera.css';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
}
function Camera({addImage}) {
    const webcamRef = React.useRef();
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
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
        </div>
    )
}

export default Camera
