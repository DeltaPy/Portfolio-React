import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    // padding-top: 10%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #171717;

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`;

export const ProjectsWrapper = styled.div`
    height: 80%;
    width: 70%;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;

`;

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 40%; 
    max-width: 30%;
    min-width: 30%;
    min-height: 40%;
    padding: 30px;
    margin: 10px;
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        max-height: 60%; 
        max-width: 100%;
        min-width: 100%;
        min-height: 60%;
    }
`;

export const ProjectsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #FF4532;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;