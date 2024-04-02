import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cart/CartProvider';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  const discountedPrice = (product.price - (product.price * product.discountPercentage) / 100).toFixed(2);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ ...product, price: discountedPrice });
  };

  return (
    <div className="card mb-3" style={{ width: '18rem', margin: '10px' }}>
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <img src={product.thumbnail} alt={product.title} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text mb-0">Price: ${discountedPrice}</p>
            <p className="card-text">Category: {product.category}</p>
          </div>
        </div>
      </Link>
      <div className="card-body d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
