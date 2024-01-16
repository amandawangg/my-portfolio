import { Tab, Nav, Container, Row, Col } from "react-bootstrap";
import seProjImg from "../assets/img/seProjImg.png";
import iosProjImg from "../assets/img/iosProjImg.png";
import portfolioProjImg from "../assets/img/portfolioProjImg.png";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
          title: "Search Engine",
          description: "Backend Project",
          imgUrl: seProjImg,
        },
        {
          title: "iOS App",
          description: "Frontend Project",
          imgUrl: iosProjImg,
        },
        {
          title: "Portfolio Project",
          description: "Frontend Project w/ Figma prototype",
          imgUrl: portfolioProjImg,
        },
      ];
    
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
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
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