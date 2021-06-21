import styled from 'styled-components';
import {Canvas as c} from 'react-three-fiber';

export const InfoContainer = styled.div`
    color: #fff;
    // height: 100vh;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#171717')};
    padding: 100px 0;

    @media screen and (max-width: 1024px) {
        padding: 100px 0;
    }
`;

export const InfoBg = styled(c)`
    height: 100vh !important;
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 1 !important;
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    position: relative;
    
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};
    margin-top: 30px;

    @media screen and ( max-width: 1024px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
    }

    @media screen and ( max-width: 900px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
    }
`;
//SKILLS
export const Column1 = styled.div`
    grid-area: col1;
    height: 100%;
    align:center;
    align-items: center;
    justify-content: center;
    
    
    @media screen and ( max-width: 1024px) {
        margin-top: 15%;
    }

    @media screen and ( max-width: 900px) {
        margin-top: 40%;
    }


    @media screen and ( max-width: 768px) {
        margin-top: 30%;
    }

    // @media screen and ( max-width: 480px) {
    //     margin-top: 60%;

    // }
`;

export const Column2 = styled.div`
    grid-area: col2;
    // max-height: 525px;

    @media screen and ( max-width: 1024px) {
        margin-top: 10%;
    }

    @media screen and ( max-width: 768px) {
        margin-top: 10%;
    }
`;

export const TextWrapper = styled.div`
    padding-top: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const TopLine = styled.p`
    color: #FF4532;
    font-size: 1.5rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 60px;

    @media screen and ( max-width: 1024px) {
        font-size: 3rem;
    }

    @media screen and ( max-width: 768px) {
        font-size: 2rem;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    margin-top: 24px;
    font-size: 38px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#171717')};

    @media screen and ( max-width: 1024px) {
        font-size: 42px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    font-size: 18px;
    // line-height: 24px;
    margin: auto;
    text-align: center;
    // word-wrap: break-word;
    color: ${({darkText}) => (darkText ? '#171717' : '#fff')};

    @media screen and ( max-width: 1024px) {
        font-size: 34px;
    }
    @media screen and ( max-width: 768px) {
        font-size: 18px;
        
    }
    @media screen and ( max-width: 480px) {
        font-size: 14px;
        width: 100vw;
        
    }
`;


export const ImgWrap = styled.div`
    width: 100%;
    height: 100%;
    
`;

export const Img = styled.img`
    width: 18rem;
    height: 20rem;
    display: flex;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    user-select: none;
    border-radius: 50%;
    margin: auto;
    
    animation-name: floating; 
    animation-duration: 3s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out; 

    @keyframes floating { 
        0% { transform: translate(0,  0px); } 
        50%  { transform: translate(0, 10px); } 
        100%   { transform: translate(0, -0px); }     
    }

    @media screen and ( max-width: 1024px) {
        width: 22rem;
        height: 24rem;
    }
    @media screen and ( max-width: 768px) {
        width: 18rem;
        height: 20rem;
    }
`;

export const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.5rem;
    row-gap: 20px;
    padding: 10px;
    font-size: 1.2rem;

    @media screen and ( max-width: 1024px ) {
        grid-template-columns: repeat(2, 1fr);
        font-size: 1rem;
        row-gap: 20px;
    }

    @media screen and ( max-width: 768px ) {
        grid-template-columns: repeat(2, 1fr);
        font-size: 1rem;
        row-gap: 20px;
    }

    @media screen and ( max-width: 480px ) {
        grid-template-columns: repeat(2, 1fr);
        font-size: 1rem;
        row-gap: 20px;
    }
`;

export const BtnWrap = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none !important;

    @media screen and ( max-width: 480px ) {
        margin-top: 3rem;
    }
`;