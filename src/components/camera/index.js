import React, { useState } from 'react';
import Webcam from 'react-webcam';
import Countdown from '../countdown';
import './camera.css';
import Modal from '../modal'
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
}
function Camera({addImage, shutterEnabled}) {
    const webcamRef = React.useRef();
    const [hasCamera, setHasCamera] = useState(null)
    let imageURL;

    function checkHasCamera() {
        if (webcamRef.current.stream.active) {
            setHasCamera(true)
            return true
        }
        else {
            setHasCamera(false)
            return false
        } 
    }
    async function grabImage() {
        if (checkHasCamera()) {
            imageURL = await webcamRef.current.getScreenshot();
            addImage(imageURL);
        }
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
                <div className="Camera" >
                    {(hasCamera || hasCamera === null) && 
                    <>
                        <Countdown seconds={3} callback={grabImage} isEnabled={shutterEnabled && hasCamera} checkHasCamera={checkHasCamera} />
                        <Webcam
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
                        />
                    </>}
                </div>
            }
        </div>
    )
}

export default Camera
