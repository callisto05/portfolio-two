import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Navbar.css"; // Import the custom CSS file

const NavigationBar = ({ onLinkClick, activeLink, setActiveLink }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    onLinkClick(link);
    setTimeout(() => {
      setActiveLink(null);
    }, 2000); // Unselect after 2 seconds
  };

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <Navbar
      className={navbarClasses.join(" ")}
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="text-uppercase">
          Prathamesh Bhosale
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link
              href="#about"
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              onClick={() => handleLinkClick("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={`nav-link ${activeLink === "resume" ? "active" : ""}`}
              onClick={() => handleLinkClick("resume")}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`nav-link ${activeLink === "projects" ? "active" : ""}`}
              onClick={() => handleLinkClick("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
