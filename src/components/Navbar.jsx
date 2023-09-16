import React from 'react'
import {
  Navbar,
  NavbarBrand
} from 'reactstrap'
import { BeamIcon, UserProfileIcon } from '../assets/IconsSVG'
import { Views } from '../constants'
import '../styles/styles.css'

const HeaderNavbar = props => {
  const { handleSection } = props

  return (
    <Navbar color="faded" light expand="md" className='bg-light  justify-content-between align-items-center w-100 border-bottom shadow-sm'>
        <NavbarBrand onClick={() => { handleSection(Views.postList.name) }} href="/" className="me-auto d-flex align-items-center">
            <BeamIcon />
            <p className='mb-0'>three pics</p>
        </NavbarBrand>
        <div onClick={() => { handleSection(Views.profile.name) }} className='cursor-pointer'>
          <UserProfileIcon />
        </div>
    </Navbar>
  )
}
export default HeaderNavbar
