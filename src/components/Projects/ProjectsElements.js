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
    width: 85%;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
`;

export const ProjectCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px 0 50px 0;
`;

export const ProjectCard = styled.a`
    background: #fff;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px; 
    width: 350px;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        max-height: 60%; 
        max-width: 100%;
    }

    @media screen and (max-width: 768px) {
        max-height: 50%; 
        max-width: 100%;
        width: 80%;
        margin: 10px 0 10px 0;
    }
`;


export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    color: #FF4532;
    margin-bottom: 64px;

    @media screen and (max-width: 1024px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const ProjectH2 = styled.h2`
    font-size: 1.5rem;
    text-align: center;
`;

export const ProjectP = styled.p`
    font-size: 1.2rem;
    text-align: center;
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;