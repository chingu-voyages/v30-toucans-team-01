import React from 'react'
import { Link } from 'react-router-dom';

function Snapshot({snapshot}) {
    return (
        <div className="thumbnail__image-container">
            <img  className ="thumbnail__image" src={snapshot.imageURL} alt="random photo"/>
            <span className="thumbnail__expression">{snapshot.expressionText}</span>
        </div>
    )
}

function Snapshot2({snapshot,setImg}) {
    return (
        <div className="thumbnail__image-container" onClick={() => setImg(snapshot)}>
            <img  className ="thumbnail__image" src={snapshot.imageURL} alt="random photo"/>
            <span className="thumbnail__expression">{snapshot.expressionText}</span>
        </div>
    )
}

function Session({snapshots}) {
    const date = snapshots[0].timeStamp.getFullYear() + '-' + (snapshots[0].timeStamp.getMonth() + 1) + '-' + snapshots[0].timeStamp.getDate();
    return (
        <div>
            <Link to={{pathname:"/gallery" , snapshots: {snapshots}, date : {date}}} >
                <div className="thumbnail">
                        <div className="thumbnail__header">{date}</div>
                        <div className="top__images">
                            {snapshots.map(snapshot => (
                                <Snapshot snapshot={snapshot} key={snapshot.id}/>
                            ))}
                        </div>    
                </div>
            </Link>
        </div>
    )
}
export {Snapshot, Session, Snapshot2}
