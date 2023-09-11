import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token')

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  // If user is authenticated, render the child routes
  return <Outlet />
}

export default PrivateRoute
