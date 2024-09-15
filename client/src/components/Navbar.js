import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css'; // Import the custom CSS file

const NavigationBar = ({ onAboutClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (link === 'about') {
      onAboutClick();
    }
    setTimeout(() => {
      setActiveLink(null);
    }, 2000); // Unselect after 2 seconds
  };

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <Navbar className={navbarClasses.join(' ')} variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="text-uppercase">Prathamesh Bhosale</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase">
          <Nav.Link
              href="#about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleLinkClick('about')}
              onMouseEnter={() => setActiveLink('about')}
              onMouseLeave={() => setActiveLink(null)}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={activeLink === 'resume' ? 'active' : ''}
              onClick={() => handleLinkClick('resume')}
              onMouseEnter={() => setActiveLink('resume')}
              onMouseLeave={() => setActiveLink(null)}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={() => handleLinkClick('projects')}
              onMouseEnter={() => setActiveLink('projects')}
              onMouseLeave={() => setActiveLink(null)}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => handleLinkClick('contact')}
              onMouseEnter={() => setActiveLink('contact')}
              onMouseLeave={() => setActiveLink(null)}
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