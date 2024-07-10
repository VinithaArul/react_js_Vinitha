import React from 'react';
import {Row, Col, Container, Image, Button} from 'react-bootstrap';

const ContentFive = () => {
  return (
    <Container>
        <Row>
            <Col xl={4}> <h3>Etiamo Temper</h3>
            <br/>
            <h1>products</h1>
            </Col>
            <Col xl={4}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            </Col>
        </Row>
        <Row>
            <Col><Image src={require('./images/img5.jpg')} className='img'></Image>
            </Col>
            <Col><Image src={require('./images/img3.jpg')} className='img'></Image></Col>
            <Col><Image src={require('./images/img4.jpg')} className='img'></Image></Col>
        </Row>
        <Row className='justify-content-center'>
                    <Col xl={2} className='m-3'>
                         <Button><i class="bi bi-file-earmark-plus"></i>Know More</Button>
                    </Col>
        </Row>
    </Container>
  );
}

export default ContentFive;