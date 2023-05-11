import { Container,Row,Col,Card,nav,Button, } from "react-bootstrap";
import { cards3 } from "../Data/Data";
import '../style/style.css'
import { Link } from "react-router-dom";

function Vmore() {
   return(

       <Container fluid>
<Row className='p-4'>
                {
                    cards3.map(function (d) {
                        return (
                            <Col className='mt-3 col-lg-4 col-md-4' sm={6}>
                                <Card className='card1st h-100'>
                                    <Card.Img variant="top" src={d.img}/>
                                    <Card.Body>
                                        <Card.Title>{d.title}</Card.Title>
                                        <Card.Text>
                                            <span className='card-s'>{d.sell}</span><span className='card-mr'><del>{d.mrp}</del></span><br></br><span className='card-di'>{d.dis}</span>
                                        </Card.Text>

                                    </Card.Body>
                                    <div className='p-2 text-center'>
                                        <Link><Link to={'/'}><Button className='bg-primary w-50'>Back</Button></Link></Link>
                                        </div>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>         
       </Container>
   )
    
} 
export default Vmore;