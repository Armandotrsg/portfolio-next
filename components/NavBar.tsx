"use client";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SocialNav } from "./SocialNav";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { resume } from "@/utils/Resume";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const Window = typeof window !== "undefined" && window;
    if (Window) {
      setInnerWidth(Window.innerWidth);
      setScrolled(Window.scrollY > 50 || innerWidth < 768);
    }
    const onScroll = () => {
      const Window = typeof window !== "undefined" && window;
      if (Window) {
        setInnerWidth(Window.innerWidth);
        setScrolled(Window.scrollY > 50 || innerWidth < 768);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [innerWidth]);

  const downloadResume = () => {
    let link = document.createElement("a");
    link.href = resume;
    link.target = "_blank";
    link.download = "Armando_Terrazas_Resume.pdf";
    link.click();
    link.remove();
  };

  const navLinks = [
    { id: "home", href: "/", text: "Home" },
    { id: "aboutme", href: "/about-me", text: "About Me" },
    { id: "connect", href: "/connect", text: "Connect" },
  ];

  return (
    <Navbar
      expand="lg"
      collapseOnSelect={true}
      className={scrolled ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Logo className="imgLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link) => (
              <Nav.Link
                as={Link}
                href={link.href}
                className={
                  pathname === link.href ? "active navbar-link" : "navbar-link"
                }
                key={link.id}
              >
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <SocialNav />
            <button role="link" className="vvd" onClick={downloadResume}>
              <span>Download my Resume</span>
            </button>
          </span>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};
