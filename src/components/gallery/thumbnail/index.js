import React from 'react'
import Snapshot from '../snapshot'
import './thumbnail.css'

function Thumbnail({snapshots, onClick}) {
    const date = snapshots[0].timeStamp.getFullYear() + '-' + (snapshots[0].timeStamp.getMonth() + 1) + '-' + snapshots[0].timeStamp.getDate();
    return (
        <div onClick={onClick} className="Thumbnail">
                <div className="Thumbnail__header">{date}</div>
                <div className="Thumbnail__snapshots">
                    {snapshots.map(snapshot => (
                        <Snapshot snapshot={snapshot} key={snapshot.id} className="Thumbnail__snapshot"/>
                    ))}
                </div>    
        </div>
    )
}
export default Thumbnail
