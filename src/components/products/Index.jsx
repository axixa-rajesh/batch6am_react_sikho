import React from 'react';
import Product from './product/Product';
import products from '../../db';
import { Col, Row } from 'react-bootstrap';
import Leftbar from './leftbar/Leftbar';
import { useParams } from 'react-router-dom';
function Index(props) {
    let pcategory = useParams().item??"";
    let dproducts = products;
    
    const categories = [...new Set(products.map(item => item.category))]
    if (pcategory) {
        dproducts = products.filter(item => item.category == pcategory);
    }
    return (
        <div >
            <Row>
                <Col xl="12" xs="12">
                    <Leftbar menu={categories} ccat={pcategory}></Leftbar>
                </Col>
                <Col xl="12" xs="12">
                    <Row>
                        {
                            dproducts.map(product => (
                                <Col xs="12" md="6" lg="4" xl="3" >
                                    <Product data={product}></Product>
                                </Col>
                            )
                            )
                        }
                    </Row> 
                </Col>
            </Row>
           
        </div>
    );
}

export default Index;