import React, {useState, useRef, useEffect} from 'react'
import Camera from '../../components/camera'
import { Link } from 'react-router-dom'
import backIcon from '../../images/back-icon.svg'
import Session  from '../../services/sessions'
import './booth.css'

<<<<<<< Updated upstream
function Booth({children, addSession, className, addImage}) {
=======
function Booth({children, addSession}) {
    const [expression, setExpression] = useState('');
    const tempSession = useRef(new Session());

    useEffect(() => {
        const session = tempSession.current
        return () => {
            {session.snapshots.length !== 0 && addSession(session)}
        }
    },[])
    
    
    function addImage(props){
        // Input session
        tempSession.current.addSnapshot(props, expression);
        console.log(tempSession);
        console.log("addImage Test Passed")
    }

    
>>>>>>> Stashed changes
    return (
        <div className={`Booth ${className || ''}`}>
            <Camera addImage={addImage}/>
            <div className="Booth__overlay">
                <Link to="/" className="Booth__back-button"><img className="Booth__backBtn" alt="back button" src={backIcon}/></Link>
                <div className="Booth__children">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Booth
