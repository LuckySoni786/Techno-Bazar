import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../style/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import axios from "axios";
export default function Addtocart() {
    const [data, setData] = useState('')
    useEffect(() => {
        async function show() {
            let res = await axios.post('showtocart', {})
            console.log(res.data);
            setData(res.data)
        }
        show()
    }, [])
    //  item remove functions
    function removeitem(index) {
        console.log(index);

        setData(data.map((d, index1, arr) => {
            return index !== index1 && d
        }))


    }

    console.log(data);
    return (
        <Container>
            {
                data ? data.map((d, index) => {
                    if (d !== false) {
                        return (
                            <Row>

                                <Col className="p-2 col-md-2 col-sm-3 col-11 mx-auto d-flex shadow mt-4 border">
                                    <Card.Img variant="top" src={d.img} alt="image" />
                                </Col>

                                <Col className="col-md-9 col-sm-8 col-11 mx-auto px-4 mt-4 border shadow">
                                    <Row>
                                        <Col className="col-10">
                                            <Card.Body className="text-start">
                                                <Card.Title className="cart-title mt-2">{d.name} </Card.Title>
                                                <Card.Text className="cart-text mt-1">
                                                    <p className="ca-dis mb-2">{d.dis}</p>
                                                    <p className="fw-bold">{d.sell} <span className="ca-mrp"><del>{d.mrp}</del></span></p>
                                                    <span className="d-date">{d.delivery}</span> <span className="f-delv">FREE Delivery <del className="d-price">₹40</del></span>
                                                </Card.Text>

                                            </Card.Body>
                                        </Col>
                                        <Col className="col-2 text-end">
                                            <Button className="remove-btn mt-1" onClick={() => removeitem(index)}><FontAwesomeIcon className="trash" icon={faTrashCan} /></Button>
                                        </Col>
                                    </Row>
                                </Col>


                            </Row>
                        )
                    }
                }) : null
            }
          <Row className='bg-success order'>
            <Col className='text-center p-3 '>
            <Button type='submit' >Place Order</Button>
            </Col>
          </Row>
        </Container>
    );
}