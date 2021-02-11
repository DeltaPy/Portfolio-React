import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {Canvas as c} from 'react-three-fiber';


export const HeroContainer = styled.div`
    background: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 2 !important;

    
`;

export const HeroBg = styled(c)`
    height: 100%;
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: 3 !important;
`;



export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and ( max-width: 1024px) {
        max-width: 1024px;
    }

`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and ( max-width: 1024px) {
        font-size: 65px;
    }

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 1024px) {
        font-size: 42px;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1024px) {
        margin-top: 62px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 32px;
    }
`;

export const ArrowForward = styled(AiOutlineArrowRight)`
    margin-left: 8px;
    font-size: 20px;
    transition: 0.4s;
    transform: ${({hovered}) => (hovered ? 'rotate(0deg)' : 'rotate(90deg)')};

    @media screen and (max-width: 1024px) {
        font-size: 38px;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

