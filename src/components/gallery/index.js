import React from 'react'
import './gallery.css'

function index() {
    return (
        <>
            <div className="gallery">
                  <div className="gallery__header">10-May-2021</div>
                  <div className="top__images">
                        <div className="gallery__image-container">
                            <img  className ="gallery__image" src="https://source.unsplash.com/random" alt="random photo"/>
                            <span className="gallery__expression">😀</span>
                        </div>
                        <div className="gallery__image-container">
                            <img className ="gallery__image" src="https://source.unsplash.com/random" alt="random photo"/>
                            <span className="gallery__expression">😀</span>
                        </div>
                        <div className="gallery__image-container">
                            <img  className ="gallery__image" src="https://source.unsplash.com/random" alt="random photo"/>
                            <span className="gallery__expression">😀</span>
                        </div>
                  </div>    
                  <div className="bottom__images">
                        <div className="gallery__image-container">
                            <img  className ="gallery__image" src="https://source.unsplash.com/random" alt="random photo"/>
                            <span className="gallery__expression">😀</span>
                        </div>
                        <div className="gallery__image-container">
                            <img  className ="gallery__image" src="https://source.unsplash.com/random" alt="random photo"/>
                            <span className="gallery__expression">😀</span>
                        </div>
                </div>
            </div>
        </>
    )
}

export default index
