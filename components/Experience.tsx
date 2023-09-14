"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
  const experience = [
    {
      title: "Software Engineer",
      company: "ABC Company",
      date: "2021 - Present",
      description:
        "Developed and maintained web applications using React and Node.js",
    },
    {
      title: "Intern",
      company: "XYZ Company",
      date: "2020 - 2021",
      description:
        "Assisted in developing mobile applications using React Native",
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      date: "2019 - Present",
      description:
        "Developed custom websites and web applications for clients using React and Node.js",
    },
  ];

  return (
    <>
      <section className="education mt-5 skill">
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Experience</h1>
              <p>These are some of the companies I have worked with</p>
            </Col>
          </Row>
          <Row>
            <VerticalTimeline>
              {experience.map((exp, index) => {
                return (
                  <VerticalTimelineElement
                    key={index}
                    contentStyle={{
                      background: "#151515",
                      color: "#fff",
                      boxShadow: " 0px 0px 30px 1px rgba(47, 128, 237, 0.3)",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  #151515" }}
                    date={exp.date}
                    iconStyle={{
                      background: "#151515",
                      border: "2px solid #000",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "1.8rem",
                      }}
                      className="gradient-text-tec"
                    >
                      {exp.title}
                    </h2>
                    <h3
                      style={{
                        fontSize: "1rem",
                      }}
                      className="vertical-timeline-element-subtitle"
                    >
                      {exp.company}
                    </h3>
                    <p>{exp.description}</p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </Row>
        </Container>
      </section>
    </>
  );
};
