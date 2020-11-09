import React, {useState} from 'react';
import {Button} from '../ButtonElements';
import {HeroContainer, HeroBg, HeroContent, 
    HeroH1, HeroP, HeroBtnWrapper, 
    ArrowForward} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };


    return (
        <HeroContainer id="home">
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello, I'm <span style={{color: "#FF4532"}}>Denis Dimchev.</span></HeroH1>
                <HeroP>
                    I'm a software developer.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='about' 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="false"
                        dark='false'
                        big='false'
                        smooth = {true} duration={800} spy={true} exact='true' offset={-80}
                     > Find out more <ArrowForward hovered={hover ? 0 : 1}/>
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
