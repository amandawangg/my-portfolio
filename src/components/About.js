import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutMeImg from "../assets/img/aboutMe.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="photo">
              <img src={aboutMeImg} alt="About-Me" />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-container">
              <div className="text-box">
                {/* <h2>About Me</h2> */}
                <p></p>
                <p>
                  I am a recent graduate from the University of San Francisco with a B.Sc. degree in Computer Science.
                </p>
                <p></p>
                <p>
                  My goal is to work in a dynamic and collaborative environment where I can apply my problem-solving skills to real-world challenges. I am particularly interested in web development, full-stack engineering, and exploring emerging technologies that push the boundaries of what is possible in the digital space.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
