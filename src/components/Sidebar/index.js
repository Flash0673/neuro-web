import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/'>Начало</SidebarLink>
          <SidebarLink to='/signin'>Начало</SidebarLink>
          <SidebarLink to='/faq'>FAQ</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar