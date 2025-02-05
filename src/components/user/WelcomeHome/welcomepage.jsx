import React from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import cityImage from "../../../Images/city.png";

const WelcomeSection = () => {
  const { scrollY } = useScroll();
  const scrollYMotionValue = useMotionValue(scrollY.get()); // Create a motion value from scrollY

  // Expanding Image Effect
  const imageWidth = useTransform(
    scrollYMotionValue,
    [0, 600],
    ["250px", "900px"]
  );
  const imageHeight = useTransform(
    scrollYMotionValue,
    [0, 600],
    ["80vh", "100vh"]
  );

  return (
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
          height: imageHeight,
          width: imageWidth,
          backgroundImage: `url(${cityImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          zIndex: 1,
        }}
      />

      {/* Text - NEO & TOKYO */}
      <h1
        style={{
          position: "absolute",
          left: "28%",
          fontSize: "3.8rem",
          fontWeight: "bold",
          letterSpacing: "0.3em",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          zIndex: 2,
        }}
      >
        NEO
      </h1>

      <h1
        style={{
          position: "absolute",
          right: "18%",
          fontSize: "3.8rem",
          fontWeight: "bold",
          letterSpacing: "0.3em",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          zIndex: 2,
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
  );
};

export default WelcomeSection;
