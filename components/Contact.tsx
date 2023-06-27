"use client";
import { useState, useRef, FormEvent } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';
import Image from "next/image";

interface Status {
    success?: boolean;
    message?: string;
}

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    required?: boolean;
}

const inputs: InputProps[] = [
    { type: "text", name: "user_firstName", placeholder: "First Name", required: true },
    { type: "text", name: "user_lastName", placeholder: "Last Name", required: true },
    { type: "email", name: "user_email", placeholder: "Email Address", required: true },
    { type: "text", name: "user_phone", placeholder: "Phone Number" },
];

export const Contact = () => {

    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState<Status>({});

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText("Sending...");
        emailjs.sendForm('service_gzzni7v', 'template_vkjqgbv', e.currentTarget, 'o_8wIJYlY5NWPHqmf')
        .then((result) => {
            console.log(result.text);
            setStatus({success: true, message: "Message sent successfully!"});
        }, (error) => {
            console.log(error.text);
            setStatus({success: false, message: "Message failed to send!"});
        });
        setTimeout(() => {
            setButtonText("Send");
            setStatus({});
        }, 5000);
    };

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <Image src={contactImg} alt="Contact Us" width={500} />
                    </Col>
                    <Col md={6}>
                        <h1>Get in touch</h1>
                        <Form ref={form} onSubmit={sendEmail}>
                            <Row>
                                {inputs.map((input) => (
                                    <Col sm={6} className="px-1" key={input.name}>
                                        <input type={input.type} name={input.name} placeholder={`${input.placeholder}${input.required ? "*" : ""}`} required={input.required} />
                                    </Col>
                                ))}
                                <Col>
                                    <textarea name="message" rows={6} placeholder="Message*" required />
                                    <button type="submit"><span>{buttonText}</span></button>
                                    {
                                        status.message &&
                                        <p className={status.success === false ? "danger pt-3" : "success pt-3"}>{status.message}</p>
                                    }
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}