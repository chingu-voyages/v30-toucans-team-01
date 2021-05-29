import React from 'react'
import Camera from '../../components/camera'
import { Link } from 'react-router-dom'
import backIcon from '../../images/back-icon.svg'
import Session  from '../../components/sessions'
import './booth.css'

function Booth({children, addSession}) {
    const [expression, setExpression] = React.useState('');
    const [tempSession, setTempSession] = React.useState(new Session());

    React.useEffect(() => {
        const session = tempSession
        return () => {
            {session.snapshots.length !== 0 && addSession(session)}
        }
    },[])
    
    function addImage(props){
        const session1 = tempSession;

        // Input session
        session1.addSnapshot(props, expression);
        setTempSession(session1)
        console.log(tempSession);
        console.log("addImage Test Passed")
    }

    
    return (
        <div className="Booth">
            <Camera addImage={addImage}/>
            <div className="Booth__overlay">
                <Link to="/" className="Booth__back-button"><img className="Booth__backBtn" alt="back button" src={backIcon}/></Link>
                <div className="Booth__children">
                    {/* {children} */}
                    <div>
                        <input id="first__emoji" type="checkbox" />
                        <label for="first__emoji" className="Booth__emoji" onClick={() => setExpression('😎')}>😎</label>
                        <input id="second__emoji" type="checkbox" />
                        <label for="second__emoji" className="Booth__emoji" onClick={() => setExpression('😀')}>😀</label>
                        <input id="third__emoji" type="checkbox"  />
                        <label for="third__emoji" className="Booth__emoji" onClick={() => setExpression('😠')}>😠</label>
                        <input id="fourth__emoji" type="checkbox" />
                        <label for="fourth__emoji" className="Booth__emoji" onClick={() => setExpression('😥')}>😥</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booth
