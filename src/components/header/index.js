import React from 'react'
import logo from '../../images/logo.svg'
import './header.css'

function Header() {
  return (
    <header className="Header">
      <img className="Header__logo" src={logo} alt="logo" />
      <p className="Header__tagline">Practice your facial expression mimicry with this five random emojis game!</p>
      <p className="Header__note">All images are stored locally on your device</p>
    </header>
  )
}

export default Header
