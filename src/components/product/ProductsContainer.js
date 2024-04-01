import React, { useState, useEffect } from 'react';
import ProductList from './ProductList.js';

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error("Fetching products failed", error));
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsContainer;