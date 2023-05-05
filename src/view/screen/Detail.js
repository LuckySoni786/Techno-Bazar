import '../style/detail.css'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
function Detail() {
    const loc = useLocation();
    const [product, setProduct] = useState(loc.state.product)
    console.log(product);
    return (
        <>
            {/* <h1>{product.name}</h1> */}
            <Container>
                <Row>
                    <Col>
                        <div className="pr-div">
                            <img className='pr-img' src={product.img} alt="product image" />
                        </div>
                    </Col>
                    <Col>
                        <div><h1>{product.name}</h1></div>
                        <div className='mt-2'><span className='p_sell'>{product.sell}</span> <span className='p_mrp'> <del>{product.mrp}</del> </span><span className='p_dis'> {product.dis}</span></div>
                        <div className='mt-2'><span className='stock'>Stock: </span><span> {product.stock}</span></div>
                        <div className='mt-2'><span className='rating'>Rating:</span>⭐⭐⭐⭐</div>
                        <div className='mt-2'><span className='stock'>Detail:</span><span className='detail'>{product.detail}</span></div>
                        <div class=" gap-2 d-md-block my-5 text-center">
                            <button class="btn btn-primary col-4 me-5" type="button"><span>Buy Now</span></button>
                            <button class="btn btn-success col-4" type="button"><span>Add to Cart</span></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Detail;