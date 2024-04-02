import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  // 假设的初始购物车数据，实际应用中这些数据可能来自于全局状态管理或API
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 200, quantity: 2 },
    // 更多商品...
  ]);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleQuantityChange = (itemId, quantity) => {
    setCartItems(
      cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <div className="container mt-3">
      <h2>Your Cart</h2>
      <div className="list-group">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemoveItem}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className="mt-3">
        Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
    </div>
  );
};

export default Cart;
