import React, { useState } from 'react';
import { emojiList, randomEmojisArray } from '../../services/emoji';
import Booth from '../booth';
import './fiveRandomEmojis.css';

function FiveRandomEmojis({addSession}) {
    const [emojis, setEmojis] = useState(randomEmojisArray(5))
    
    function nextEmoji() {
        setEmojis(emojis => [...emojis, emojis[0]].slice(1))
    }
    function addImage() {
        /* add Trek182021's addImage code here */
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