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

function ModalTwo() {
    return (
        <div className="modal__container">
                <div class="modal">
                    <h1>FaceIt</h1>
                    <p>
                        WARNING!<br/>
                        The following sessions and pictures might not be saved <br/> in the future due to low disk space!<br/>
                    </p>
                    <button>I Understand</button>
                </div>
            </div>
    )
}
export {Modal, ModalTwo}
