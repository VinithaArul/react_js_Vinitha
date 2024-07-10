import React from 'react'
import { Container, Row, Col, Image, Button, Toast } from 'react-bootstrap';
import { useState } from 'react';

const ContentTwo = () => {
  return (
    <>
    <section id="services">
        <div className='text-center'>
            <h3 className='text-primary p-3 m-2'>Quam Viverra<i class="bi bi-life-preserver"></i></h3>
        </div>
        <Container>
            <Row className='align-items-center m-1 p-1'>
                <Col lg={6}>
                    <Image src={require('./images/img2.jpg')} fluid={true} alt='image pick'></Image>
                </Col>
                <Col lg={6} >
                    <h3>welcome to Motherland Textile India </h3>
                    <p>Find out the stock pick of the week. Get the best stock recommendation for the week to invest in. 
                        Click here to know what is the latest pick of the weekFind out the stock pick of the week. Get the best stock recommendation for the week to invest in.
                         Click here to know what is the latest pick of the week.</p>
                         <Row>
                            <Col xl={5} className='bg-light m-1 p-2'><h5>Airjet Looms Fabrics</h5><p>Find out the stock pick of the week.</p></Col>
                            <Col xl={5} className='bg-light m-1 p-2'><h5>Airjet Looms Fabrics</h5><p>Find out the stock pick of the week.</p></Col>
                         </Row>
                    <Col xs={6}>
                         <Button><i class="bi bi-file-earmark-plus"></i>Know More</Button>
                    </Col>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default ContentTwo;