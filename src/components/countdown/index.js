import React, { useState, useEffect, useRef } from 'react'
import './countdown.css'

function Countdown({ seconds, callback, isEnabled, checkHasCamera }) {
  const [count, setCount] = useState(seconds)
  const [started, setStarted] = useState(false)
  const isLatchedRef = useRef(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (started) {
      timeoutRef.current = setTimeout(() => {
        if (count > 1) {
          setCount((count) => count - 1)
        } else {
          isLatchedRef.current = false
          setStarted(false)
          callback()
        }
      }, 1000)
    }
    return () => {
      clearTimeout(timeoutRef.current)
    }
  })

  function start() {
    if (checkHasCamera() && !isLatchedRef.current && isEnabled) {
      isLatchedRef.current = true
      setStarted(true)
      setCount(seconds)
    }
  }

  return (
    <div className="Countdown" onClick={start}>
      {started && <div className="Countdown__count">{count}</div>}
    </div>
  )
}

export default Countdown
