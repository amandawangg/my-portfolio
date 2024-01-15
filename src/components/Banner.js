import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import { useState } from "react";

export const Banner = () => {
    const toRotate = [ "Recent Grad from USF", "UX/UI Designer", "Frontend Engineer", "Software Engineer"];
    const [text, setText] = useState('');
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <spam className="tagline">Welcome to my Portfolio</spam>
                        <h1>{`Hi I'm Amanda `}<span className="wrap">{text}</span></h1>
                        <p>Description goes here</p>
                        <button onClick={(() => console.log('connect'))}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}