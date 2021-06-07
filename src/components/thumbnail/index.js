import React from 'react'
import './gallery.css'
import {Session} from './snapshot';


function Thumbnail({sessions}) {
    return (
        <div className="thumbnail__container">
            {sessions.map((session, index) =>  <Session key={session.id} snapshots={session.snapshots}/>)}
        </div>
    )
}

export default Thumbnail
