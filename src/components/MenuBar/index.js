import React from 'react'
import {
    MenuIcon, Nav,
    NavbarContainer
} from './MenuBarElements'
import { FaBars } from 'react-icons/fa'

const MenuBar = () => {
  return (
    <Nav>
        <NavbarContainer>
            <MenuIcon>
                <FaBars />
            </MenuIcon>
        </NavbarContainer>
    </Nav>
  )
}

export default MenuBar