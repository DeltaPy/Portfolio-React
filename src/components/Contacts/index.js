import React, { useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import {
    SocialLogoWrapper,
    ContactsContainer,
    ContactsWrapper,
    SocialLogo,
    ContactsH1,
    ContactsH2
} from './ContactsElements';
import Aos from 'aos';
import "aos/dist/aos.css";

const Contacts = () => {
    useEffect(() => {
        Aos.init({ duration: 1500, once: true});
    }, []);

    return (
        <>
            <ContactsContainer id="contact"> 
                <ContactsWrapper data-aos="fade-up">
                    <ContactsH1>Contact Me</ContactsH1>
                    <ContactsH2>Write me an email to: <span>denis.dimchev@gmail.com</span> or contact me on LinkedIn:</ContactsH2>
                    <SocialLogoWrapper>
                        <SocialLogo>
                            <a  href={"https://www.linkedin.com/in/dev-denis/"} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin/>
                            </a>
                        </SocialLogo>
                    </SocialLogoWrapper>
                </ContactsWrapper>
            </ContactsContainer>
        </>
    )
}

export default Contacts
