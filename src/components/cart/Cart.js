import React from 'react';
import { useCart } from './CartProvider';
import CartItem from './CartItem';
import { Container, Card, Button } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateItemQuantity } = useCart();

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleQuantityChange = (itemId, quantity) => {
    updateItemQuantity(itemId, quantity);
  };
  const cartTotalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div>
      <Container className='mt-3'>
        <h2>Your Shopping Cart</h2>
        <Card className="mt-3">
          <Card.Body>
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemove}
                  onQuantityChange={handleQuantityChange}
                />
              ))
            ) : (
              <span>Your cart is empty.</span>
            )}
            <div className="text-center mt-4">
            Total Price: ${cartTotalPrice.toFixed(2)}
            </div>
          </Card.Body>
          <Card.Footer className="text-center">
            
            <Button onClick={clearCart} variant="secondary" className="me-2">Clear Cart</Button>
              <Button onClick={() => console.log('Checkout')} variant="primary">Proceed to Checkout</Button>
          </Card.Footer>
        </Card>
      </Container>
    </div>

  );
};

export default Cart;
