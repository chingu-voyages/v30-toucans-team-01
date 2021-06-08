import React from 'react'
import Snapshot from '../snapshot'
import './session.css'

function Session({snapshots, openSnapshot}) {
    const date = snapshots[0].timeStamp.getFullYear() + '-' + (snapshots[0].timeStamp.getMonth() + 1) + '-' + snapshots[0].timeStamp.getDate();
    return (
        <div>
            <div className="Session">
                  <div className="Session__header">{date}</div>
                  <div className="Session__snapshots">
                        {snapshots.map(snapshot => {
                            const snapshotElement = <Snapshot snapshot={snapshot} key={snapshot.id}/>
                            return <Snapshot onClick={() => openSnapshot(snapshotElement)} snapshot={snapshot} key={snapshot.id} className="Session__snapshot"/>
                        })}
                  </div>    
            </div>
        </div>
    )
}

export default Session