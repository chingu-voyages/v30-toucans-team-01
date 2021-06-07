import React, {useState, useEffect} from 'react';
import "./gallery.css";
import {Snapshot2} from '../../components/thumbnail/snapshot'

function Gallery(props) {
    const [showcaseImg, setShowcaseImg] = useState('');
    console.log(props)
    function setImg(props){
        setShowcaseImg(props)
    }

    return (
        <div className="gallery__container">
            <div className="gallery__header">
                <h1>{ props.location.date.date}</h1>
            </div>
            <div className="image__gallery">
            {props.location.snapshots.snapshots.map(snapshot => 
                <Snapshot2 snapshot={snapshot} setImg={setImg}/>
            )}
            </div>
            <div className="gallery__showcase">
            {showcaseImg !== '' && <Snapshot2 snapshot={showcaseImg} setImg={setImg}/>}
            </div>
        </div>
    )
}

export default Gallery;