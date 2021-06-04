import React, { useState, useEffect } from 'react'
import Camera from '../../components/camera'
import { Link } from 'react-router-dom'
import backIcon from '../../images/back-icon.svg'
import './booth.css'

function Booth({children, className, addImage}) {
    const [imagePreview, setImagePreview] = useState()
    function handleAddImage(imageUrl) {
        setImagePreview(imageUrl)
        addImage(imageUrl)
    }
    useEffect(() => {
        imagePreview && setTimeout(() => {
            setImagePreview(null)
        }, 1000)
    }, [imagePreview])
    return (
        <div className={`Booth ${className || ''}`}>
            {imagePreview && <dialog open className="Booth__image-preview">
                <img className="image-preview__image" src={imagePreview} alt="Image preview" />
            </dialog>}
            <Camera addImage={handleAddImage}/>
            <div className="Booth__overlay">
                <Link to="/" className="Booth__back-button"><img className="Booth__backBtn" alt="back button" src={backIcon}/></Link>
                <div className="Booth__children">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Booth
