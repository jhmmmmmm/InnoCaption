import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../cart/CartProvider';

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error("Fetching product details failed", error));
  }, [id]);

  const { addToCart } = useCart();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ ...product, price: discountedPrice });
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  const discountedPrice = (product.price - (product.price * product.discountPercentage) / 100).toFixed(2);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div id="carouselExampleIndicators" class="carousel slide carousel-container" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {product.images.map((image, index) => (
                  <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-current={index === 0 ? 'true' : ''} aria-label={`Slide ${index + 1}`}></button>
                ))}
              </div>
              <div className="carousel-inner">
                {product.images.map((image, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} className="d-block w-100 carousel-img" alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p className="text-primary" style={{ fontSize: '24px', color: 'red' }}>
              Price: ${discountedPrice}
            </p>
            <p style={{ textDecoration: 'line-through' }}>Original Price: ${product.price}</p>
            <p><strong>Discount:</strong> {product.discountPercentage}%</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <button className="btn btn-primary" onMouseDown={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductDetails;
