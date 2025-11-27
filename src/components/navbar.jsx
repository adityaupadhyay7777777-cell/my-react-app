import React from 'react'
import './navbar.css'

function Navbar(props) {
  return (
    <div className='navbar'>
      <div>{props.title}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
export default Navbar
