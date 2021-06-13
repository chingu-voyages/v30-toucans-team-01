import React from 'react'
import Button from '../button'
import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/fiverandomemojis" className="Menu__link">
        <Button className="Menu__button">Five Random Emojis</Button>
      </Link>
    </nav>
  )
}

export default Menu
