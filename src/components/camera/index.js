<<<<<<< Updated upstream
=======
import React, {useState} from 'react';
import Webcam from 'react-webcam';
import './index.css';
import { AiOutlineCamera } from "react-icons/ai";



const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
}
function WebcamComponent() {
    const [isImage, setImage] = useState(false)
    const [imageURL, setImageURL] = useState(null)
    const webcamRef = React.useRef();


    async function grabImage() {
        setImageURL(await webcamRef.current.getScreenshot())
        setImage(!isImage)
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

            
        </div>
    )
}

export default WebcamComponent
>>>>>>> Stashed changes
