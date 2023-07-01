"use client";
import Col from "react-bootstrap/Col";
import { ProjectProps } from "@/app/api/projects/[projects]/route";
import Image from "next/image";

export const ProjectCard = ({ name, description, image, url, dates }: ProjectProps) => {
    const handleDate = (start: string, end?: string): string => {
        if (end === "undefined") {
            return `${start} - Present`;
        } else if (start === end) {
            return `${start}`;
        } else {
            return `${start} - ${end}`;
        }
    }
    if (url) {
        return (
            <Col sm={6} md={4}>
                <div className="proj-imgbx">
                    <Image src={image} alt={name} className="projectCard-Img" width={519} height={380} />
                    <a href={url} target="_blank" rel="noreferrer">
                        <div className="proj-txtx">
                            <h5>{name}</h5>
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
                        <h4>{name}</h4>
                        <span>{description}<br />{handleDate(dates.start, dates.end)}</span>
                    </div>
                </div>
            </Col>
        );
    }
};
