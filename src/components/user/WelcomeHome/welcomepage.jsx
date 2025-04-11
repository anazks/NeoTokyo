import React, { useEffect, useState, useRef } from "react";
import './style.css';
import Tokyo from '../../../Images/TokyoCity.jpg'

const ParallaxRevealSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if section is in viewport
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight/2 && rect.bottom >= 0;
        setInView(isInView);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax effects based on scroll
  const parallaxActive = scrollY > 200;
  const parallaxDeep = scrollY > 300;
  const panelTransformPercentage = Math.min(100, scrollY / 5);
  const imageWidth = Math.min(100, 20 + scrollY / 3);
  const imageOpacity = Math.min(1, scrollY / 300);
  
  // Show subtitle only after reveal (when scrolling is deep)
  const subtitleVisible = parallaxDeep;

  // Dynamic inline styles
  const centerImageStyle = {
    width: `${imageWidth}%`,
    opacity: imageOpacity,
    filter: "grayscale(1) contrast(1.2)" // Black and white effect
  };

  return (
    <div 
      ref={sectionRef}
      className={`parallax-container ${inView ? 'in-view' : ''} ${parallaxActive ? 'parallax-active' : ''} ${parallaxDeep ? 'parallax-deep' : ''}`}
    >
      {/* Left Panel */}
      <div 
        className="panel panel-left"
        style={{ 
          transform: `translateX(-${panelTransformPercentage}%)`,
          background: "linear-gradient(45deg, #111, #222)" // Darker panels
        }}
      />

      {/* Right Panel */}
      <div 
        className="panel panel-right"
        style={{ 
          transform: `translateX(${panelTransformPercentage}%)`,
          background: "linear-gradient(-45deg, #111, #222)" // Darker panels
        }}
      />

      {/* Center Image - Revealed */}
      <div
        className="center-image"
        style={{
          ...centerImageStyle,
          backgroundImage: `url(${Tokyo})`
        }}
      />

      {/* Text - NEO */}
      <div
        className="text text-left neo-font"
        style={{ 
          opacity: Math.max(0, 1 - scrollY / 300),
          fontFamily: "'Blade Runner', 'Orbitron', sans-serif",
          borderBottom: "none" // Remove underline
        }}
      >
        NEO
      </div>

      {/* Text - TOKYO */}
      <div
        className="text text-right neo-font"
        style={{ 
          opacity: Math.max(0, 1 - scrollY / 300),
          fontFamily: "'Blade Runner', 'Orbitron', sans-serif",
          borderBottom: "none" // Remove underline
        }}
      >
        TOKYO
      </div>

      {/* Subtitle that appears ONLY after scrolling deep */}
      {subtitleVisible && (
        <div className="subtitle" style={{ opacity: parallaxDeep ? 1 : 0 }}>
          <div className="tagline">
            Experience the Power of Personalization
          </div>
          <p className="headline">
            Endless Possibilities
          </p>
          <div className="cta-container">
            <button className="cta-button">
              <span className="cta-text">EXPERIENCE NOW</span>
              <span className="cta-icon">→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParallaxRevealSection;