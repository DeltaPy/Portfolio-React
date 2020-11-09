import React from 'react'
import ProgressRing from './ProgressRing/ProgressRing.js';
import {
    InfoContainer,
     InfoWrapper,
      InfoRow,
       Column1,
        Column2,
         TextWrapper,
          TopLine,
           Heading,
            Subtitle,
            ImgWrap,
            Img,
            SpinnerRow1,
            SpinnerRow2,
            SpinnerWrap,
            }  from './InfoElements';




const InfoSection = ({
        lightBg,
        id,
        imgStart,
        topLine,
        lightText,
        headline,
        darkText,
        description,
        buttonLabel,
        img,
        alt,
        primary,
        dark,
        dark2
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
            
                            <SpinnerRow1>
                                <SpinnerWrap>
                                    <ProgressRing text={"HTML"} percentage={69}/>
                                </SpinnerWrap>
                                <SpinnerWrap>
                                    <ProgressRing text={"CSS"} percentage={69}/>
                                </SpinnerWrap>
                                <SpinnerWrap>
                                    <ProgressRing/>
                                </SpinnerWrap>
                            </SpinnerRow1>

                            <SpinnerRow2>
                                <SpinnerWrap>
                                    <ProgressRing/>
                                </SpinnerWrap>
                                <SpinnerWrap>
                                    <ProgressRing/>
                                </SpinnerWrap>
                                <SpinnerWrap>
                                    <ProgressRing/>
                                </SpinnerWrap>
                            </SpinnerRow2>
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
