import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MenuBar from '../components/MenuBar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'





const Mainpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MenuBar />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
    </div>
  )
};

export default Mainpage;