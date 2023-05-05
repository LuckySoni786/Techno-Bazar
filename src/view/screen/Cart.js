
import { Container, Row,Col } from "react-bootstrap";

export default function Cart(){

    return(
        <>
        <Container className="bg-primary" >
            {/* <h1>my name is soni ji</h1> */}
            <Row>
                <Col lg={3} className='bg-primary' >Col</Col>
                <Col lg={3} className='bg-success'>Col</Col>
                <Col lg={3} className='bg-primary'>Col</Col>
                <Col lg={3} className='bg-success'>Col</Col>
            </Row>
        </Container>
        </>
    )
}