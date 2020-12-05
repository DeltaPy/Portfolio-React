import React from 'react';
import {FaLinkedin, FaFacebook, FaYoutube, FaInstagram} from 'react-icons/fa';

import {
    SocialLogoWrapper,
    ContactsContainer,
    ContactsWrapper,
    SocialLogo,
    ContactsH1,
    ContactsH2
} from './ContactsElements';

const Contacts = () => {
    return (
        <>
            <ContactsContainer id="contact"> 
                <ContactsWrapper>
                    <ContactsH1>Contact Me</ContactsH1>
                    <ContactsH2>Write me an email to: <span>me@devdenis.com</span> or contact me on my social's</ContactsH2>
                    <SocialLogoWrapper>
                        <SocialLogo>
                            <a  href={"https://www.linkedin.com/in/dev-denis/"} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin/>
                            </a>
                        </SocialLogo>
                        <SocialLogo>
                            <a  href={"https://www.facebook.com/denis.vasilev.963434/"} target="_blank" rel="noopener noreferrer">
                            <FaFacebook/>
                            </a>
                        </SocialLogo>
                        <SocialLogo>
                            <a  href={"https://www.youtube.com/channel/UCu0W98CLUlEE2z2oeZuzjAw"} target="_blank" rel="noopener noreferrer">
                            <FaYoutube/>
                            </a>
                        </SocialLogo>
                        <SocialLogo>
                            <a  href={"https://www.instagram.com/_denis166/"} target="_blank" rel="noopener noreferrer">
                            <FaInstagram/>
                            </a>
                        </SocialLogo>
                    </SocialLogoWrapper>
                </ContactsWrapper>
            </ContactsContainer>
        </>
    )
}

export default Contacts
