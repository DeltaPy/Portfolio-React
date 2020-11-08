import React from 'react'
import { Button } from '../ButtonElements';
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
             BtnWrap,
             ImgWrap,
             Img
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
                            
                        </Column1>
                        <Column2>
                        <TopLine>{topLine}</TopLine>
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
