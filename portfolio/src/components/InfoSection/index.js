import React from 'react'
import ProgressBar from './ProgressBar/ProgressBar';

import {
    Img,
    InfoRow,
    Column1,
    Column2,
    ImgWrap,
    TopLine,
    Heading,
    Subtitle,
    SkillGrid,
    InfoWrapper,
    TextWrapper,
    InfoContainer,
    }  from './InfoElements';

    const prBarData = [
        {text: "HTML", completed: 100 },
        {text: "CSS", completed: 100 },
        {text: "JS", completed: 100 },
        {text: "MongoDB", completed: 100 },
        {text: "React", completed: 100 },
        {text: "Nginx", completed: 100 },
    ];

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
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>Skills</TopLine>
                        </TextWrapper>
                            <SkillGrid>
                                {prBarData.map((item, idx) => (
                                    <ProgressBar key={idx} text={item.text} completed={item.completed}/>
                                ))}
                            </SkillGrid>
                        </Column1>
                        <Column2>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                        </TextWrapper>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
export default InfoSection