import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MenuBar from '../components/MenuBar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <div className='App'>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MenuBar />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <Services />
      <Footer />
    </div>
  )
};

export default MainPage;