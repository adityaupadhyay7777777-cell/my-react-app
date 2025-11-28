import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { About } from './about'
import Contact from './contact'
import { Home } from './home'

const styles={
  textDecoration: 'none',
  color: 'white'

}

function Navbar(props) {
  return (
    <div className='navbar'>
      <div className='logo'>{props.title}</div>
      <ul>
        {props.lists.map((list, index) => {
          return <Link style={styles} to={`./${list.toLowerCase()}`} key={index}><li >{list}</li></Link>
        })}
        
      </ul>
    </div>
  )
}
export default Navbar
