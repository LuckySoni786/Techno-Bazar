import { Container, Row, Col } from "react-bootstrap";
import '../style/profile.css';

function Profile() {
    return (
        <Container className="main-con" fluid>
            <Row className="d-flex">
                <Col className="col-md-7 mx-auto" data-aos="fade-up" data-aos-offset="0" data-aos-delay="700" data-aos-duration="700">
                    <video autoPlay loop muted className="cnf-vid" src={require('../img/cnf.mp4')} />
                </Col>
                <Col className="col-md-12 text-center position-absolute">
                    <h4 className="save p-2" data-aos="fade-down" data-aos-offset="0" data-aos-duration="400">YOU SAVE ₹300🎉</h4>
                </Col>
            </Row>
            <Row className="">
                <Col className="p-5 my-3 text-center">
                    <h1 className="thnx" data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000">Thank You For Shopping 😊</h1>
                </Col>
            </Row>
        </Container>
    )
}
export default Profile;