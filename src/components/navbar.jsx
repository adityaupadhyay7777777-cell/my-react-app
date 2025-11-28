import React from 'react'
import './navbar.css'

function Navbar(props) {
  return (
    <div className='navbar'>
      <div className='logo'>{props.title}</div>
      <ul>
        {props.lists.map((list, index)=>{
          return <li key={index}>{list}</li>
        })}
      </ul>
    </div>
  )
}
export default Navbar
