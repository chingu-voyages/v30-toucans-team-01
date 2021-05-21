import React, {useState} from 'react';
import Webcam from 'react-webcam';
import './camera.css';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
}
function WebcamComponent(addImage) {
    const webcamRef = React.useRef();
    let mainImage;

    async function  grabImage() {
        mainImage = await webcamRef.current.getScreenshot();
        addImage(mainImage);
      }
    return (
        <div className="WebcamComponent" onClick={grabImage}>
            <Webcam
                className="WebcamComponent__camera"
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

export default WebcamComponent
