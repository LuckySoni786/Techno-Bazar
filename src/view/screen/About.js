import { about } from '../Data/Data';

import { Container,Row,Col } from 'react-bootstrap';
import '../style/about.css'
import {
    MDBCard,
    MDBCardTitle,
    MDBBtn,
    MDBCardGroup,
    MDBCardImage,
    MDBCardText,
    MDBCardBody,MDBAccordionItem,MDBAccordion
} from 'mdb-react-ui-kit';
function About() {
    return (
        <Container fluid>
        <Row>
            <Col>
            <MDBAccordion initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle='About Website'>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='About Services'>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='About Website Builder'>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
    </MDBAccordion>
            </Col>
        </Row>

            {/* ------------------------------------------------------------------------- */}
            <Row className="bg" lg={2} sm={2} xs={1}>
                {
                    about.map(function(d){
                        return(
                            <Col className='car-div g-4'>
                    
                            <MDBCard>
                                <MDBCardImage src={d.img} alt="MDBCard image cap" top hover
                                    overlay="white-slight" />
                                <MDBCardBody>
                                    <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" size="md">
                                        read more
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        
                    </Col>
                        )
                    })
                }
                
                
            </Row>
        </Container>
    )
}
export default About;