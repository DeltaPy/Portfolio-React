import styled from 'styled-components';
import {Link} from 'react-scroll';


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#FF4532' : '#171717')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '24px 38px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#171717' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '24px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media screen and (max-width: 1024px) {
        font-size: 38px;
        padding: ${({big}) => (big ? '28px 58px' : '12px 30px')};
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        padding: ${({big}) => (big ? '28px 58px' : '12px 30px')};
    }

    @media screen and (max-width: 480px) {
        font-size: 19px;
        padding: ${({big}) => (big ? '18px 42px' : '12px 30px')};
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
    }
`;

export const Button2 = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#FF4532' : '#171717')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '24px 38px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#171717' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '24px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media screen and (max-width: 1024px) {
        font-size: 38px;
        padding: ${({big}) => (big ? '28px 58px' : '12px 30px')};
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        padding: ${({big}) => (big ? '28px 58px' : '12px 30px')};
    }

    @media screen and (max-width: 480px) {
        font-size: 19px;
        padding: ${({big}) => (big ? '18px 42px' : '12px 30px')};
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
    }
`;