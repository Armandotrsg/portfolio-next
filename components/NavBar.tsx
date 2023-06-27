"use client";
import { Navbar, Container, Nav, NavbarBrand, NavLink } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SocialNav } from "./SocialNav";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { resume } from "@/utils/Resume";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <NavbarBrand as={Link} href="/">
          <Logo className="imgLogo" />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link) => (
              <NavLink
                as={Link}
                href={link.href}
                className={
                  pathname === link.href ? "active navbar-link" : "navbar-link"
                }
                key={link.id}
              >
                {link.text}
              </NavLink>
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
