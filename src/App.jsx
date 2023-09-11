import React, { useEffect, useState } from 'react'
import MainContentLayout from './components/MainContentLayout'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { mockUser } from './mock/mockPost'
import PrivateRoute from './components/PrivateRoute'
import PostList from './components/PostList'
import Profile from './components/Profile'

import './App.css'
import { getToken } from './utils/utils'
function App () {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const token = getToken()
    if (token) {
      setCurrentUser(mockUser)
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
