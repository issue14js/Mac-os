import React from 'react'
import "./app.scss"
import Dock from './Components/Dock'
import Navbar from './Components/Navbar'
import MacWindows from './Components/Windows/MacWindows'

const App = () => {
  return (
    <main>
      <Dock/>
      <Navbar/>
      <MacWindows>
        <h1>Hello</h1>
      </MacWindows>
    </main>
  )
}

export default App
