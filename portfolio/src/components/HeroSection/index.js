import React, { useState, useEffect } from 'react';
import {Button} from '../ButtonElements';
import Aos from 'aos';
import "aos/dist/aos.css";

import {
    HeroContainer, 
    HeroBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    useEffect(() => {
        Aos.init({ duration: 2000, once: true});
    }, []);

    return (
        <HeroContainer  id="home">
            {/* <HeroBg> */}
                {/* <Background invalidateFrameloop/> */}
            {/* </HeroBg> */}
            <HeroContent data-aos="fade-up">
                <HeroH1>Hello, I'm <span style={{color: "#FF4532"}}>Denis Dimchev.</span></HeroH1>
                <HeroP>
                    I'm a Full Stack Developer.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='about' 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="false"
                        dark='false'
                        big='false'
                        fontBig='true'
                        smooth = {true} duration={800} spy={true} exact='true' offset={-80}
                    >Find out more<ArrowForward hovered={hover ? 0 : 1}/>
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;