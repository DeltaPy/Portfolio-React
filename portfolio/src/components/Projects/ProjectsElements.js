import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #171717;

    // @media screen and (max-width: 768px) {
    //     height: 1100px;
    // }

    // @media screen and (max-width: 480px) {
    //     height: 1300px;
    // }
`;

export const ProjectsWrapper = styled.div`
    height: 30vh;
    align-items: center;
    display: flex;
    justify-content: center;

`;

export const ProjectsCard = styled.div`
    background: #fff;
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px; 
    padding: 30px;
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
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