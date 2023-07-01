"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { EduCard, EduCardProps } from "./EduCard";

export const Education = () => {
  const edu: EduCardProps[] = [
    {
      name: "Tecnológico de Monterrey, Campus Guadalajara",
      date: "2021 - 2025",
      gpa: "GPA: 4.0/4.0",
      title: "B.S. in Computer Science and Technology",
    },
    {
      name: "Tecmilenio Campus Zapopan",
      date: "2018 - 2022",
      gpa: "GPA: 4.0/4.0",
      title: "High School Diploma",
    },
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Education</h1>
            <p>Currently studying my 5th semester in the university</p>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          {edu.map((school, index) => {
            return <EduCard key={index} {...school} />;
          })}
        </Row>
      </Container>
    </section>
  );
};
