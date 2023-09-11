import React from 'react'
import {
  Navbar,
  NavbarBrand
} from 'reactstrap'
import { BeamIcon, UserProfileIcon } from '../assets/IconsSVG'
import { Link } from 'react-router-dom'

const HeaderNavbar = props => {
  return (
    <Navbar color="faded" light expand="md" className='bg-light  justify-content-between align-items-center w-100 border-bottom shadow-sm'>
        <Link to='/postList'>
          <NavbarBrand tag="div" className="me-auto d-flex align-items-center">
              <BeamIcon />
              <p className='mb-0'>three pics</p>
          </NavbarBrand>
        </Link>
        <div >
          <Link to='/profile'>
            <UserProfileIcon />
          </Link>
        </div>
    </Navbar>
  )
}
export default HeaderNavbar
