import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import ProgressBar from './ProgressBar/ProgressBar';

import {
    Img,
    Button,
    InfoRow,
    Column1,
    Column2,
    ImgWrap,
    TopLine,
    Heading,
    BtnWrap,
    Subtitle,
    SkillGrid,
    InfoWrapper,
    TextWrapper,
    InfoContainer,
    }  from './InfoElements';

    const prBarData = [
        {text: "JavaScript", completed: 100 },
        {text: "TypeScript", completed: 100 },
        {text: "CSS", completed: 100 },
        {text: "React/Native", completed: 100 },
        {text: "MySQL", completed: 100 },
        {text: "MongoDB", completed: 100 },
        {text: "Nginx", completed: 100 },
        {text: "C++", completed: 100 },
        {text: "Java", completed: 100 },
        {text: "Python", completed: 100},
        {text: "Blender", completed: 100},
        {text: "Other...", completed: 100},
    ];

    // const prBarData = [
    //     {text: "HTML", completed: 90 },
    //     {text: "CSS", completed: 90 },
    //     {text: "JS", completed: 65 },
    //     {text: "React", completed: 70 },
    //     {text: "MySQL", completed: 70 },
    //     {text: "MongoDB", completed: 60 },
    //     {text: "Nginx", completed: 65 },
    //     {text: "C++", completed: 70 },
    //     {text: "Java", completed: 70 },
    //     {text: "Python", completed: 70 },
    // ];

const InfoSection = ({
        lightBg,
        id,
        imgStart,
        topLine,
        lightText,
        headline,
        darkText,
        description,
        img,
        alt,
}) => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true});
    }, []);

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <>
            <InfoContainer  lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1 data-aos="fade-right">
                        <TextWrapper>
                            <TopLine>Skills</TopLine>
                        </TextWrapper>
                            <SkillGrid>
                                {prBarData.map((item, idx) => (
                                    <ProgressBar key={idx} text={item.text} completed={item.completed}/>
                                ))}
                            </SkillGrid>
                        </Column1>
                        <Column2 data-aos="fade-right">
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                        </TextWrapper>
                            <ImgWrap >
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                    <BtnWrap data-aos="fade-up">
                    <a  href={"https://resume.io/r/rVEbCiaNs"} target="_blank" rel="noopener noreferrer">
                        <Button 
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="false"
                            big="false"
                        >Curriculum
                        </Button>
                    </a>
                    </BtnWrap>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
export default InfoSection