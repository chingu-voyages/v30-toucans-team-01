import React from 'react'

function Snapshot({snapshot}) {
    return (
        <div className="gallery__image-container">
            <img  className ="gallery__image" src={snapshot.imageURL} alt="random photo"/>
            <span className="gallery__expression">{snapshot.expressionText}</span>
        </div>
    )
}

export default Snapshot
