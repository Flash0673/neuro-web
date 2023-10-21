import React, { useState } from 'react'

import Icon1 from '../../assets/images/Step1.svg'
import Icon2 from '../../assets/images/Step2.svg'
import Icon3 from '../../assets/images/Step3.svg'


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
    RectangleCardWrapper,
    ServicesH3,
    Button
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
                    <ServicesH3>Соберите и сгруппируйте данные по классам, или категории, которые вы хотите, чтобы компьютер изучил.</ServicesH3>
                </ServicesCard>
                <ServicesCard className='lowered'>
                    <NameRectangleCard >
                        <ServicesAd>2. Обучи модель</ServicesAd>
                    </NameRectangleCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH3>Обучите свою модель, а затем мгновенно протестируйте ее, чтобы проверить, может ли она правильно классифицировать новые примеры.</ServicesH3>
                </ServicesCard>
                <ServicesCard>
                    <NameRectangleCard>
                        <ServicesAd>3. Экспортируй</ServicesAd>
                    </NameRectangleCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH3>Экспортируйте модель для своих проектов: сайтов, приложений и т.д. Вы можете скачать модель или разместить ее в Интернете.</ServicesH3>
                </ServicesCard>
            </ServicesWrapper>
            <ServicesBtnWrapper>
                <a href='/signin'><Button to='signin'>
                    Попробовать
                </Button>
                </a>
            </ServicesBtnWrapper>


        </ServicesContainer>
    )
}

export default Services;