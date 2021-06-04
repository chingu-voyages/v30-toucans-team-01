import React from 'react'
import './gallery.css'
import {Session} from './snapshot';


function Gallery({sessions}) {
    return (
        <div className="gallery__container">
            {sessions.map((session, index) =>  <Session key={session.id} snapshots={session.snapshots}/>)}
        </div>
    )
}

export default Gallery
