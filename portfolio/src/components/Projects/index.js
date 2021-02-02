import React, { useEffect } from 'react';
import zr from "../../images/zr.png"
import li from "../../images/li.png"
import cc from "../../images/cc.png"
import gh from "../../images/gh.png"
import hp from "../../images/hp.png"
import ef from "../../images/ef.png"
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

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true});
    }, []);

    return (
        <>
            <ProjectsContainer  id="projects">
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsWrapper data-aos="fade-up">

                    <ProjectsCard href={"http://zerorobotics.mit.edu"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>ZeroRobotics</ProjectsH2>
                        <ProjectsIcon src={zr}/>
                        <ProjectsP>MIT-NASA Programming Challenge.</ProjectsP>
                    </ProjectsCard>
        
                    <ProjectsCard href={"http://www.lazioinnova.it/startupper-school-academy/startupper-banchi-scuola/"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>Lazio Innova</ProjectsH2>
                        <ProjectsIcon src={li}/>
                        <ProjectsP>Startup competition about reducing CO₂ emissions.</ProjectsP>
                    </ProjectsCard>
                        
                    <ProjectsCard href={"https://cyberchallenge.it/"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>Cyber Challenge</ProjectsH2>
                        <ProjectsIcon src={cc}/>
                        <ProjectsP>The first Italian training program in cybersecurity for high-school and undergraduate students.</ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard href={"https://www.itisfermi.edu.it/Orario/19_30%20ott_web/index.html"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>Orario ITIS E. Fermi</ProjectsH2>
                        <ProjectsIcon src={ef}/>
                        <ProjectsP>
                            A website for my high-school's timetable.
                        </ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard href={"https://tree.it/hackathon-pulsee-mdw/"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>Pulsee Hack for Goal #12</ProjectsH2>
                        <ProjectsIcon src={hp}/>
                        <ProjectsP>
                            Hackathon about sustainable consumption and production patters where my team classified second.
                        </ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard href={"https://github.com/DeltaPy"} target="_blank" rel="noopener noreferrer">
                        <ProjectsH2>GitHub Stuff</ProjectsH2>
                        <ProjectsIcon src={gh}/>
                        <ProjectsP>My GitHub page where i have other side projects.</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects;