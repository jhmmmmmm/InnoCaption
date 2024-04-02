import React from 'react';
import { Link } from 'react-router-dom';
import 'particles.js';

const HomePage = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center text-center" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="display-2">Welcome to Our Online Store</h1>
        <p className="lead">Discover our amazing products, from electronics to clothing.</p>
        <Link to="/products" className="btn btn-lg btn-primary">Explore Now</Link>
      </div>
    </>
  );
};

export default HomePage;