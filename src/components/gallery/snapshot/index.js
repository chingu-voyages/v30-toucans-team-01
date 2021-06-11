import React from 'react'

function Snapshot({snapshot}) {
    return (
        <div className="gallery__image-container">
            <img  className ="gallery__image" src={snapshot.imageURL} alt="random photo"/>
            <span className="gallery__expression">{snapshot.expressionText}</span>
        </div>
    )
}

function Session({snapshots}) {
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
export {Snapshot, Session}
