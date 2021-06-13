import React from 'react'
import { emojiList } from '../../../services/emoji'
import './snapshot.css'

function Snapshot({ snapshot, onClick = () => null, className }) {
  return (
    <div onClick={onClick} className={`Snapshot ${className || ''}`}>
      <img className="Snapshot__image" src={snapshot.imageURL} alt={`${emojiList[snapshot.expressionText]} snapshot`} />
      <svg className="Snapshot__expression" viewBox="0 0 56 18">
        <text x="0" y="15">
          {snapshot.expressionText}
        </text>
      </svg>
    </div>
  )
}

export default Snapshot
