import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const SliderSectionContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #101021;
    

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const SliderWrapper = styled.div`
    /* padding-top: 100px;
    padding-right: 1080px; */
    max-height: 600px;
    /* z-index: 1; */
    max-width: 1000px;
    /* display: flex; */
    align-items: center;
    /* position: relative; */

`


export const SliderCard = styled.div`  // TODO: Можно попробовать по grid раскидать
    background: rgba(56,56,71,0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    height: 350px;
    max-width: 250px;
   
    box-shadow: 0 1px 3px rgba (0, 0, 0,0.2);
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 480px) {
        height: 150px;
        width: 150px;
    }

    @media screen and (max-width: 1000px) {
        height: 200px;
        width: 200px;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const CardIcon = styled.img`
    height: 120px;
    width: 120px;
`
export const SliderH1 = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 376px) {
        font-size: 1rem;
    }
`


export const CardLink = styled.h2`
    font-size: 1rem;
    text-decoration: underline;
    color: #fff;

    @media screen and (max-width: 1000px) {
        
        font-size: 0.85rem;
    }
`

export const CardText = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #fff;

`

export const RectangleCard = styled.div` // TODO: Адаптивность подправить 
    background: linear-gradient(#5D48B9, #666AED);;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    border-radius: 32px;
    height: 600px;
    max-width: 1100px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba (0, 0, 0,0.2);

    @media screen and (max-width: 480px) {
        height: 1200;
        width: 460;
    }
`
