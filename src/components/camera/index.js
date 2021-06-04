import React, { useState } from 'react';
import Webcam from 'react-webcam';
import './camera.css';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
}
function Camera({addImage}) {
    const webcamRef = React.useRef();
    const [hasCamera, setCamera] = useState(null)
    let imageURL;

    async function  grabImage() {
        imageURL = await webcamRef.current.getScreenshot();
        addImage(imageURL);
      }
    return (
        <div className="Camera__wrapper">
            {hasCamera === null && 
                <dialog open>
                    Accessing camera...'
                </dialog>}
                {hasCamera === false ? 
                    <dialog open>
                        'No Camera found!'
                    <button onClick={() => setCamera(null)}>
                        Check again
                    </button>
                </dialog> :
                <div className="Camera" onClick={grabImage}>
                    {(hasCamera || hasCamera === null) && <Webcam
                        className="Camera__webcam"
                        audio={false}
                        height={720}
                        ref={webcamRef}
                        screenshotFormat="image/webp"
                        width={1280}
                        videoConstraints={videoConstraints}
                        imageSmoothing={true}
                        onUserMediaError={() => setCamera(false)}
                        onUserMedia={() => setCamera(true)}
                    />}
                </div>
            }
        </div>
    )
}

export default Camera
