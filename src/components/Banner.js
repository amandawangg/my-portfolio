import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import profileImg from "../assets/img/profile-img.png"

export const Banner = () => {
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <spam className="tagline">Welcome to my Portfolio</spam>
                        <h1>{`Hi I'm Amanda `}</h1>
                        <p>Description goes here</p>
                        <button onClick={(() => console.log('connect'))}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                        <img src={profileImg} alt="Profile Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}