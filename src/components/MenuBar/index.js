// import React from 'react'
// import {
//     MenuIcon, Nav,
//     NavbarContainer
// } from './MenuBarElements'
// import { FaBars } from 'react-icons/fa'
// import DropdownMenu from './DropdownMenu'

// const MenuBar = () => {
//   return (
//     <Nav>
//         <NavbarContainer>
//             <MenuIcon>
//                 <DropdownMenu />
//             </MenuIcon>
//         </NavbarContainer>
//     </Nav>
//   )
// }

// export default MenuBar

// https://github.com/kontentino/react-multilevel-dropdown
import React from 'react'
import Dropdown from 'react-multilevel-dropdown';
import MenuIcon from '@mui/icons-material/Menu';
import { FaBars } from 'react-icons/fa'




const MenuBar = () => {
  return (
    <div className='dropdown-menu'>
      <div className='menu-wrapper'>
      <Dropdown
        title=<MenuIcon/>
        position='right'
        className="menu"
      >
        <Dropdown.Item >
          Личный кабинет
        </Dropdown.Item>
        <Dropdown.Item>
          Выбрать модель
          <Dropdown.Submenu position='right'>
            <Dropdown.Item>
              CV
              <Dropdown.Submenu position='right' className='sub-menu'>
              <Dropdown.Item>
                  Классификация изображений
                </Dropdown.Item>
                <Dropdown.Item>
                  Распознавание лиц
                </Dropdown.Item>
                <Dropdown.Item>
                  Позы
                </Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
              NLP
              <Dropdown.Submenu position='right'>
              <Dropdown.Item>
                  Распознавание речи
                </Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
              Classical ML
              <Dropdown.Submenu position='right' className='sub-menu-classical-ml'>
              <Dropdown.Item>
                  Предсказание столбца в таблице
                </Dropdown.Item>
                <Dropdown.Item>
                  Продвинутая аналитика
                </Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
              3D
            </Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
      </Dropdown>
      </div>
    </div>
  )
}

export default MenuBar