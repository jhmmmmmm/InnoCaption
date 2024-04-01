import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsContainer from './components/product/ProductsContainer';
import ProductDetails from './components/product/ProductDetails';
import NavBar from './components/header/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
