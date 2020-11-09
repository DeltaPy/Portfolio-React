import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#171717')};

    @media screen and (max-width: 768) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and ( max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;    
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 10px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #FF4532;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
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
    max-width: 440px;
    margin-bottom: 35px;
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
    width: 20rem;
    height: 22rem;
    display: flex;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    user-select: none;
    border-radius: 50%;
    
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

export const SpinnerWrap = styled.div`
    height: 20%;
    width: 20%;
    margin-right: 10%;
`;

export const SpinnerRow1 = styled.div`
    padding: 0 15px;
    grid-area: row1;
    display: flex;
    margin-bottom: 1rem;
    
`;
export const SpinnerRow2 = styled.div`
    padding: 0 15px;
    grid-area: row2;
    display: flex;
    margin-bottom: 100%;
`;


