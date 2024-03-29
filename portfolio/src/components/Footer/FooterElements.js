import styled from'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #171717;

    // @media screen and (max-width: 768px) {
    //     padding-top: 100vh;
    // }

`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;

`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 20px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    @media screen and ( max-width: 1024px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;

    @media screen and ( max-width: 1024px) {
        font-size: 2rem;
        
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

    @media screen and ( max-width: 480px ) {
        font-size: 0.6rem;
    }
`;