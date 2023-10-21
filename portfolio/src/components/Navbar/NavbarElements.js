import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background-color: ${({ $scrollNav }) => ($scrollNav ? '#000' : '#171717')};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    // position: ${({ $scrollNav }) => ($scrollNav ? 'sticky' : 'static')};
    top: 0;
    // z-index: ${({ $scrollNav }) => ($scrollNav ? '3 !important' : '2 !important')};
    position: sticky;
    z-index: 2 !important;
    transition: 0.3s all ease;

    @media screen and ( max-width: 1024px ) {
        position: sticky;
    }

    @media screen and (max-width: 768px) {
        position: sticky;
    }
`;


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and ( max-width: 1024px ) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
    
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1024px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 2.5rem;
        cursor: pointer;
        color: #fff;
    }
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and ( max-width: 1024px ) {
        display: none;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 8;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    color: #fff;

    &.active {
        border-bottom: 2px solid #FF4532;
    }
`;


export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #FF4532;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;