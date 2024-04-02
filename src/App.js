import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import NavBar2 from './components/header/NavBar2';
import ProductsContainer from './components/product/ProductsContainer';
import ProductDetails from './components/product/ProductDetails';
import HomePage from './components/homepage/Homepage';
import Cart from './components/cart/Cart';
import { CartProvider } from './components/cart/CartProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'particles.js';

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

  useEffect(() => {
    window.particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#007BFF"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#0056b3"
          },
          "polygon": {
            "nb_sides": 5
          },
        },
        "opacity": {
          "value": 0.6,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#007BFF",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "retina_detect": true
    });
  }, []);

  return (
    <CartProvider>
      <div id="particles-js" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar2 />
              <HomePage />
            </>
          } />
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
          } />
          <Route path="/products/:id" element={
            <>
              <NavBar2 />
              <div className="pt-5"><ProductDetails /></div>
            </>
          } />
          <Route path="/cart" element={
            <>
              <NavBar2 />
              <div className="pt-5"><Cart /></div>
            </>
          } />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
