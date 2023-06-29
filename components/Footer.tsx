"use client";
import { Col, Container, Row } from "react-bootstrap";
import { SocialNav } from "./SocialNav";
import Link from "next/link";
import { Logo } from "./Logo";
import Image from "next/image";
import footerbg from "../assets/img/footer-bg.webp";

export const Footer = () => {
  return (
    <div className="position-relative">
      <div className="bg-image z-n1">
        <Image
          placeholder="blur"
          src={footerbg}
          fill
          alt="background footer image"
        />
      </div>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col sm={6}>
              <Link href="/">
                <Logo className="mt-3 imgLogo" />
              </Link>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
              <div className="mt-4">
                <SocialNav />
              </div>
              <p>©Copyrights 2023. All rights reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
