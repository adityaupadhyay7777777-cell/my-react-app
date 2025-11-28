import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar"
import Contact from './components/contact'
import { Routes, Route, Link } from "react-router-dom"
 

function App() {
  const [Text, setText] = useState('Button Not Pressed')
  // Text is variable in component
  const lists = ['Home', 'About', 'Contact']
  const LoggedIn = true

  return (
    <>
      <Navbar title="My Navbar" lists={lists} />
      <main>
        <div className='text'>{Text}</div>
        <div className='button'>
          <button id="button1" onClick={() => setText('Button 1 Pressed')}>button 1</button>
          <button id="button2" onClick={() => setText('Button 2 Pressed')}>button 2</button>
        </div>
        <div style={{padding:"5px", fontSize:"25px"}}>
          {!LoggedIn ? <h2>Welcome back!</h2> : <h2> Welcome!</h2>}
        </div>
        {/* <Link to="/contact">Contact</Link> */}
       <Routes>
        <Route path="/contact" element={<Contact/>}></Route>
        </Routes> 

      </main>
    </>
  )
}
export default App
