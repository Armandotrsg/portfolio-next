"use client";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

export default function NotFound() {
    return (
        <section>
            <Container>
                <Row >
                    <Col md={3} />
                    <Col className='text-center'>
                        <div className='d-block'>
                            <Image loading='eager' width={500} height={500} src={"https://firebasestorage.googleapis.com/v0/b/portfolio-f6166.appspot.com/o/other%2Ferror404.webp?alt=media&token=ee99cae6-5ffc-4e39-b6a0-c99b27b445ef"} className="errorImg" alt='404 screen' />
                        </div>
                    </Col>
                    <Col md={3} />
                </Row>
            </Container>
        </section>
    );
}