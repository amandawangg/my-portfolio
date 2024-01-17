import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import profileImg from "../assets/img/profile-img.png"

export const Banner = () => {
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <spam className="tagline">Hello 👋</spam>
                        <div>
                            <h1>I'm</h1>
                            <h2> Amanda Wang</h2>
                        </div>
                        <p>UX/UI Designer, Software Engineer, Frontend Developer </p>
                        <p2> who loves transforming creative ideas into seamless digital solutions and embracing ambitious challenges. I translate dreams into code! </p2>
                        <button onClick={() => window.open('https://drive.google.com/file/d/1wtzl7K8zomnm0PoU_nnarJUIOFvTfbTx/view?usp=sharing', '_blank')}>View Resume <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                        <img src={profileImg} alt="Profile Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}