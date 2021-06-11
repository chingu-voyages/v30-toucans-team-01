import React from 'react'
import Snapshot from '../snapshot'
import './session.css'

function Session({snapshots, openSnapshot, lastModified}) {
    return (
        <div>
            <div className="Session">
                  <div className="Session__header">{snapshots[0].createdAt}</div>
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