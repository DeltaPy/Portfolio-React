import React from 'react';
import MyCarousel from './MyCarousel';
import {
    ProjectsContainer, 
    ProjectsH1, 
    ProjectsWrapper, 
    ProjectsCard, 
    ProjectsIcon, 
    ProjectsH2, 
    ProjectsP
} from './ProjectsElements';

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>Projects</ProjectsH1>
                    <MyCarousel/>
            </ProjectsContainer>
        </>
    )
}

export default Projects;