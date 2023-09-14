"use client";
import Col from "react-bootstrap/Col";
import { ProjectProps } from "@/app/api/projects/[projects]/route";
import Image from "next/image";
import handleDate from "@/utils/HandleDates";

export const ProjectCard = ({ name, description, image, url, dates }: ProjectProps) => {
    
    if (url) {
        return (
            <Col sm={6} md={4}>
                <div className="proj-imgbx">
                    <Image src={image} alt={name} className="projectCard-Img" width={519} height={380} />
                    <a href={url} target="_blank" rel="noreferrer">
                        <div className="proj-txtx">
                            <strong>{name}</strong>
                            <span>{description}<br />{handleDate(dates.start, dates.end)}</span>
                        </div>
                    </a>
                </div>
            </Col>
        );
    } else {
        return (
            <Col sm={6} md={4}>
                <div className="proj-imgbx">
                    <Image src={image} alt={name} className="projectCard-Img" width={519} height={380} />
                    <div className="proj-txtx">
                        <strong>{name}</strong>
                        <span>{description}<br />{handleDate(dates.start, dates.end)}</span>
                    </div>
                </div>
            </Col>
        );
    }
};
