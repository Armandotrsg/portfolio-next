"use client";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp2.webp";
import { useRouter } from "next/router";
import Image from "next/image";

interface AboutMeProps {
  image: string;
  text: string;
}

export const AboutMe = ({ image, text }: AboutMeProps) => {
  const router = useRouter();
  return (
    <>
      <header className="about">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>About me</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="about">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Image
                src={image}
                alt="Armando Terrazas"
                className="img-fluid mb-5 aboutImg"
                width={500}
                height={500}
              />
            </Col>
            <Col xs={12} md={6}>
              <p>{text}</p>
              <button
                role="link"
                className="vvd"
                onClick={() => router.push("/connect")}
              >
                Let&apos;s connect <ArrowRightCircle size={25} />{" "}
              </button>
            </Col>
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
    </>
  );
};
