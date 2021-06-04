import React from 'react'
import './modal.css'
function Modal({children}) {
    return (
            <div className="modal__container">
                <div class="modal">
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

export default Modal
