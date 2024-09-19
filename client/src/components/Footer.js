import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons";
import "../styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={12} className="text-center">
            &copy; {currentYear} Prathamesh Bhosale &nbsp;
            <span className="thunder-icon">
              <i className="fas fa-bolt"></i>
            </span>
          </Col>
          <Col md={12} className="text-center">
            <a
              href="https://www.linkedin.com/in/dev-prathamesh-bhosale/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/callisto05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="social-icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
