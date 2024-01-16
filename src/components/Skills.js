import meter9 from "../assets/img/meter9.svg";
import meter8 from "../assets/img/meter8.svg";
import meter7 from "../assets/img/meter7.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Container, Row, Col} from "react-bootstrap";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter9} />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={meter8} />
                                    <h5>HTML/CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter8} />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter7} />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter9} />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter8} />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={meter8} />
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <img src={meter8} />
                                    <h5>Agile/Scrum/Kanban</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}