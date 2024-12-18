import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import linkedInIcon from '../assets/img/linkedin-icon.png';
import githubIcon from '../assets/img/github-icon.svg';
import { Envelope } from "react-bootstrap-icons";
// import { Telephone } from "react-bootstrap-icons";
import { PinMap } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <h3>Amanda Wang</h3>
            <p2><Envelope size={20} style={{ marginRight: '10px' }} />
              <a href="mailto:awang40@dons.usfca.edu">awang40@dons.usfca.edu</a>
            </p2>
            {/* <p2><Telephone size={20} style={{ marginRight: '10px' }} />
              <a href="tel:+14159626634">(415) 962-6634</a>  
            </p2> */}
            <p2><PinMap size={20} style={{ marginRight: '10px' }} />San Francisco, CA</p2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/amanda-wang04/"><img src={linkedInIcon} alt="Icon" /></a>
              <a href="https://github.com/amandawangg"><img src={githubIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}