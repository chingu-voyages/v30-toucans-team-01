import React, {useState} from 'react'
import Session from './session'
import Thumbnail from './thumbnail'
import backIcon from '../../images/back-icon.svg'
import './gallery.css'

function Gallery({sessions}) {
    const navForward = (toComponent) => setNavStack(navStack => [toComponent, ...navStack])
    const navBackward = () => setNavStack(navStack => navStack.slice(1))
    const sessionElements = sessions.map((session) => {
        const sessionElement = <Session openSnapshot={navForward} key={session.id} snapshots={session.snapshots}/>
        const openSession = () => navForward(sessionElement)
        return <Thumbnail onClick={openSession} key={session.id} snapshots={session.snapshots}/>
    })
    const [navStack, setNavStack] = useState([sessionElements])
    
    return (
        <div className="Gallery">
            <h1 className="Gallery__heading">Gallery</h1>
            <div className="Gallery__nav">
                {navStack.length > 1 &&
                    <button onClick={navBackward} className="Gallery__backBtn">
                        <img alt="gallery back" src={backIcon}/>
                    </button>
                }
            </div>
            <div className="Gallery__content">
                {navStack[0]}
            </div>
        </div>
    )
}

export default Gallery
