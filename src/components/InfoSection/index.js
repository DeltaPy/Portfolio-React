import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import ProgressBar from './ProgressBar/ProgressBar';
import { Button } from '../ButtonElements';

import {
    Img,
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
} from './InfoElements';

const skills = [
    { text: "React", completed: 100 },
    { text: "React Native", completed: 100 },
    { text: "Angular", completed: 100 },
    { text: "ASP.NET", completed: 100 },
    { text: "Cordova", completed: 100 },
    { text: "Python", completed: 100 },
    { text: "Nginx", completed: 100 },
    { text: "JS/TS", completed: 100 },
    { text: "C++/C#", completed: 100 },
    { text: "SQL", completed: 100 },
    { text: "MongoDB", completed: 100 },
    { text: "Other...", completed: 100 },
];

const InfoSection = ({
    id,
    topLine,
    headline,
    description,
    myImg,
}) => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true });
    }, []);

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow $imgStart={true}>
                        <Column1 data-aos="fade-left">
                            <TextWrapper>
                                <TopLine>Skills</TopLine>
                            </TextWrapper>
                            <SkillGrid>
                                {skills.map((item, idx) => (
                                    <ProgressBar key={idx} text={item.text} completed={item.completed} />
                                ))}
                            </SkillGrid>
                        </Column1>
                        <Column2 data-aos="fade-right">
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                            </TextWrapper>
                            <ImgWrap >
                                <Img src={myImg} /> 
                            </ImgWrap>
                            <TextWrapper>
                                <Heading $lightText={true}>{headline}</Heading>
                                <Subtitle>{description}</Subtitle>
                            </TextWrapper>
                            <BtnWrap data-aos="fade-up">
                                <Button
                                    href={"https://resume.io/r/rVEbCiaNs"} target="_blank" rel="noopener noreferrer"
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHover}
                                    $primary="false"
                                    $big="false"
                                    $fontBig="false"
                                >
                                    Curriculum Vitae
                                </Button>
                            </BtnWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
export default InfoSection
