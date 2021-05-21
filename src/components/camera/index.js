import React, {useState} from 'react';
import Webcam from 'react-webcam';
import './camera.css';
import { AiOutlineCamera } from "react-icons/ai";

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
        setImage(!isImage)
        console.log(mainImage)
      }
    return (
        <div className="main-container">
            <Webcam
                className={`sample-frame`}
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <AiOutlineCamera className="sample-btn" font-size="3em" onClick={grabImage}/>
            {isImage && <img alt="hidden " src="mainImage"></img>}
            
        </div>
    )
}

export default WebcamComponent
