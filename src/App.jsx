/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import Header from "./components/Header.jsx"
import Schedules from "./components/Schedules.jsx"
import Personal from "./components/Personal.jsx"
import './App.css'

function App() {
  return (
    <div className="App">
      < Header /> 
      <div className="Items">
        <Personal/>
        <Schedules/>
      </div>
      
      
    </div>
  )
}

export default App
