import React, { useEffect, useState } from 'react'
import MainContentLayout from './components/MainContentLayout'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import PostList from './components/PostList'
import Profile from './components/Profile'

import './App.css'
import { getToken } from './utils/utils'
import axiosInstance from './service/axiosService'
function App () {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResposne = await axiosInstance.get('/users/me',
          { headers: { Authorization: getToken() } }
        )
        const user = userResposne.data
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
      }
    }
    const token = getToken()
    if (token) {
      fetchUser()
      // setCurrentUser(mockUser)
    } else {
      // Clear user from state if token is invalid or expired
      setCurrentUser(null)
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<MainContentLayout><PostList /></MainContentLayout>} />
            <Route path='/postList' element={<MainContentLayout><PostList /> </MainContentLayout>} />
            <Route path='/profile' element={<MainContentLayout><Profile {...currentUser} /> </MainContentLayout>} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
