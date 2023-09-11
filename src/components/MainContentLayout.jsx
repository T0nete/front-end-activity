import React from 'react'
import HeaderNavbar from './Navbar'

const MainContentLayout = props => {
  const { children } = props

  return (
    <>
      <header className="App-header">
          <HeaderNavbar />
      </header>
      <div className="container">
        <div className="p-2">
          {children}
        </div>
      </div>
    </>
  )
}

export default MainContentLayout
