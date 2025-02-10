import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cityImage from "../../../Images/city.png";

const WelcomeSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update scroll position on scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Get the scroll position from the window
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth); // Update screen width on resize
    };

    window.addEventListener("scroll", handleScroll); // Listen for scroll events
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
      window.removeEventListener("resize", handleResize); // Cleanup on resize
    };
  }, []);

  // Dynamic styles for image expansion based on scroll
  const imageWidth = Math.min(900, 250 + scrollY / 2); // Max 900px width, increases as you scroll
  const imageHeight = Math.min(100, 80 + scrollY / 10); // Max 100vh height, increases as you scroll

  // Determine font size based on screen width
  let fontSize = "3.8rem"; // Default font size
  let leftPosition = "28%";
  let rightPosition = "18%";

  if (screenWidth <= 992) {
    fontSize = "6vw"; // Adjust font size for tablet screens
    leftPosition = "22%"; // Adjust left position for tablet screens
    rightPosition = "22%"; // Adjust right position for tablet screens
  }
  if (screenWidth <= 768) {
    fontSize = "8vw"; // Increase font size for smaller screens
    leftPosition = "15%"; // Adjust left position for smaller screens
    rightPosition = "15%"; // Adjust right position for smaller screens
  }
  if (screenWidth <= 576) {
    fontSize = "10vw"; // Larger text for very small screens
    leftPosition = "10%"; // Adjust left position for very small screens
    rightPosition = "10%"; // Adjust right position for very small screens
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Fade-in and slide-up effect
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        scrollSnapAlign: "start",
        zIndex: 2,
      }}
    >
      <div
        className="welcome-container"
        style={{
          position: "relative",
          height: "100vh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#000",
          overflow: "hidden",
        }}
      >
        {/* Expanding Image */}
        <motion.div
          style={{
            position: "absolute",
            top: "17vh",
            width: `${imageWidth}px`, // Dynamically adjust width
            height: `${imageHeight}vh`, // Dynamically adjust height
            backgroundImage: `url(${cityImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            zIndex: 1,
            transition: "all 0.2s ease-out", // Smooth transition
            objectFit: "cover", // Ensure the image covers the area without distortion
          }}
        />

        {/* Text - NEO */}
        <h1
          style={{
            position: "absolute",
            left: leftPosition,
            fontSize: fontSize,
            fontWeight: "bold",
            letterSpacing: "0.3em",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            zIndex: 2,
            whiteSpace: "nowrap",
          }}
        >
          NEO
        </h1>

        {/* Text - TOKYO */}
        <h1
          style={{
            position: "absolute",
            right: rightPosition,
            fontSize: fontSize,
            fontWeight: "bold",
            letterSpacing: "0.3em",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            zIndex: 2,
            whiteSpace: "nowrap",
          }}
        >
          TOKYO
        </h1>

        {/* Subtitle & Description */}
        <div
          style={{
            position: "absolute",
            bottom: "30vh",
            right: "18%",
            textAlign: "right",
            lineHeight: "1.5",
            fontWeight: "bold",
            zIndex: 2,
          }}
        >
          <hr
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#DA0037",
              border: "none",
              margin: "12px 0",
            }}
          />
          <div style={{ fontSize: "1rem", fontWeight: "normal" }}>
            Experience the Power of Personalization
          </div>
          <p style={{ fontSize: "1.2rem", fontWeight: "700", top: "600px" }}>
            EXPERIENCE NOW
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Endless Possibilities
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeSection;
