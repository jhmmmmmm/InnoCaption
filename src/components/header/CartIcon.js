import React from 'react';
import { Button } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';

const CartIcon = () => {
    return (
        <Button variant="outline-primary" className="ms-2">
            <Cart /> Cart
        </Button>
    );
};

export default CartIcon;
