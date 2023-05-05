import '../style/style.css'
import { useNavigate } from 'react-router-dom';
import { slider, cards, video, cards2, big_card } from '../Data/Data';
import { MDBRow, MDBCol, MDBCardText, MDBCardTitle, MDBCardBody, MDBCardImage, MDBCard } from 'mdb-react-ui-kit';
import { Col, Container, Carousel, Row, Button, Form, Nav, Navbar, NavDropdown, Card, CardGroup, ListGroup } from 'react-bootstrap';
function Home() {
    const nav = useNavigate();
    console.log(slider)
    return (
        <Container  className=' p-0' fluid>

            <Row>
                <Col>
                    <Carousel>

                        {
                            slider.map(function (d) {
                                return (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={d.img}
                                        />
                                        <Carousel.Caption>
                                            <h3>{d.label}</h3>
                                            <p>{d.text}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </Col>
            </Row>


            <Row>
                {
                    cards.map(function (d) {
                        return (
                            <Col className='mt-5' lg={3} sm={6}>
                                <Card className='m-auto'>
                                    <Card.Img variant="top" src={d.img} className='c1' onClick={() => nav('/Detail', { state: { product: d } })} />
                                    <Card.Body>
                                        <Card.Title>{d.name}</Card.Title>
                                        <Card.Text>
                                            <span className='card-s'>{d.sell}</span><span className='card-mr'><del>{d.mrp}</del></span><br></br><span className='card-di'>{d.dis}</span>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

            {/* ----------------------------------------------------- */}

            <div class="row mt-5">
                <div class="col-lg-3 px-4 m-auto">
                    <img class="bd-placeholder-img rounded-circle border" width="140" height="140" src={require('../img/cap2.jpg')}
                    />

                    <h2 class="fw-normal">Capacitors</h2>
                    <p>Audio Board Capacitors and All vlaues Capacitors are available in good price.</p>
                    <p><a class="btn btn-secondary" href="#">View details »</a></p>
                </div>
                <div class="col-lg-3 px-4 m-auto">
                    <img className="bd-placeholder-img rounded-circle border " width="140" height="140" src={require('../img/thu2.jpg')}
                    />

                    <h2 className="fw-normal">ICs and Diodes</h2>
                    <p>Home theater ICs,Speakers ICs,Bulbs ICs,Any other ICS are Available.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
                <div class="col-lg-3 px-4 m-auto">
                    <img className="bd-placeholder-img rounded-circle border" width="140" height="140" src={require('../img/thu3.jpg')}
                    />

                    <h2 className="fw-normal">Speakers</h2>
                    <p>Amplifier Speakers , mini speakers , Boombox Speakers , Subwoofers and more speakers.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
            </div>

            <hr className="featurette-divider" />


            {/* -------------------------------------------------------------------- */}
            <Row>
                {
                    cards2.map(function (d) {
                        return (
                            <Col className='mt-5 p-4 m-auto' lg={3} sm={4} xs={10}>
                                <div class="card">
                                    <img className="card-img-top" height={'auto'} src={d.img} />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Audio Board</h5>
                                            <span class="text-muted text-decoration-line-through">₹899.00</span>
                                            ₹399.00 <h6>with 18% GST</h6>
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
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
                            <Col>
                                <MDBCard className='big_card mt-4'>
                                    <MDBRow>
                                        <MDBCol className='mt-3 mb-3' md='12' lg='4' sm='12'>
                                            <MDBCardImage className='big-img' src={d.img} fluid />
                                        </MDBCol>
                                        <MDBCol md='12' lg='8' sm='12'>
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