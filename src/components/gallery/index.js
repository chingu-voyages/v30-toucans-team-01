import React from 'react'
import './gallery.css'
import Snapshot from './snapshot';

function Gallery({snapshots}) {
    const date = snapshots[0].timeStamp.getFullYear() + '-' + (snapshots[0].timeStamp.getMonth() + 1) + '-' + snapshots[0].timeStamp.getDate();
    return (
        <div>
            <div className="gallery">
                  <div className="gallery__header">{date}</div>
                  <div className="top__images">
                        {snapshots.map(snapshot => (
                           <Snapshot snapshot={snapshot} key={snapshot.id}/>
                        ))}
                  </div>    
            </div>
        </div>
    )
}

export default Gallery
