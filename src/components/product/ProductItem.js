import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const discountedPrice = (product.price - (product.price * product.discountPercentage) / 100).toFixed(2);
  return (
    <Link to={`/products/${product.id}`} className="card mb-3" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card" style={{ width: '18rem', margin: '10px', cursor: 'pointer' }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text mb-0">Price: ${discountedPrice}</p>
          <p className="card-text">Category: {product.category}</p>
          <button className="btn btn-primary" onClick={(e) => e.stopPropagation()}>Add to Cart</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
