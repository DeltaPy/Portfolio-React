import styled from 'styled-components';


export const InfoContainer = styled.div`
    color: #fff;
    height: 100vh;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#171717')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        height: 100%;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    // justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    position: relative;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};
    margin-top: 30px;

    @media screen and ( max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    grid-area: col1;
    max-height: 525px;
    @media screen and ( max-width: 768px) {
        margin-top: 10%;
    }
`;

export const Column2 = styled.div`
    grid-area: col2;
    max-height: 525px;

    @media screen and ( max-width: 768px) {
        margin-top: 10%;
    }
`;

export const TextWrapper = styled.div`
    padding-top: 0;
    text-align: center;
    margin: auto;
`;

export const TopLine = styled.p`
    color: #FF4532;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 60px;

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

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#171717' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
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
`;

export const SkillGrid = styled.div`
    display: grid;
    margin: auto;
    width: 70%;
    
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-column-gap: 1rem;

    @media screen and ( max-width: 768px ) {
        grid-template-rows: repeat(3fr);
        grid-auto-columns: minmax(100px, auto);
    }
`;