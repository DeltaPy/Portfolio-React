import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {
    ZeroRobotics,
    EnricoFermi,
    LazioInnova,
    CyberChallenge,
    GitHub,
    HackathonPlus
} from '../../images/index.js'
import {
    ProjectsContainer, 
    ProjectsH1, 
    ProjectsWrapper, 
    ProjectsCard, 
    ProjectsIcon, 
    ProjectsH2, 
    ProjectsP
} from './ProjectsElements';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Button } from 'react-scroll';

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true});
    }, []);

    return (
        <>
            <ProjectsContainer  id="projects">
                <ProjectsH1>Projects</ProjectsH1>
                    <ProjectsWrapper data-aos="fade-up">
                <Carousel>
                    <ProjectsCard href={"http://zerorobotics.mit.edu"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>ZeroRobotics</ProjectsH2>
                        <ProjectsIcon src={ZeroRobotics}/>
                        <ProjectsP>
                            MIT-NASA Programming Challenge.
                        </ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard href={"http://www.lazioinnova.it/startupper-school-academy/startupper-banchi-scuola/"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>Lazio Innova</ProjectsH2>
                        <ProjectsIcon src={LazioInnova}/>
                        <ProjectsP>
                            Startup competition about reducing CO₂ emissions.
                        </ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard href={"https://cyberchallenge.it/"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>Cyber Challenge</ProjectsH2>
                        <ProjectsIcon src={CyberChallenge}/>
                        <ProjectsP>
                            The first Italian training program in cybersecurity for high-school and undergraduate students.
                        </ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard href={"https://www.itisfermi.edu.it/Orario/19_30%20ott_web/index.html"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>Orario ITIS E. Fermi</ProjectsH2>
                        <ProjectsIcon src={EnricoFermi}/>
                        <ProjectsP>
                            A website for my high-school's timetable.
                        </ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard href={"https://tree.it/hackathon-pulsee-mdw/"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>Pulsee Hack for Goal #12</ProjectsH2>
                        <ProjectsIcon src={HackathonPlus}/>
                        <ProjectsP>
                            Hackathon about sustainable consumption and production patters where my team classified second.
                        </ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard href={"https://github.com/DeltaPy"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>GitHub Stuff</ProjectsH2>
                        <ProjectsIcon src={GitHub}/>
                        <ProjectsP>
                            My GitHub page where i have other side projects.
                        </ProjectsP>
                    </ProjectsCard>
                    </Carousel>
                    </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects;