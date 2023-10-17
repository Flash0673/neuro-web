import React from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from '../../assets/images/Logo.png';
import User from '../../assets/images/User.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  NavMenu,
  NavLinks,
  MobileIcon,
  NavBtn,
  NavBtnLink,
  LogoImg,
  UserImg
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <LogoImg src={Logo}/>
            NeuroWeb
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/discover'>
                Начало
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/services'>
                Войти
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/signup'>
                FAQ
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'><UserImg src={User}/></NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar