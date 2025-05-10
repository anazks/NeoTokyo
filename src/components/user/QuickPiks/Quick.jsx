// React Component - Quick.jsx
import React, { useState, useEffect, useRef } from 'react';
import './quick.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { RiShieldKeyholeLine } from "react-icons/ri";

function Quick() {
  // State to track which product is being hovered
  const [hoveredProduct, setHoveredProduct] = useState(null);
  // State to handle animation class application
  const [isAnimating, setIsAnimating] = useState(false);
  // Ref for hover timers to avoid race conditions
  const hoverTimerRef = useRef(null);
  // Ref for intersection observer to trigger entrance animations
  const productRowRef = useRef(null);
  
  // Product data
  const products = [
    { 
      id: 'aspire', 
      name: 'Aspire Series', 
      price: '$1,40,000/-', 
      description: 'Performance Minimal, Sleek',
      image: "http://www.pngmart.com/files/4/Gaming-Computer-PNG-Free-Download.png",
      color: "linear-gradient(135deg, #2a2a72 0%, #009ffd 74%)"
    },
    { 
      id: 'ion', 
      name: 'Ion Drive', 
      price: '$95,000/-', 
      description: 'Compact Power',
      image: "https://static.vecteezy.com/system/resources/previews/048/412/757/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png",
      color: "linear-gradient(135deg, #000000 0%, #434343 74%)"
    },
    { 
      id: 'e75', 
      name: 'E-75', 
      price: '$1,20,000/-', 
      description: 'Professional Grade',
      image: "https://parspng.com/wp-content/uploads/2023/02/computerpng.parspng.com-4.png",
      color: "linear-gradient(135deg, #5f2c82 0%, #49a09d 74%)"
    },
    { 
      id: 'phantom', 
      name: 'Phantom', 
      price: '$1,60,000/-', 
      description: 'Ultimate Gaming',
      image: "https://parspng.com/wp-content/uploads/2023/02/computerpng.parspng.com-4.png",
      color: "linear-gradient(135deg, #380036 0%, #0CBABA 74%)"
    },
  ];

  // Set up intersection observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });

    if (productRowRef.current) {
      observer.observe(productRowRef.current);
    }

    return () => {
      if (productRowRef.current) {
        observer.unobserve(productRowRef.current);
      }
    };
  }, []);

  // Handle animation reset when switching between products
  useEffect(() => {
    if (hoveredProduct !== null) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [hoveredProduct]);

  // Handle mouseEnter with slight delay to prevent accidental hovers
  const handleMouseEnter = (productId) => {
    // Clear any existing timers to prevent race conditions
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    
    // Set a slight delay for better user experience
    hoverTimerRef.current = setTimeout(() => {
      setHoveredProduct(productId);
    }, 50);
  };

  // Handle mouseLeave with a slight delay for smoother transitions
  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    
    hoverTimerRef.current = setTimeout(() => {
      setHoveredProduct(null);
    }, 100);
  };

  return (
    <div className="fullWindow">
      <div className="mainBox">
        {/* Banner section with improved parallax effect */}
        <div className="banner parallax">
          <div className="imageContainer">
            {/* Banner image container - background image is in CSS */}
            <div className="glow-overlay"></div>
          </div>
          <div className="subcribe">
            <div className="contentsdiv">
              <div>
                <p className="squad-text">GAMING SQUAD</p>
                <p className="gaming">Radicle Gaming</p>
                <p className="partnership-text">Exclusive partnership</p>
              </div>
            </div>
            <div className="arrow">
              <div>
                <IoIosArrowForward className="arrowText pulse" />
              </div>
            </div>
            <div className="sub">
              <div className="exclusive">
                <p>Subscribe for Exclusive Content</p>
              </div>
              <div>
                <button className="subscribe-button">
                  <IoArrowForwardCircleSharp className="iconsbtn" /> Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product showcase section - improved layout and animations */}
        <div className="product-row-container">
          <div 
            ref={productRowRef}
            className="product-row fade-in"
          >
            {products.map((product, index) => {
              const isExpanded = (hoveredProduct === product.id) || (index === 0 && hoveredProduct === null);
              
              return (
                <div 
                  key={product.id}
                  className={`product-card ${isExpanded ? 'expanded' : ''}`}
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                  style={isExpanded ? { background: product.color } : {}}
                >
                  <div className="product-content">
                    {isExpanded ? (
                      <>
                        <div className="product-details">
                          <p className="subheading-prebuild">
                            <b><RiShieldKeyholeLine className="prebuild-icon spin-on-hover" /> Prebuild</b>
                          </p>
                          <h1 className="heading">{product.name}</h1>
                          <p className="subheading">{product.description}</p>
                          
                          <div className="rowCIricle">
                            <div className="pink"></div>
                            <div className="yellow"></div>
                            <div className="blue"></div>
                            <div className="black"></div>
                          </div>
                          
                          <h1 className="price">{product.price}</h1>
                          
                          <button className="buyNow-button">
                            <IoArrowForwardCircleSharp className="iconsbtn-buynow" />
                            <span>Buy Now</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="compact-product-image">
                          <img 
                            className="imgage floating" 
                            src={product.image}
                            alt={product.name} 
                            loading="lazy"
                          />
                        </div>
                        <div className="PcName" >
                          <span>{product.name}</span>
                        </div>
                      </>
                    )}
                  </div>
                  {isExpanded && (
                    <img
                      className={`product-image ${isAnimating ? 'animate-in' : ''}`}
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  )}
                  {isExpanded && <div className="card-glow"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quick;