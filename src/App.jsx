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
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await axiosInstance.get('/users/me',
          { headers: { Authorization: getToken() } }
        )
        const user = userResponse.data
        setCurrentUser(user)
      } catch (error) {
        console.log(error)
      }
    }
    const token = getToken()
    if (token) {
      fetchUser()
    } else {
      // Clear user from state if token is invalid or expired
      setCurrentUser(null)
    }
  }, [isAuthenticated])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<MainContentLayout><PostList /></MainContentLayout>} />
            <Route path='/postList' element={<MainContentLayout><PostList /> </MainContentLayout>} />
            <Route path='/profile' element={<MainContentLayout><Profile {...currentUser} /> </MainContentLayout>} />
          </Route>
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
