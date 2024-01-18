import { Tab, Container, Row, Col } from "react-bootstrap";
import seProjImg from "../assets/img/seProjImg.png";
import iosProjImg from "../assets/img/iosProjImg2.png";
import portfolioProjImg from "../assets/img/portfolioProjImg.png";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import React from 'react';

export const Projects = () => {
    const projects = [
        {
          title: "Search Engine",
          description: "Backend Project",
          imgUrl: seProjImg,
          link: "https://github.com/amandawangg/SearchEngine",
        },
        {
          title: "accesSOS",
          description: "Frontend portion of the iOS App",
          imgUrl: iosProjImg,
          link: "https://apps.apple.com/us/app/accessos/id1578050242",
        },
        {
          title: "Portfolio Project",
          description: "Frontend Project w/ Figma prototype",
          imgUrl: portfolioProjImg,
          link: "https://www.figma.com/file/Tk3UwDTXtESO6RESYgXXNW/Untitled?type=design&node-id=0%3A1&mode=design&t=ELlCpxrgmYlUnl4O-1",
        },
      ];

      const handleProjectCardClick = (link) => {
        window.location.href = link;
      };
    
      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <p></p>
                      {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">3</Nav.Link>
                        </Nav.Item>
                      </Nav> */}
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    onClick={() => handleProjectCardClick(project.link)}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <Row>
                              {
                                projects.map((project, index) => {
                                  return (
                                    <ProjectCard
                                      key={index}
                                      onClick={() => handleProjectCardClick(project.link)}
                                      {...project}
                                      />
                                  )
                                })
                              }
                            </Row>
                          <p>Description</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Description</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
}