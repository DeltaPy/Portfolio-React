import styled from 'styled-components';
import {Link} from 'react-scroll';


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#FF4532' : '#171717')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#171717' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 1024px) {
        font-size: 38px;
        padding: 24px 48px;
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        padding: 14px 30px;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
    }
`;