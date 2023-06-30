"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import colorSharp from "../assets/img/color-sharp.webp"
import Image from "next/image";

export interface SkillCardProps {
    img: string;
    name: string;
}

export const Skills = ({skills}: {skills: SkillCardProps[]}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const SkillsCard = ({img, name}: SkillCardProps) => {
        return(
            <div className="item">
                <Image src={img} alt={name} width={300} height={300} />
                <h5>{name}</h5>
            </div>
        )
    }

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1>Skills</h1>
                            <p>I have worked with all of these technologies and frameworks <br />and I keep learning outside the university taking different courses that teach me new technologies</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {skills.map((item, index) => {
                                    return(
                                        <SkillsCard key={index} {...item} />
                                    )
                                })}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Image className="background-image-left" src={colorSharp} alt="background" width={300} height={300} placeholder="blur" />
        </section>
    );
}