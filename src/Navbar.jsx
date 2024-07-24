import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/count">COUNTER</Link></li>
          <li><Link to="/form">FEEDBACK</Link></li>
          <li ><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
