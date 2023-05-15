import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../style/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Addtocart() {
    const nav = useNavigate()
    const [data, setData] = useState('')
    const [pay, setPay] = useState('')
    useEffect(() => {
        async function show() {
            let res = await axios.post('showtocart', {})
            console.log(res.data);
            setData(res.data)
            let pay=0;
            res.data.map(d=>{
                pay+=d.sell
            })
        console.log(pay);
        setPay(pay)

        }
        show()
    }, [])


    async function show() {
        let res = await axios.post('showtocart', {})
        console.log(res.data);
        setData(res.data)
        let pay=0;
        res.data.map(d=>{
            pay+=d.sell
        })
    console.log(pay);
    setPay(pay)

    }

    //  item remove functions
  async  function removeitem(index) {
       
let arr=[]
data.map((d, index1) => {
                if(index !== index1){
                    arr.push(d)
                }        })
        console.log(arr);        
let res = await axios.post('removecartitem', arr).catch(e=>console.log(e))
            console.log(res?.data);
       await setData(arr)

        show()

    }

    console.log(data.length);
    console.log(Array.isArray(data));
    return (
        <Container>
            {data.length>0 &&
                 !Array.isArray(data) ? data[0].map((d, index) => {
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
                
                {data.length>0&&
               Array.isArray(data) ? data.map((d, index) => {
                  
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
                   
                }) : null
                
            }
          <Row className='bg-success order'>
            
            <Col className='text-center p-3 '>
          <h3 className='text-light'>Total Pay Amount=Rs.{pay}</h3>
            </Col>
            <Col className='text-center p-3 '>
           <Button type='submit' onClick={()=>nav("/order" ,{state:pay})}>Place Order</Button>
            </Col>
          </Row>
        </Container>
    );
}