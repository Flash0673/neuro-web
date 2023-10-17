import React, { useState} from 'react'
import { Button } from '../ButtonElements'
import { HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight } from './HeroElements'


const HeroSection = () => {
  const [hover, setHover] = useState(false)
    const onHover = () => {
      setHover(!hover)
    }
    
  return (
    <HeroContainer>
        <HeroBg>

        </HeroBg>
        <HeroContent>
          <HeroH1>Раскройте потенциал искусственного интеллекта с помощью NeuroWeb</HeroH1>
          <HeroP>
          
          </HeroP>
          <HeroBtnWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
              Начать {hover ? <ArrowForward />: <ArrowRight
            />}
            </Button>
          </HeroBtnWrapper>
        </ HeroContent>
    </HeroContainer>
  )
}

export default HeroSection