import React, {useState} from 'react'
import SignIn from '../components/Signin'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MenuBar from '../components/MenuBar'
import InfoSection from '../components/InfoSection'
import CustomCardsSection from '../components/CustomCardsSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import SliderSection from '../components/SliderSection';

const GetStartedPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <MenuBar />
        <Navbar toggle={toggle} />
        <InfoSection {...homeObjTwo}/>
        <CustomCardsSection />
        <SliderSection />
        <Footer />
    </div>
  )
}

export default GetStartedPage