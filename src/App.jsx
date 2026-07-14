import React from 'react'
import "./app.scss"
import Dock from './Components/Dock'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <main>
      <Dock/>
      <Navbar/>
    </main>
  )
}

export default App
