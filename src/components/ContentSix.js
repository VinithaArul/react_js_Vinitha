import React from 'react';
import { Row, Col,Image,Container, Button } from 'react-bootstrap';

const ContentSix = () => {
  return (
    <>
    <div className='quality'>
        <Container className='text-center' >
            <h4 className='m-2 p-2'>ViVerea Maecenas</h4>
            <h3 className='m-2 p-2'>Quality</h3>
            <Row className='justify-content-center'>
                <Col xl={2} className='bg-primary  m-1'><Image src={require('./images/user.png')} className='p-2'></Image>
                <br/>
                <h3>Heading1</h3>
                <br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                
                </Col>
                <Col xl={2} className='bg-primary  m-1'><Image src={require('./images/user.png')}className='p-2'></Image>
                <br/>
                <h3>Heading1</h3>
                <br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p></Col>
                <Col xl={2} className='bg-primary  m-1'><Image src={require('./images/user.png')}className='p-2'></Image>
                <br/>
                <h3>Heading1</h3>
                <br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p></Col>
                <Col xl={2} className='bg-primary  m-1'><Image src={require('./images/user.png')}className='p-2'></Image>
                <br/>
                <h3>Heading1</h3>
                <br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p></Col>
            </Row>
            <Row className='justify-content-center'>
                    <Col xl={2} className='m-3'>
                         <Button className='bg-secondary'><i class="bi bi-file-earmark-plus"></i>Know More</Button>
                    </Col>
        </Row>

            </Container>

    </div>
    </>
  )
}

export default ContentSix