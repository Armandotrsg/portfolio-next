"use client";
import { Row, Col, Tab, Container, Nav } from "react-bootstrap";
import { ProjectProps } from "@/app/api/projects/[projects]/route";
import { useState } from "react";
import Image from "next/image";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  ProjectsInfo: ProjectProps[];
  Awards: ProjectProps[];
  Volunteerings: ProjectProps[];
}

export const Projects = ({ProjectsInfo, Awards, Volunteerings}: ProjectsProps) => {
  const [title, setTitle] = useState("Projects");
  const [description, setDescription] = useState(
    "These are a few of the projects I have worked on. I have worked on a variety of projects, from web development to different simulations projects. I have also worked on projects that involve machine learning and data science."
  );

  const handleTabChange = (key: any) => {
    if (key === "projects") {
      setTitle("Projects");
      setDescription(
        "These are a few of the projects I have worked on. I have worked on a variety of projects, from web development to different simulations projects. I have also worked on projects that involve machine learning and data science."
      );
    } else if (key === "awards") {
      setTitle("Awards & Participations");
      setDescription(
        "I'm so proud of the different awards I have received. I have received awards for my academic achievements, as well as some of my personal projects."
      );
    } else if (key === "helping") {
      setTitle("Helping");
      setDescription(
        "I have been involved in a variety of volunteering projects. I have volunteered mainly helping the environment and helping the community."
      );
    }
  };

  const navLinks = [
    {
      id: "projects",
      text: "Projects",
      projects: ProjectsInfo,
    },
    {
      id: "awards",
      text: "Awards",
      projects: Awards,
    },
    {
      id: "helping",
      text: "Helping",
      projects: Volunteerings,
    },
  ];

  const renderProjects = (projects: ProjectProps[]) => {
    return (
      <Row>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Row>
    );
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h1>{title}</h1>
            <p>{description}</p>
            <Tab.Container
              id="projects-tabs"
              defaultActiveKey="projects"
              onSelect={handleTabChange}
            >
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                {navLinks.map((link) => (
                  <Nav.Item key={link.id}>
                    <Nav.Link eventKey={link.id} className="light-shadow">
                      {link.text}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content id="slideInUp">
                {navLinks.map((link) => (
                  <Tab.Pane eventKey={link.id} key={link.id}>
                    {renderProjects(link.projects)}
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <Image
        src={colorSharp2}
        alt="background"
        className="background-image-right"
        width={500}
        height={500}
      />
    </section>
  );
};
