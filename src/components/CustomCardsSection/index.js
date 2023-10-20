import React, { useState } from 'react'

import Icon1 from '../../assets/images/Step1.svg'
import Icon2 from '../../assets/images/Step2.svg'
import Icon3 from '../../assets/images/Step3.svg'

import { Button1 } from '../ButtonElements'

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    RectangleCard,
    ServicesBtnWrapper,
    ArrowForward,
    ArrowRight,
    NameRectangleCard,
    ServicesAd,
    RectangleCardWrapper
} from './CustomCardsElements';

const Services = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <ServicesContainer id="services">

            <RectangleCard>
                <ServicesH2>Как пользоваться?</ServicesH2>
                <ServicesH1>Просто следуй шагам</ServicesH1>
            </RectangleCard>
            <ServicesWrapper>
                <ServicesCard>
                    <NameRectangleCard>
                        <ServicesAd>1. Загрузи данные</ServicesAd>
                    </NameRectangleCard>
                    <ServicesIcon src={Icon1} />
                </ServicesCard>
                <ServicesCard className='lowered'>
                    <NameRectangleCard >
                        <ServicesAd>2. Обучи модель</ServicesAd>
                    </NameRectangleCard>
                    <ServicesIcon src={Icon2} />
                </ServicesCard>
                <ServicesCard>
                    <NameRectangleCard>
                        <ServicesAd>3. Экспортируй</ServicesAd>
                    </NameRectangleCard>
                    <ServicesIcon src={Icon3} />
                </ServicesCard>
            </ServicesWrapper>
            <ServicesBtnWrapper>
                <Button1 to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                    Попробовать {hover ? <ArrowForward /> : <ArrowRight
                    />}
                </Button1>
            </ServicesBtnWrapper>


        </ServicesContainer>
    )
}

export default Services;