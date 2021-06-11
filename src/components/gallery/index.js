import React, {useState, useEffect} from 'react'
import SessionObj from '../../services/sessions'
import Session from './session'
import Thumbnail from './thumbnail'
import backIcon from '../../images/back-icon.svg'
import db from '../../services/faceitdb.js'
import './gallery.css'

function Gallery() {
    const [navStack, setNavStack] = useState([])
    const navForward = (toComponent) => setNavStack(navStack => [toComponent, ...navStack])
    const navBackward = () => setNavStack(navStack => navStack.slice(1))
    

    useEffect(() => {
        (async () => {
            let temp = await db.sessions.toArray()
            const sessions = temp.map(({id, snapshots}) => new SessionObj(id, snapshots))
            const sessionElements = sessions.map((session) => {
                const sessionElement = <Session openSnapshot={navForward} key={session.id} snapshots={session.snapshots}/>
                const openSession = () => navForward(sessionElement)
                return <Thumbnail onClick={openSession} key={session.id} snapshots={session.snapshots}/>
            })
            setNavStack([sessionElements])
        })()
    }, [])
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
