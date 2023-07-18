import '../style/detail.css'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
function Detail() {
    const nav = useNavigate();

    const loc = useLocation();
    const [product, setProduct] = useState(loc.state.product)
    console.log(product);

    async function productaddtocart(product) {

        let params = {
            ...product
        }

        let res = await axios.post("addtocart", params)
        console.log(res.data);
        let { message, success } = res.data
        console.log(success);
        if (success) {
            alert(message)
            nav("/Addtocart")
        }
        else {
            alert(message)
        }
    }
    //    -------------------------------------buy now work as add to cart.


    async function productbuynow(product) {

        let params = {
            ...product
        }

        let res = await axios.post("addtocart", params)
        console.log(res.data);
        let { message1, success } = res.data
        console.log(success);
        if (success) {
            alert('Confirm Your Order')
            nav("/Addtocart")
        }
        else {
            alert('Somthing Wrong!')
        }
    }
    // ------------------------------------------------
    return (
        <>
            {/* <h1>{product.name}</h1> */}
            <Container>
                <Row>
                    <Col data-aos="fade-left" data-aos-offset="0" data-aos-duration="1500">
                        <div className="pr-div">
                            <img className='pr-img' src={product.img} alt="product image" />
                        </div>
                    </Col>
                    <Col data-aos="fade-right" data-aos-offset="0" data-aos-duration="1500">
                        <div><h1>{product.name}</h1></div>
                        <div className='mt-2'><span className='p_sell'>{product.sell}</span> <span className='p_mrp'> <del>{product.mrp}</del> </span><span className='p_dis'> {product.dis}</span></div>
                        <div className='mt-2'><span className='stock'>Stock: </span><span> {product.stock}</span></div>
                        <div className='mt-2'><span className='rating'>Rating:</span>{product.rating}</div>
                        <div className='mt-2'><span className='stock'>Detail:</span><span className='detail'>{product.detail}</span></div>
                        <div class=" gap-2 d-md-block my-5 text-center">
                            <button class="btn btn-primary col-4 me-5" type="button" onClick={() => productbuynow(product)}><span>Buy Now</span></button>
                            <button class="btn btn-success col-4" type="button" onClick={() => productaddtocart(product)}><span>Add to Cart</span></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Detail;