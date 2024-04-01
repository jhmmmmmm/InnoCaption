import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card" style={{ width: '18rem', margin: '10px', cursor: 'pointer' }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <button className="btn btn-primary" onClick={(e) => e.stopPropagation()}>Add to Cart</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
