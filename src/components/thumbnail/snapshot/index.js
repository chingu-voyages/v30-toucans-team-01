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


function Session({session,snapshots, show}) {
    const date = snapshots[0].timeStamp.getFullYear() + '-' + (snapshots[0].timeStamp.getMonth() + 1) + '-' + snapshots[0].timeStamp.getDate();
    const [time, setTime] = React.useState(false);

    return (
         
        <div onClick={()=>show(session)}>
            <div className="thumbnail">
                    <div className="thumbnail__header">{date}</div>
                    <div className="top__images">
                        {snapshots.map(snapshot => (
                            <Snapshot snapshot={snapshot} key={snapshot.id}/>
                        ))}
                    </div>    
            </div>
        </div>
    )
}

function Session2({session, snapshots, show}) {
    console.log(snapshots)
    const date = snapshots[0].timeStamp.getFullYear() + '-' + (snapshots[0].timeStamp.getMonth() + 1) + '-' + snapshots[0].timeStamp.getDate();
    return (
         
        <div onClick={()=>show(session)}>
            <div className="thumbnail">
                    <div className="thumbnail__header">{date}</div>
                    <div className="top__images">
                        {snapshots.map(snapshot => (
                            <Snapshot snapshot={snapshot} key={snapshot.id}/>
                        ))}
                    </div>    
            </div>
        </div>
    )
}
export {Snapshot, Session, Session2}
