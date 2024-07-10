import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


const CartList = () => {
  return (
    <ListGroup as="ol" numbered>
        <ListGroup.Item as="li" className='d-flex align-items-start'>
            <div className='ms-2'>
                <div className='fw-bold'>
                    Mens cloths shirt
                </div>
                    vini group of products
            </div>
            <Badge bg="primary" pill>1</Badge>
        </ListGroup.Item>
        <ListGroup.Item as="li" className='d-flex align-items-start'>
            <div className='ms-2'>
                <div className='fw-bold'>
                    Womens cloths saree
                </div>
                    vini group of products
            </div>
            <Badge bg="primary" pill>5</Badge>
        </ListGroup.Item>
        <ListGroup.Item as="li" className='d-flex align-items-start'>
            <div className='ms-2'>
                <div className='fw-bold'>
                    Kids cloths 
                </div>
                    vini group of products
            </div>
            <Badge bg="primary" pill>10</Badge>
        </ListGroup.Item>
    </ListGroup>
  );
}

export default CartList;