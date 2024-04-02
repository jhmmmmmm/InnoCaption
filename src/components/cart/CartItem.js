import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const [prevQuantity, setPrevQuantity] = useState(item.quantity);

  const handleRemoveClick = () => onRemove(item.id);

  const handleQuantityBlur = (event) => {
    const newQuantity = parseInt(event.target.value);
    const quantityChange = newQuantity - prevQuantity;
    onQuantityChange(item.id, quantityChange);
    setPrevQuantity(newQuantity);
  };

  const handleKeyPress = (event) => {
    const validChars = '0123456789';
    if (!validChars.includes(event.key)&& event.key !== "Delete" && event.key !== "Backspace") {
      event.preventDefault();
    }
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={12} md={3} className="d-flex justify-content-center mb-3 mb-md-0">
            <img src={item.thumbnail} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          </Col>
          <Col xs={5} md={3}>
            <Card.Title className="mb-0">{item.title}</Card.Title>
          </Col>
          <Col xs={3} md={2}>
            ${Number(item.price).toFixed(2)}
          </Col>
          <Col xs={4} md={2}>
            <input
              type="number"
              defaultValue={item.quantity}
              onBlur={handleQuantityBlur}
              onKeyDown={handleKeyPress}
              className="form-control"
              min="1"
            />
          </Col>
          <Col xs={12} md={2} className="d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
            <Button variant="danger" onClick={handleRemoveClick}>Remove</Button>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        Total: ${Number(item.quantity * item.price).toFixed(2)}
      </Card.Footer>
    </Card>
  );
};

export default CartItem;