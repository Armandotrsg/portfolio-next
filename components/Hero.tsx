"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { redirect } from "next/navigation";
import Image from "next/image";
import headerImg from "../assets/img/header-img.svg"

export const Hero = ({ greetingMessage }: { greetingMessage: string }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "5th semester student",
    "software engineer",
    "web developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(
    225 - Math.random() * 100
  ); /* To know how fast each letter will come after another */
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      //setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      //setIndex(1);
      setDelta(225 - Math.random() * 100);
    } else {
      //setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <header className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={8}>
            <span className="tagline">Hi There!</span>
            <div className="fixed-height">
              <h1>
                I'm Armando a{" "}
                <span className="txt-rotate">
                  <span className={isDeleting ? "writing" : "wrap"}>
                    {text}
                  </span>
                </span>
              </h1>
            </div>
            <p>{greetingMessage}</p>
            <button
              role="link"
              className="vvd"
              onClick={() => redirect("/connect")}
            >
              Let's connect <ArrowRightCircle size={25} />{" "}
            </button>
          </Col>
          <Col xs={12} md={5} xl={4}>
            <Image
              src={headerImg}
              width={500}
              height={500}
              alt="banner"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};
