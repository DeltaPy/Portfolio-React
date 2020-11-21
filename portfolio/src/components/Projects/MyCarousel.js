import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
    ProjectsWrapper,
    ProjectsCard, 
    ProjectsIcon, 
    ProjectsH2, 
    ProjectsP
} from './ProjectsElements';
 
const MyCarousel = () => {
        return (
            <Carousel>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsH2>Hello</ProjectsH2>
                    </ProjectsCard>
                </ProjectsWrapper>
                {/* //////////////////// */}
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsH2>Hello</ProjectsH2>
                        <ProjectsP>Testing the lorem ipsum</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
                {/* //////////////////// */}
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsH2>Hello</ProjectsH2>
                    </ProjectsCard>
                </ProjectsWrapper>
                
                
            </Carousel>
        );
    }
 
export default MyCarousel;