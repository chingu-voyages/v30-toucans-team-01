import React, { useState } from 'react';
import Webcam from 'react-webcam';
import './camera.css';
import Modal from '../modal'
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
}
function Camera({addImage}) {
    const webcamRef = React.useRef();
    const [hasCamera, setHasCamera] = useState(null)
    let imageURL;

    async function grabImage() {
        setHasCamera(webcamRef.current.stream.active);
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
                    <dialog className="Camera__dialogbox"open>
                        <Modal>
                    <button onClick={() => setHasCamera(null)}>
                        Check again
                        </button>
                        </Modal>
                    
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
                        onUserMediaError={() => setHasCamera(false)}
                        onUserMedia={() => setHasCamera(true)}
                    />}
                </div>
            }
        </div>
    )
}

export default Camera
