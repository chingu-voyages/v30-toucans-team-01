import React, {useState} from 'react'
import './modal.css'
function Modal({children}) {
    return (
            <div className="modal__container">
                <div className="modal">
                    <h1>FaceIt</h1>
                    <p>
                        'No Camera Found'<br/>
                        Please Enable your Camera to Take Photos!
                    </p>
                    {children}
                </div>
            </div>
    )
}

function HomeModal() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`modal__container ${isActive && 'hide__modal'}`}>
            <div className="modal">
                <h1>FaceIt</h1>
                <p>
                        'No Camera Found'<br/>
                        Please Enable your Camera to Take Photos!
                    </p>
                <button onClick={() => setIsActive(!isActive)}>Accept</button>
            </div>
        </div>
    )
}
export {Modal,HomeModal}
