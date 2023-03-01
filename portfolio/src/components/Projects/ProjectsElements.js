import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    // padding-top: 10%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #171717;

    @media screen and (max-width: 1024px) {
        height: 100%;
    }

`;

export const ProjectsWrapper = styled.div`
    // height: 80%;
    width: 70%;
    align-items: center;
    // flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
`;

export const ProjectsCard = styled.a`
    background: #fff;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 55%; 
    max-width: 30%;
    min-width: 30%;
    min-height: 55%;
    padding: 30px;
    margin: 10px;
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        max-height: 60%; 
        max-width: 100%;
        min-width: 100%;
        min-height: 60%;
    }

    @media screen and (max-width: 768px) {
        max-height: 60%; 
        max-width: 100%;
        min-width: 100%;
        min-height: 60%;
    }

    
`;

export const ProjectsIcon = styled.img`
    height: 120px;
    width: 120px;
`;

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #FF4532;
    margin-bottom: 64px;

    @media screen and (max-width: 1024px) {
        margin-top: 10%;
        font-size: 3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin-top: 0%;
    }
`;

export const ProjectsH2 = styled.h2`
    font-size: 1.5rem;
    text-align: center;
`;

export const ProjectsP = styled.p`
    font-size: 1.2rem;
    text-align: center;
`;