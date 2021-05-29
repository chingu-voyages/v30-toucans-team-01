import React from 'react'
import Camera from '../../components/camera'
import { Link } from 'react-router-dom'
import backIcon from '../../images/back-icon.svg'
import Session  from '../../components/sessions'
import './booth.css'

function Booth({children}) {
    const [expression, setExpression] = React.useState('');
    function addImage(props){

        // Grabbing Time
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        // Creating a new Session
        const session1 = new Session(props, expression, date, time);
        console.log(session1);
        console.log(date + " " + time);
        console.log("Pass")
    }

    
    return (
        <div className="Booth">
            <Camera addImage={addImage}/>
            <div className="Booth__overlay">
                <Link to="/" className="Booth__back-button"><img className="Booth__backBtn" src={backIcon}/></Link>
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
