/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import Head from "./components/Head.jsx"
import Schedules from "./components/Schedules.jsx"
import Personal from "./components/Personal.jsx"
import './App.css'

function App() {
  return (
    <div className="App">
      < Head /> 
      <div className="Items">
        <Personal/>
        <Schedules/>
      </div>
      
      
    </div>
  )
}

export default App
