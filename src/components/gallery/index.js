import React from 'react'
import './gallery.css'

function Gallery({snapshots}) {
    const date = snapshots[0].timeStamp.getFullYear() + '-' + (snapshots[0].timeStamp.getMonth() + 1) + '-' + snapshots[0].timeStamp.getDate();
    return (
        <>
            <div className="gallery">
                  <div className="gallery__header">{date}</div>
                  <div className="top__images">
                        {snapshots.map(snapshot => (
                            <div className="gallery__image-container">
                                <img  className ="gallery__image" src={snapshot.imageURL} alt="random photo"/>
                                <span className="gallery__expression">{snapshot.expressionText}</span>
                            </div>
                        ))}
                  </div>    
            </div>
        </>
    )
}

export default Gallery
