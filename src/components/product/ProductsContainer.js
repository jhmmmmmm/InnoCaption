import React from 'react';
import ProductList from './ProductList.js';

const ProductsContainer = ({ products }) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsContainer;