import React, { useState, useEffect } from 'react';
import { Button } from '../ButtonElements';
import ThreeBackground from '../Shared/Three/ThreeBackground';
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
    const [age, setAge] = useState(0);

    const onHover = () => {
        setHover(!hover);
    };

    useEffect(() => {
        Aos.init({ duration: 2000, once: true });
    }, []);

    useEffect(() => {
        setInterval(() => {
            let time = (new Date() - new Date(992642400000)) / (1000 * 60 * 60 * 24 * 365.25);
            setAge(time.toString().substring(0, 12));
        }, 100);
    })

    return (
        <HeroContainer id="home">
            <HeroBg>
                <ThreeBackground />
            </HeroBg>
            <HeroContent data-aos="fade-up">
                <HeroH1>Hello, I'm <span style={{ color: "#FF4532" }}>Denis Dimchev</span></HeroH1>
                <HeroP>
                    A {age} year-old software developer.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='about'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        $primary
                        $dark={false}
                        $big={true}
                        $fontBig={true}
                        smooth={true} duration={800} spy={true} exact='true' offset={-80}
                    >Find out more<ArrowForward hovered={hover ? 0 : 1} />
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
