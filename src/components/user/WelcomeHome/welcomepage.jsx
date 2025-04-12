import React, { useEffect, useState, useRef } from "react";
import './style.css';
import Tokyo from '../../../Images/city.png'
import Drone from "../Drone/Drone";

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
  
  // Modified: Ensure the image is always full width when revealed
  const imageWidth = parallaxActive ? 100 : 20;
  const imageOpacity = Math.min(1, scrollY / 300);
  
  // Show subtitle only after reveal (when scrolling is deep)
  const subtitleVisible = parallaxDeep;

  // Dynamic inline styles for the center image
  const centerImageStyle = {
    width: `${imageWidth}%`,
    opacity: imageOpacity,
    filter: "grayscale(1) contrast(1.2)", // Keeping the black and white effect
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  // Drone visibility style - positioned above the NEO TOKYO lettering
  const droneStyle = {
    position: "absolute",
    zIndex: 99, // Higher z-index to ensure it appears on top of all elements
    top: "0", // Position above the text (which is at 70%)
    left: "20%", // Center horizontally
    transform: "translate(-50%, -50%)", // Center the drone
    opacity: 1, // Always visible
    transition: "opacity 1s ease-in-out, transform 1.5s ease-in-out",
    // Add a slight hover animation
    animation: "droneHover 4s infinite ease-in-out"
  };

  return (
    <div 
      ref={sectionRef}
      className={`parallax-container ${inView ? 'in-view' : ''} ${parallaxActive ? 'parallax-active' : ''} ${parallaxDeep ? 'parallax-deep' : ''}`}
      style={{ position: "relative", overflow: "hidden" }} // Ensure relative positioning
    >
      {/* Left Panel */}
      <div 
        className="panel panel-left"
        style={{ 
          transform: `translateX(-${panelTransformPercentage}%)`,
          background: "linear-gradient(45deg, #111, #222)", // Darker panels
          zIndex: 3 // Lower than drone
        }}
      />

      {/* Right Panel */}
      <div 
        className="panel panel-right"
        style={{ 
          transform: `translateX(${panelTransformPercentage}%)`,
          background: "linear-gradient(-45deg, #111, #222)", // Darker panels
          zIndex: 3 // Lower than drone
        }}
      />

      {/* Center Image - Revealed */}
      <div
        className="center-image"
        style={{
          ...centerImageStyle,
          backgroundImage: `url(${Tokyo})`,
          // Ensure the image covers the entire width when revealed
          left: "0",
          transform: "none",
          width: `${imageWidth}%`,
          zIndex: 1 // Lowest z-index
        }}
      />
      
      {/* Text - NEO */}
      <div
        className="text text-left neo-font"
        style={{ 
          opacity: Math.max(0, 1 - scrollY / 300),
          fontFamily: "'Blade Runner', 'Orbitron', sans-serif",
          borderBottom: "none", // Remove underline
          zIndex: 4 // Higher than panels, lower than drone
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
          borderBottom: "none", // Remove underline
          zIndex: 4 // Higher than panels, lower than drone
        }}
      >
        TOKYO
      </div>
      
      {/* Drone positioned above NEO TOKYO lettering */}
      <div style={droneStyle}>
        <Drone />
      </div>

      {/* Subtitle that appears ONLY after scrolling deep */}
      {subtitleVisible && (
        <div 
          className="subtitle" 
          style={{ 
            opacity: parallaxDeep ? 1 : 0,
            zIndex: 5 // Above text, below drone
          }}
        >
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

      {/* Adding a style tag for the drone hover animation */}
      <style>
        {`
          @keyframes droneHover {
            0% { transform: translate(-50%, -50%); }
            50% { transform: translate(-50%, calc(-50% - 10px)); }
            100% { transform: translate(-50%, -50%); }
          }
        `}
      </style>
    </div>
  );
};

export default ParallaxRevealSection;