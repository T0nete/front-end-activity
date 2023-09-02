import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { BeamIcon, UserProfileIcon } from '../assets/IconsSVG'

const HeaderNavbar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {} // setIsOpen(!isOpen)

  return (
    <Navbar color="faded" light expand="md" className='bg-light  justify-content-between align-items-center w-100 border-bottom shadow-sm'>

        <NavbarBrand href="/" className="me-auto d-flex align-items-center">
            <BeamIcon />
            <p className='mb-0'>three pics</p>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2 border-0">
            <UserProfileIcon />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className='w-100 justify-content-end'>
            <Nav className={`${isOpen ? 'flex-column' : 'justify-content-between flex-md-row'}`} navbar>
                <NavItem className='mt-1'>
                    <NavLink className='rounded bg-dark ' href="/postList">
                        <p className='px-2 mb-0 text-white'>Post List</p>
                    </NavLink>
                </NavItem>
                <NavItem className='mt-1'>
                    <NavLink className='' href="/profile">
                        <p className='px-2 mb-0'>Profile</p>
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  )
}
export default HeaderNavbar
