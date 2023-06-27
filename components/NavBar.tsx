"use client";
import { Navbar, Container, Nav, NavbarBrand, NavLink } from "react-bootstrap";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialNav } from "./SocialNav";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { usePathname } from "next/navigation";

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
    console.log("download resume");
  };

  const navLinks = [
    { id: "home", href: "/", text: "Home" },
    { id: "aboutme", href: "/aboutme", text: "About Me" },
    { id: "connect", href: "/connect", text: "Connect" },
  ];

  return (
    <Navbar
      expand="lg"
      collapseOnSelect={true}
      className={scrolled || window.innerWidth < 767 ? "scrolled" : ""}
    >
      <Container>
        <NavbarBrand as={Link} href="/">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-f6166.appspot.com/o/logo%2Flogo.png?alt=media&token=cf592a9a-d132-4a4c-abd8-e0269d7bce6c"
            alt="Armando's Logo"
            className="imgLogo"
            width={50}
            height={50}
          />
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
