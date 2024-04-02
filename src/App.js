import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import NavBar2 from './components/header/NavBar2';
import ProductsContainer from './components/product/ProductsContainer';
import ProductDetails from './components/product/ProductDetails';
import HomePage from './components/homepage/Homepage';
import Cart from './components/cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        const uniqueCategories = new Set(data.products.map(product => product.category));
        setCategories([...uniqueCategories]);
      })
      .catch(error => console.error("Fetching products failed", error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    if (!searchTerm.trim()) return true;
    return product.title?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar2 />
            <HomePage />
          </>
        }/>
        <Route path="/products" element={
          <>
            <NavBar 
              categories={categories} 
              selectedCategory={selectedCategory} 
              onCategoryChange={handleCategoryChange}
              onSearch={handleSearch} 
            />
            <div className="pt-5"><ProductsContainer products={filteredProducts} /></div>
          </>
        }/>
        <Route path="/products/:id" element={
          <>
            <NavBar2 />
            <div className="pt-5"><ProductDetails /></div>
          </>
        }/>
                <Route path="/cart" element={
          <>
            <NavBar2 />
            <div className="pt-5"><Cart /></div>
          </>
        }/>
      </Routes>

    </Router>
  );
}

export default App;