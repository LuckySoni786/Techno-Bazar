import '../style/style.css';
import { useNavigate } from 'react-router-dom';
import { slider, cards, video, cards2, big_card, circle_cards } from '../Data/Data';
import { MDBRow, MDBCol, MDBCardText, MDBCardTitle, MDBCardBody, MDBCardImage, MDBCard } from 'mdb-react-ui-kit';
import { Col, Container, Carousel, Row, Button, Form, Nav, Navbar, NavDropdown, Card, CardGroup, ListGroup } from 'react-bootstrap';
function Home() {
    const nav = useNavigate();
    console.log(slider)
    return (
        <Container className=' p-0' fluid>

            <Row>
                <Col>
                    <Carousel>

                        {
                            slider.map(function (d) {
                                return (
                                    <Carousel.Item>
                                        <video
                                            className="d-block w-100"
                                            muted autoPlay loop src={d.img} />

                                        <Carousel.Caption className='label'>
                                            <h3 className='label1'>{d.label}</h3>
                                            <p>{d.text}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </Col>
            </Row>


            <Row className='p-4'>
                {
                    cards.map(function (d) {
                        return (
                            <Col className='mt-5 col-lg-3 col-md-4' sm={6}>
                                <Card className='card1st h-100'>
                                    <div className='inner'>
                                        <Card.Img variant="top" src={d.img} className='c1' onClick={() => nav('/Detail', { state: { product: d } })} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{d.name}</Card.Title>
                                        <Card.Text>
                                            <span className='card-s'>{d.sell}</span><span className='card-mr'><del>{d.mrp}</del></span><br></br><span className='card-di'>{d.dis}</span>
                                        </Card.Text>

                                    </Card.Body>
                                    <div className='p-2 text-center'>
                                        <Button className='add-btn'>Add to Cart</Button>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

            {/* ----------------------------------------------------- */}

            <div class="row mt-5">
                {
                    circle_cards.map(function (d) {
                        return (
                            <div class="col-lg-3 px-4 m-auto">
                                <img class="bd-placeholder-img rounded-circle border" width="140" height="140" src={d.img}
                                />

                                <h2 class="fw-normal">{d.title}</h2>
                                <p>{d.text}</p>
                                <Button className='bg-secondary' onClick={() => nav('/Vmore', { state: { product: d } })}>View More </Button>
                            </div>
                        )
                    })
                }

            </div>

            <hr className="featurette-divider" />


            {/* -------------------------------------------------------------------- */}
            <Row className='p-4'>
                {
                    cards2.map(function (d) {
                        return (
                            <Col className='mt-5 col-lg-3 col-md-4' sm={6}>
                                <div class="card1st card h-100">
                                    <div className='inner'>
                                        <img className="card-img-top" src={d.img} onClick={() => nav('/Detail', { state: { product: d } })} />
                                    </div>
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">{d.name}</h5>
                                            <span className='card-s'>{d.sell} </span>
                                            <span class="text-muted text-decoration-line-through">{d.mrp}</span>
                                            <h6> {d.gst}</h6>
                                        </div>
                                    </div>
                                    <div class="card p-4 pt-0 border-top-0">
                                        <div class="text-center">
                                            <Button className='add-btn'>Add to Cart</Button></div>
                                    </div>
                                </div>
                            </Col>

                        )
                    })
                }
            </Row>

            {/* ---------------------------------------------------------------------- */}
            <Row>
                {
                    big_card.map(function (d) {
                        return (
                            <Col className='col-md-11 col-11 mx-auto'>
                                <MDBCard className='big_card mt-4'>
                                    <MDBRow>
                                        <MDBCol className='col-md-4 col-11 mx-4 d-flex p-0 align-items-center'>
                                            <div className='inner'>
                                                <MDBCardImage className='w-100' src={d.img} />
                                            </div>
                                        </MDBCol>
                                        <MDBCol className='col-md-7'>
                                            <MDBCardBody className='b-t-box'>
                                                <MDBCardTitle className='b-t-align'>{d.title}</MDBCardTitle>
                                                <MDBCardText className='b-t-align'>
                                                    <span className='sell'>{d.sell}</span> <span className='mrp'> <del>{d.mrp}</del> </span><span className='dis'> {d.dis}</span>
                                                    <br></br>
                                                </MDBCardText>
                                                <span className='hig-span'>Highlights</span>
                                                <div className='highl'>
                                                    <ul>
                                                        <li>Inclusions: Solder Wire, Cutter, Hardware Tape</li>
                                                        <li>Power Requirements: Corded, 25 W</li>
                                                        <li>Not Temperature Controlled</li>
                                                        <li>Maximum Temperature: 400 degree C</li>
                                                        <li>Pack of: 7</li>
                                                    </ul>
                                                </div>

                                                <div class=" gap-2 d-md-block my-3">
                                                    <button class="btn btn-primary col-3 me-5" type="button">Buy Now</button>
                                                    <button class="btn btn-success col-3" type="button">Add to Cart</button>
                                                </div>
                                                <MDBCardText>
                                                    <small className='text-muted'>Last updated 10 mins ago</small>
                                                </MDBCardText>
                                            </MDBCardBody>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCard>
                            </Col>
                        )
                    })
                }

            </Row>
        </Container>

    )
}
export default Home;