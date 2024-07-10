import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import CartList from "./CartList";

const CanvaRight = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handShow = () => setShow(true);

  return (
    <>
    <Button variant='primary' onClick={() => setShow(!show)} >Cart</Button>

    <Offcanvas show={show} onHide={() => setShow(!show)} placement={'end'}>
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>cart items</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <CartList />
        <div className='text-end m-1 p-2'>
            <Button variant='primary'>Checkout</Button>
        </div>
    </Offcanvas.Body>
    </Offcanvas>
    </>
   
  );
}

export default CanvaRight;