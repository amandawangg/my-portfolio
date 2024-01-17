import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <about className="about">
      <Container>
        <Row className="align-items-left">
          <Col size={12} sm={6}>
            <h1> I am a recent grad from University of San Francisco.</h1>
          </Col>
        </Row>
      </Container>
    </about>
  )
}