"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import handleDate from "@/utils/HandleDates";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceProps } from "@/app/api/experience/route";

export const Experience = ({experience} : {experience: ExperienceProps[]}) => {

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
                    date={handleDate(exp.dates.start, exp.dates.end)}
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
                      {exp.company}
                    </h2>
                    <h3
                      style={{
                        fontSize: "1rem",
                      }}
                      className="vertical-timeline-element-subtitle"
                    >
                      {exp.position}
                    </h3>
                    <p>{exp.brief}</p>
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
