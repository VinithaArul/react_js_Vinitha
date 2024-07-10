import React from 'react'
import { Form,Row,Col, InputGroup, Button } from 'react-bootstrap';

const CommentForm = () => {
  return (
    <>
    <section id='comment' className='bg-light'>
        <h3 className='h2 text-center text-primary p-2'>Comments<span><i class="bi bi-chat-square-heart-fill p-3"></i></span></h3>
        <Row className='justify-content-center'>
            <Col md={6} className='align-item-center'>
            <Form className='m-2 px-5 py-2'>
            <Form.Group  as={Col} >
                <Form.Label>E-mail Id</Form.Label>
                <Form.Control type='email' placeholder='Enter Your e-mail Id'></Form.Control>
                <Form.Text className='text-muted'>Please Enter valid e-mail Id</Form.Text>
            </Form.Group>
            <Form.Group  as={Col} >
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter atleast 8 digit password'></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>User Name</Form.Label>
            <Form.Control type='text' placeholder="Enter user name"></Form.Control>
            </Form.Group>
            <Form.Group as={Row} className="my-2 p-2 justify-content-center">
                <Col sm={{ span: 10, offset: 6}}>
                    <Button type="submit" >Sign in</Button>
                </Col>
            </Form.Group>
        </Form>
            </Col>
        </Row>
    </section>
    </>
  );
}

export default CommentForm;