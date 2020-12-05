import React from 'react';
import zr from "../../images/zr.png"
import li from "../../images/li.png"
import cc from "../../images/cc.png"
import gh from "../../images/gh.png"
import hp from "../../images/hp.png"
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
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsH2>ZeroRobotics</ProjectsH2>
                        <a href={"http://zerorobotics.mit.edu"} target="_blank"><ProjectsIcon src={zr}/></a>
                        <ProjectsP>MIT-NASA Programming Challenge.</ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard>
                        <ProjectsH2>Lazio Innova</ProjectsH2>
                        <a href={"http://www.lazioinnova.it/startupper-school-academy/startupper-banchi-scuola/"} target="_blank"><ProjectsIcon src={li}/></a>
                        <ProjectsP>Regione Lazio.</ProjectsP>
                    </ProjectsCard>
                        
                    <ProjectsCard>
                        <ProjectsH2>Cyber Challenge</ProjectsH2>
                        <a href={"https://cyberchallenge.it/"} target="_blank"><ProjectsIcon src={cc}/></a>
                        <ProjectsP>The first Italian training program in cybersecurity for high-school and undergraduate students.</ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard>
                        <ProjectsH2>Pulsee Hack for Goal #12</ProjectsH2>
                        <a href={"https://tree.it/hackathon-pulsee-mdw/"} target="_blank"><ProjectsIcon src={hp}/></a>
                        <ProjectsP>
                            Hackathon about sustainable consumption and production patters where my team classified second.
                        </ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>GitHub Stuff</ProjectsH2>
                        <a href={"https://github.com/BassDrop07"} target="_blank"><ProjectsIcon src={gh}/></a>
                        <ProjectsP>My GitHub page where i have other side projects.</ProjectsP>
                    </ProjectsCard>

                </ProjectsWrapper>
                
                    
            </ProjectsContainer>
        </>
    )
}

export default Projects;