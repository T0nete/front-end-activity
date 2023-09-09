import React, { useState } from 'react'
import HeaderNavbar from './components/Navbar'
import MainContentLayout from './components/MainContentLayout'
import { Views } from './constants'
import './App.css'

function App () {
  const [section, setSection] = useState(Views.postList.name)

  const handleSection = (section) => {
    console.log(section)
    setSection(section)
  }

  return (
    <div className="App">
      <header className="App-header">
        <HeaderNavbar handleSection={handleSection}/>
        <MainContentLayout section={section}/>
      </header>
    </div>
  )
}

export default App
