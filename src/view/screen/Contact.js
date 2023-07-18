import { Container, Row, Col } from "react-bootstrap";

function Contact() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="mt-4" lg={8} md={10} sm={12}>
                    <form data-aos="fade-down" data-aos-offset="0" data-aos-duration="1500">
                        <div class="form-outline mb-4">
                            <input type="text" id="form4Example1" placeholder="Enter Your Name" class="form-control" />
                            <label class="form-label" for="form4Example1">Name</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="email" id="form4Example2" placeholder="Enter Your Email" class="form-control" />
                            <label class="form-label" for="form4Example2">Email address</label>
                        </div>

                        <div class="form-outline mb-4">
                            <textarea class="form-control" id="form4Example3" placeholder="Please Enter Your Query" rows="4"></textarea>
                            <label class="form-label" for="form4Example3">Message</label>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-4">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4"/>
                            <label class="form-check-label" for="form4Example4">
                                Send me a copy of this message
                            </label>
                        </div>
                       <div className="text-center">
                        <button type="submit" class="btn btn-primary btn-block w-50 mb-5">Send</button>
                        </div>                    
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact;