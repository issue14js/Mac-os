import React from 'react'
import "./app.scss"
import Dock from './Components/Dock'
import Navbar from './Components/Navbar'
import GithubWindow from './Components/Windows/GithubWindow'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Dock/>
      <GithubWindow/>
    </main>
  )
}

export default App
