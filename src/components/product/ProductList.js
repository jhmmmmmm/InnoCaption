import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch" key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
