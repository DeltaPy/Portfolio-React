import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {
  ZeroRobotics,
  EnricoFermi,
  LazioInnova,
  CyberChallenge,
  GitHub,
  HackathonPlus,
} from "../../images/index.js";
import {
  ProjectsContainer,
  ProjectH1,
  ProjectsWrapper,
  ProjectCardWrapper,
  ProjectCard,
  ProjectH2,
  ProjectP,
  ImageWrapper,
} from "./ProjectsElements";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const imgWidth = "150px";

  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectH1>Projects</ProjectH1>
        <ProjectsWrapper data-aos="fade-up">
          <Carousel showStatus={false} showThumbs={false}>
            <ProjectCardWrapper>
              <ProjectCard
                href={"http://zerorobotics.mit.edu"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectH2>ZeroRobotics</ProjectH2>
                <ImageWrapper>
                  <img src={ZeroRobotics} style={{ width: imgWidth }} />
                </ImageWrapper>
                <ProjectP>MIT-NASA Programming Challenge.</ProjectP>
              </ProjectCard>
              <ProjectCard
                href={
                  "http://www.lazioinnova.it/startupper-school-academy/startupper-banchi-scuola/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectH2>Lazio Innova Startup Academy</ProjectH2>
                <ImageWrapper>
                  <img src={LazioInnova} style={{ width: imgWidth }} />
                </ImageWrapper>
                <ProjectP>
                  Startup competition about reducing CO₂ emissions where my team
                  competed in the finals.
                </ProjectP>
              </ProjectCard>
              <ProjectCard
                href={"https://cyberchallenge.it/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectH2>Cyber Challenge</ProjectH2>
                <ImageWrapper>
                  <img src={CyberChallenge} style={{ width: imgWidth }} />
                </ImageWrapper>
                <ProjectP>
                  The first Italian training program in cybersecurity for
                  high-school and undergraduate students.
                </ProjectP>
              </ProjectCard>
            </ProjectCardWrapper>
            <ProjectCardWrapper>
              <ProjectCard
                href={
                  "https://www.itisfermi.edu.it/Orario/19_30%20ott_web/index.html"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectH2>Orario ITIS E. Fermi</ProjectH2>
                <ImageWrapper>
                  <img src={EnricoFermi} style={{ width: imgWidth }} />
                </ImageWrapper>
                <ProjectP>
                  A website for my high-school&apos;s timetable.
                </ProjectP>
              </ProjectCard>
              <ProjectCard
                href={"https://tree.it/hackathon-pulsee-mdw/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectH2>Pulsee Hack for Goal #12</ProjectH2>
                <ImageWrapper>
                  <img src={HackathonPlus} style={{ width: imgWidth }} />
                </ImageWrapper>
                <ProjectP>
                  Hackathon about sustainable consumption and production patters
                  where my team classified second.
                </ProjectP>
              </ProjectCard>

              <ProjectCard
                href={"https://github.com/DeltaPy"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectH2>GitHub Stuff</ProjectH2>
                <ImageWrapper>
                  <img src={GitHub} style={{ width: imgWidth }} />
                </ImageWrapper>
                <ProjectP>My GitHub page where i have other projects.</ProjectP>
              </ProjectCard>
            </ProjectCardWrapper>
          </Carousel>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
