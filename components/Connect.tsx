"use client";
import { Col, Container, Row } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp2.png";
import { Card } from "react-bootstrap";
import { Contact } from "./Contact";
import Image from "next/image";

export interface ProfileProps {
  name: string;
  user: string;
  img: string;
  link: string;
}

export const Connect = ({ profiles }: { profiles: ProfileProps[] }) => {
  const ProfileCard = ({ name, user, img, link }: ProfileProps) => {
    return (
      <Col md={6}>
        <a href={link} target="_blank" rel="noreferrer" className="cardLink">
          <Card className="profileCard">
            <Card.Body className="cardBody">
              <div>
                <Card.Img
                  as={Image}
                  variant="top"
                  src={img}
                  width={70}
                    height={100}
                  className={name === "LinkedIn" ? "linkedinImg" : "profileImg"}
                />
                <Card.Title className="gradient-text my-3">
                  <h5>{name}</h5>
                </Card.Title>
                <Card.Text>
                  <strong>{user}</strong>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </a>
      </Col>
    );
  };

  return (
    <>
      <header className="connect">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Connect with me!</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="connect">
        <Container>
          <Row>
            {profiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </Row>
          <Image
            src={colorSharp}
            alt="color sharp"
            className="background-image-right"
            width={500}
            height={500}
            placeholder="blur"
          />
        </Container>
      </section>
      <Contact />
    </>
  );
};
