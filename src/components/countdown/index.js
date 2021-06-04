import React, { useState, useEffect } from 'react'
import './countdown.css'

function Countdown({seconds, callback }) {
    const [count, setCount] = useState(seconds)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        started && setTimeout(() => {
            if (count > 1) {
                setCount(count => count - 1)
            }
            else {
                setStarted(false)
                callback()
            }
        }, 1000)
    })
    
    function start() {
        if (!started) {
            setStarted(true)
            setCount(seconds)
        }
    }

    return (
        <div className="Countdown" onClick={start}>
            {started &&
                <div className="Countdown__count">{count}</div>
            }
        </div>
    )
}

export default Countdown
