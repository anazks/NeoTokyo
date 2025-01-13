import React from 'react';
import './ProductCard.css';
import AlosLike from '../../../Images/AlosLIke.png'; // Fix the import path

function ProductCard() {
  const products = [
    { name: 'Neuron 4000D RTS', price: '₹1,20,000/-', image: AlosLike },
    { name: 'Neuron 4000D RTS', price: '₹1,20,000/-', image: AlosLike },
    { name: 'Neuron 4000D RTS', price: '₹1,20,000/-', image: AlosLike },
    { name: 'Neuron 4000D RTS', price: '₹1,20,000/-', image: AlosLike },
    { name: 'Neuron 4000D RTS', price: '₹1,20,000/-', image: AlosLike },
  ];

  return (
    <div className="you-may-also-like-container">
      <h2 className="title">YOU MAY ALSO LIKE:</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-cards" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-names">{product.name}</h3>
            <p className="product-prices">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
