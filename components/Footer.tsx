"use client";
import { Col, Container, Row } from "react-bootstrap";
import { SocialNav } from "./SocialNav";
import Link from "next/link";
import { Logo } from "./Logo";

export const Footer = () => {
    return(
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
    );
}