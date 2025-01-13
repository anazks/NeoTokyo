import React from 'react';
import './BestPairedWith.css';
import product1 from '../../../Images/AlosLIke.png'; // Replace with correct image path
import product2 from '../../../Images/AlosLIke.png'; // Replace with correct image path
import product3 from '../../../Images/AlosLIke.png'; // Replace with correct image path
import product4 from '../../../Images/AlosLIke.png'; // Replace with correct image path

function BestPairedWith() {
  const products = [
    { name: 'RAZER DEATH ADDER', price: '₹ 2,60,000/-', image: product1 },
    { name: 'RAZER BLACKWIDOW V4 PRO', price: '₹ 2,60,000/-', image: product2 },
    { name: 'TEENAGE ENGINEERING MIDI', price: '₹ 2,60,000/-', image: product3 },
    { name: 'THE SPECTRE SERIES', price: '₹ 2,60,000/-', image: product4 },
  ];

  return (
    <div className="best-paired-with-container">
      <h2 className="section-title">BEST PAIRED WITH</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-button">
              <span role="img" aria-label="cart">🛒</span> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestPairedWith;
