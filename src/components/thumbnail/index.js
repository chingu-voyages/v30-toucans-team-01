import React from 'react'
import './gallery.css'
import {Session, Session2} from './snapshot';


function Thumbnail({sessions}) {
    const [sess, setSesss] = React.useState('');
    const [isShowcase ,setShowcase] = React.useState(false)
    let access = React.useRef('')
    function showSession(props){
        access = props;
        setShowcase(!isShowcase)
    }

    React.useEffect(() => {
        console.log(access)
    }, [access])


    return (
        <div className="thumbnail__container">
            {!isShowcase ?
             sessions.map((session) =>  <Session show={showSession} key={session.id}  session={session} snapshots={session.snapshots}/>) 
            : <Session2 show={showSession} key={access.id} snapshots={access.snapshots}/>}
        </div>
    )
}

export default Thumbnail
