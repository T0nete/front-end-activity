import React from 'react'
import HeaderNavbar from './components/Navbar'
import MainContentLayout from './components/MainContentLayout'
import './App.css'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNavbar />
        <MainContentLayout />
      </header>
    </div>
  )
}

export default App
