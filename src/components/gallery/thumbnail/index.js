import React from 'react'
import Snapshot from '../snapshot'
import './thumbnail.css'

function Thumbnail({snapshots, onClick}) {
    return (
        <div onClick={onClick} className="Thumbnail">
                <div className="Thumbnail__header">{snapshots[0].createdAt}</div>
                <div className="Thumbnail__snapshots">
                    {snapshots.map(snapshot => (
                        <Snapshot snapshot={snapshot} key={snapshot.id} className="Thumbnail__snapshot"/>
                    ))}
                </div>    
        </div>
    )
}
export default Thumbnail
