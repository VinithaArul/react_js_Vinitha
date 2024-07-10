import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';

const ContentThree = () => {
  return (
    <Container>
        <Row className='justify-content-center'>
            <Col className='m-1 p-1 bg-light'><i class="bi bi-building-fill-gear"></i><h2>1K+</h2><br/><h5>Fabrics per day production</h5></Col>
            <Col className='m-1 p-1 bg-light'><i class="bi bi-building-fill-gear"></i><h2>16</h2><br/><h5>people employed</h5></Col>
            <Col className='m-1 p-1 bg-light'><i class="bi bi-building-fill-gear"></i><h2>300</h2><br/><h5>people employed</h5></Col>
        </Row>
    </Container>
  );
}

export default ContentThree;