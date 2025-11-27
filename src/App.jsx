import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar"

function App() {
  const [Text, setText] = useState('Button Not Pressed')
  // Text is variable in component
  return (
    <>
      <Navbar title="My Navbar" />
      <main>
        <div className='text'>{Text}</div>
        <div className='button'>
          <button onClick={() => setText('Button 1 Pressed')}>button 1</button>
          <button onClick={() => setText('Button 2 Pressed')}>button 2</button>
        </div>
      </main>
    </>
  )
}

export default App
