import React, { useEffect, useState } from 'react'
import MainContentLayout from './components/MainContentLayout'
import { Views } from './constants'
import Login from './components/Login'

import './App.css'
import axiosInstance from './service/axiosService'

function App () {
  const [section, setSection] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
      setSection(Views.postList.name)
    } else {
      setSection(Views.login.name)
    }
  }, [])

  const handleSection = (section) => {
    console.log(section)
    setSection(section)
  }

  const onLoginComplete = () => {
    setSection(Views.postList.name)
  }

  return (
    <div className="App">
      {
        section === Views.login.name
          ? <Login onLoginComplete={onLoginComplete}/>
          : (
            <div>
              <MainContentLayout section={section} handleSection={handleSection} />
            </div>
            )
      }
    </div>
  )
}

export default App
