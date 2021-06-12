import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { emojiList, randomEmojisArray } from '../../services/emoji';
import Session from '../../services/sessions';
import Booth from '../booth';
import db from '../../services/faceitdb.js'
import './fiveRandomEmojis.css';

function FiveRandomEmojis() {
    const [emojis, setEmojis] = useState(randomEmojisArray(5))
    const tempSession = useRef(new Session());
    const history = useHistory();

    useEffect(() => {
        const session = tempSession.current
        return () => {
            session.snapshots.length !== 0 && db.sessions.add(session)
        }
    },[])

    useEffect(() => {
        if (tempSession.current.snapshots.length >= 5) {
            history.push('/')
        }
    }, [history, tempSession.current.snapshots.length])
    
    function nextEmoji() {
        setEmojis(emojis => [...emojis, emojis[0]].slice(1))
    }
    function addImage(props) {
        tempSession.current.addSnapshot(props, emojis[2]);
        nextEmoji()
    }
    return (
        <Booth className="Five-random-emojis" {...{addImage}}>
            <div className="Five-random-emojis__carousel">
                {emojis.map(emoji => <button className="Five-random-emojis__emojis" key={emoji+emojiList[emoji]} title={emojiList[emoji]}>{emoji}</button>)}
            </div>
        </Booth>
    )
}

export default FiveRandomEmojis;