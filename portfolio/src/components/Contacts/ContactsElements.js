import styled from "styled-components";


export const ContactsContainer = styled.div`
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

export const ContactsWrapper = styled.div`
    // width: 80%;
    align-items: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    color: white
`;

export const SocialLogoWrapper = styled.div`
    width: 100%;
    display flex;
    flex-direction: row;
    justify-content: center;
`

export const SocialLogo = styled.h1`
    margin: 5%;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 4rem;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const ContactsH1 = styled.h1`
    font-size: 2.5rem;
    color: #FF4532;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {
        margin-top: 10%;
        font-size: 2rem;
    }
`;

export const ContactsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
`;