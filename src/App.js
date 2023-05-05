import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Home from './view/screen/home';
import About from './view/screen/About'
import Contact from './view/screen/Contact'
import Login from './view/screen/Login'
import Register from './view/screen/Register'
import Cart from './view/screen/Cart';
import { menubar } from './view/Data/Data';
import Detail from './view/screen/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './view/style/style.css'

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Col, Container, Row, Button, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
function App() {
  console.log(menubar);
  const [user, setUser] = useState(localStorage.getItem('user'));

  console.log(localStorage.getItem('user'));



  function logout() {
    alert('logout')
    localStorage.setItem('user', false)
    setUser(false)
    localStorage.clear()
  }
  return (
    <>
      <BrowserRouter>
        <Container className='bg-primary' fluid>
          <Row>
            <Col>
              <Navbar bg="light" expand="lg">
                <Container fluid>
                  <Navbar.Brand href="/"><span className='logo1'><span className='w1'>T</span><span className='w2'>e</span><span className='w3'>c</span><span className='w4'>h</span><span className='w5'>n</span><span className='w6'>o</span><span className='logo2'> Bazar</span></span></Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll>
                      <Nav.Link><Link to={`/`} className=" text-decoration-none text-danger">Home</Link></Nav.Link>
                      {
                        menubar.map(function (d) {
                          return (
                            <Nav.Link><Link to={`/${d}`} className="text-decoration-none text-danger">{d}</Link></Nav.Link>
                          )
                        })
                      }
                      {user ? null : <>
                        <Nav.Link><Link to={"/register"} className="text-decoration-none text-danger">Register</Link></Nav.Link>
                        <Nav.Link><Link to={"/login"} className="text-decoration-none text-danger">Login</Link></Nav.Link>
                      </>
                      }
                      {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown> */}
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button className='search-btn' variant="outline-success"><FontAwesomeIcon icon={faSearch} /></Button>
                    </Form>
                    {
                      user ? <Button className='log-btn' onClick={logout}><FontAwesomeIcon className='off-icon' icon={faPowerOff} /></Button> : null
                    }
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>

        {/* <Link className='links' to='/'>Home</Link> 
            <Link className='links' to='/About'>About</Link>
            <Link className='links' to='/Login'>Login</Link>
            <Link className='links' to='/Cart'>Cart</Link>  */}




        <Routes>
          {
            user ? null :
             <>
             <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </>
          }


          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Detail" element={<Detail />} />
        </Routes>

        <Row>
          <Col>
            <MDBFooter className='bg-light text-center text-white'>
              <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                  <MDBBtn
                    floating
                    className='m-1'
                    style={{ backgroundColor: '#3b5998' }}
                    href='#!'
                    role='button'
                  >
                    <MDBIcon fab icon='facebook' />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className='m-1'
                    style={{ backgroundColor: '#55acee' }}
                    href='#!'
                    role='button'
                  >
                    <MDBIcon fab icon='twitter' />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className='m-1'
                    style={{ backgroundColor: '#dd4b39' }}
                    href='#!'
                    role='button'
                  >
                    <MDBIcon fab icon='google' />
                  </MDBBtn>
                  <MDBBtn
                    floating
                    className='m-1'
                    style={{ backgroundColor: '#ac2bac' }}
                    href='#!'
                    role='button'
                  >
                    <MDBIcon fab icon='instagram' />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className='m-1'
                    style={{ backgroundColor: '#0082ca' }}
                    href='#!'
                    role='button'
                  >
                    <MDBIcon fab icon='linkedin-in' />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className='m-1'
                    style={{ backgroundColor: '#333333' }}
                    href='#!'
                    role='button'
                  >
                    <MDBIcon fab icon='youtube' />
                  </MDBBtn>
                </section>
              </MDBContainer>

              <div className='text-center p-3' style={{ backgroundColor: 'green', fontSize: 'larger' }}>
                © 2023 Copyright:
                <a className='text-white' href=' https://mdbootstrap.com/ ' >
                  <span> MDBootstrap.com</span>
                </a>
              </div>
            </MDBFooter>
          </Col>
        </Row>
      </BrowserRouter>


    </>
  );
}

export default App;