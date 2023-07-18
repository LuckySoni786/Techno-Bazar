import axios from "axios";
import '../style/orderplace.css';
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"


export default function OrderPlace() {
    let nav = useNavigate()
    const loc = useLocation()
    const [pay, setPay] = useState(loc.state)
    console.log(pay);
    const [acno, setAcno] = useState('');
    const [user, setUserdata] = useState(localStorage.getItem('user'));
    const [fsc, setFsc] = useState('');
    const [acname, setAcname] = useState('');
    const [add, setAdd] = useState('');
    const [cvv, setCvv] = useState('');

    console.log(user);
    async function paymentpage() {
        if (acno !== '' && fsc !== '' && acname !== '' && add !== '' && cvv !== '') {
            let params = {
                acno: acno,
                acname: acname,
                fsc: fsc,
                pay: pay,
                user: user,
                add: add,
                cvv: cvv,
            }
            let res = await axios.post("payment", params).catch(e => console.log(e));
            const { success, message } = res?.data
            if (success) {

                alert(message)
                nav('/profile')

                let res = await axios.post('removecartitem', {}).catch(e => console.log(e))


            }
            else {
                alert(message)

            }
        }
        else {
            alert("Fill All Input")
        }
    }
    return (
        <>
            <Container className="main-co p-0" fluid>
                
                <div className="or-div">
                <video autoPlay loop muted className="or-img" src={require('../img/bit.mp4')}  />
                </div>
                <Row data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1500">
                    <Col className="text-center mb-5 mt-5">
                        <h1 class="payment-t text-uppercase">// payment //</h1>

                    </Col>
                </Row>
                <Row data-aos="fade-down" data-aos-offset="0" data-aos-duration="1500">
                    <Col>
                        <div className="pay-page mb-1 w-50 m-auto rounded p-3 text-light">
                            <h4 className="text-center">Address</h4>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="enter address" value={add} onChange={d => setAdd(d.target.value)} />

                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-3" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1500">
                    <Col>
                        <div className="pay-page w-50 m-auto rounded p-3 text-light">
                            <h4 className="text-center">Bank Account Details</h4>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Bank Account Number" value={acno} onChange={d => setAcno(d.target.value)} />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Account Holder Name" value={acname} onChange={d => setAcname(d.target.value)} />

                                </Form.Group>
                                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">

                                    <Form.Control className="box1" type="email" placeholder="IFSC" value={fsc} onChange={d => setFsc(d.target.value)} />
                                    <Form.Control className="w-50" type="email" placeholder="CVV" value={cvv} onChange={d => setCvv(d.target.value)} />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="text" value={`Rs. ${pay}`} disabled />

                                </Form.Group>
                                <div className="text-center">
                                    <Button variant="primary" onClick={paymentpage} >
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>

    )
}