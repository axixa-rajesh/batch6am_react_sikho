import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'react-bootstrap';
import imagenotfoud from "../../../images/productnotfound.jpg";
function Product(props) {
    return (
        <Card className='mb-2'>
            <Card.Body>
               
                <Card.Img style={{ "height":"250px" }}
                    variant="top"
                    src={props.data.image??imagenotfoud}
                    alt={props.data.name || "Product image not found"}
                />
                <Card.Title className="text-center text-primary border-bottom pb-2">
                    {props.data.name}, {props.data.qty}{props.data.unit} <small className='text-muted'> | {props.data.category}</small>
                </Card.Title>
                <Card.Text>
                    <h5 className='pt-2'>
                    <big className='text-danger'>-{ props.data.discount??0}%  </big> 
                        <big> <sup>₹</sup>{props.data.price - props.data.price * (props.data.discount??0) / 100}<sup>00</sup></big>
                        
                    </h5>
                    
                    <div>
                    <span className='text-muted'>M.R.P. <del>₹{ props.data.price}</del></span>
                    </div>
                </Card.Text> 
            </Card.Body>
        </Card>
    );
}

export default Product;