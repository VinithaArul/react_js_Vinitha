import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
const HeaderNav = () => {
  return (
    <>
        <Container>
            <Row>
                <Col > <Image src={require('./images/logo.png')}></Image></Col>
                <Col xl={4} className='m-4 p-2'> <span><i class="bi bi-1-circle-fill"></i></span>ISO Certified Company</Col>
                <Col xl={4} className='m-4 p-2'><span><i class="bi bi-1-circle-fill"></i></span>Expert Mangement</Col>
            </Row>
        </Container>
    </>
  );
}

export default HeaderNav;