import { about } from '../Data/Data';

import { Container, Row, Col } from 'react-bootstrap';
import '../style/about.css'
import {
    MDBCard,
    MDBCardTitle,
    MDBBtn, MDBCol, MDBIcon, MDBRow, MDBContainer,
    MDBCardGroup,
    MDBCardImage,
    MDBCardText,
    MDBCardBody,
} from 'mdb-react-ui-kit';
function About() {
    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 pt-4" data-aos="fade-down" data-aos-offset="0" data-aos-duration="1500">
                        <div class="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                            <img class="img-fluid w-100 h-100" src={require('../img/abt.jpg')} />


                        </div>
                    </div>
                    <div class="col-lg-6" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1500">
                        <h4 class="text-primary text-uppercase">// About Us //</h4>
                        <h1 class="mb-4"><span class="text-primary">Techno Bazar</span> Is The Best Place For shopping Electronic Items</h1>
                        <p class="mb-4">Techno Bazaar takes care of all your facilities and if you shop from here, you will also be given a special discount . All things are available here at reasonable prices . We deliver the goods on time.</p>
                        <div class="row g-4 mb-3 pb-3">
                            <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                                <div class="d-flex">
                                    <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1">
                                        <span class="fw-bold text-secondary">01</span>
                                    </div>
                                    <div class="ps-3">
                                        <h6>24/7 Hours Services</h6>
                                        <span>We provide you 24/7 hours facility.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                                <div class="d-flex">
                                    <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1">
                                        <span class="fw-bold text-secondary">02</span>
                                    </div>
                                    <div class="ps-3">
                                        <h6>Quality Products</h6>
                                        <span>We provide you high quality products.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                                <div class="d-flex">
                                    <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1">
                                        <span class="fw-bold text-secondary">03</span>
                                    </div>
                                    <div class="ps-3">
                                        <h6>Awards Winning Site</h6>
                                        <span>This site is completely secure and award winning site.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="" class="btn btn-primary py-3 px-5">Read More<i class="fa fa-arrow-right ms-3"></i></a>
                    </div>
                </div>
            </div>



            <br></br><br></br><br></br><br></br>
            <MDBContainer className="py-5">
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="10" xl="8" className="text-center" data-aos="fade-left" data-aos-offset="0" data-aos-duration="1500">
                        <h1 class="text-primary text-uppercase mb-4">// we love our Customers //</h1>
                        <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                            These people are the customers who have been shopping from our site for the last 2 years.
                        </p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="text-center d-flex align-items-stretch">
                    <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
                        <MDBCard className="testimonial-card" data-aos="zoom-out-left" data-aos-offset="0" data-aos-duration="1500">
                            <div
                                className="card-up"
                                style={{ backgroundColor: "#9d789b" }}
                            ></div>
                            <div className="avatar mx-auto bg-white">
                                <img
                                    src={require('../img/sam.jpg')}
                                    className="rounded-circle img-fluid"
                                />
                            </div>
                            <MDBCardBody>
                                <h4 className="mb-4">Samar Experiment</h4>
                                <hr />
                                <p className="dark-grey-text mt-4">
                                    <MDBIcon fas icon="quote-left" className="pe-2" />
                                    On this site we get all electronic components and tools at reasonable prices.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
                        <MDBCard className="testimonial-card" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1500">
                            <div
                                className="card-up"
                                style={{ backgroundColor: "#7a81a8" }}
                            ></div>
                            <div className="avatar mx-auto bg-white">
                                <img
                                    src={require('../img/luc.jpg')}
                                    className="rounded-circle img-fluid"
                                />
                            </div>
                            <MDBCardBody>
                                <h4 className="mb-4">Technical Lucky</h4>
                                <hr />
                                <p className="dark-grey-text mt-4">
                                    <MDBIcon fas icon="quote-left" className="pe-2" />
                                    On this site we get all electronic components and tools at reasonable prices.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
                        <MDBCard className="testimonial-card" data-aos="zoom-out-right" data-aos-offset="0" data-aos-duration="1500">
                            <div
                                className="card-up"
                                style={{ backgroundColor: "#6d5b98" }}
                            ></div>
                            <div className="avatar mx-auto bg-white">
                                <img
                                    src={require('../img/shok.jpg')}
                                    className="rounded-circle img-fluid"
                                />
                            </div>
                            <MDBCardBody>
                                <h4 className="mb-4">Technical Sokil</h4>
                                <hr />
                                <p className="dark-grey-text mt-4">
                                    <MDBIcon fas icon="quote-left" className="pe-2" />
                                    On this site we get all electronic components and tools at reasonable prices.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>


    )
}





export default About;