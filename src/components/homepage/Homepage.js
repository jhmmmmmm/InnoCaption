import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'particles.js';

const HomePage = () => {
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
    <>
      <div id="particles-js" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center text-center" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="display-2">Welcome to Our Online Store</h1>
        <p className="lead">Discover our amazing products, from electronics to clothing.</p>
        <Link to="/products" className="btn btn-lg btn-primary">Explore Now</Link>
      </div>
    </>
  );
};

export default HomePage;