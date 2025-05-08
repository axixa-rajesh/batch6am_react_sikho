import React from 'react';
import "./header.css";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './navbar/NavBar';
function Header(props) {
    return (
        <Container fluid>
            <Row id='header'>
              
                <Col xs="10" className='col-1 h2' md="3" >
                    <Link to="/" className='link '> Axixa Technologies</Link>
                </Col>
                <Col xs="2" className='col-2' md="9" >
                    <NavBar />
                </Col>
            </Row>
       </Container>
    );
}

export default Header;