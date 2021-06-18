import React, {useState, useRef} from 'react'
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

function HomeModal({activeModal}) {   
    return (
        <div className={`modal__container ${activeModal.isActive && 'hide__modal'}`}>
            <div className="modal">
                <h1>FaceIt</h1>
                <p>
                        This site reads data and stores it in the background<br/>
                        to showcase it in the gallery component.<br/>
                        Press 'I Accept' to continue.
                    </p>
                <button onClick={() => activeModal.setIsActive(!activeModal.isActive)}> I Accept</button>
            </div>
        </div>
    )
}
export {Modal,HomeModal}
