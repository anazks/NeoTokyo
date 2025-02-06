// import React, { useEffect, useState } from 'react';
// import './WelcomeHome.css';

// const WelcomeHome = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={`welcome-container ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="line-container">
//         <div className="vertical-line">
//           <div className="line-left"></div>
//           <div className="line-right"></div>
//         </div>
//         <div className="sub-welcome">
//         <div className="waviy">
//                 <span style={{ "--i": 1 }}>𝙽</span>
//                 <span style={{ "--i": 2 }}>𝙴</span>
//                 <span style={{ "--i": 3 }}>𝙾</span>
//                 <span style={{ "--i": 4 }}> </span>
//                 <span style={{ "--i": 5 }}>𝚃</span>
//                 <span style={{ "--i": 6 }}>𝙾</span>
//                 <span style={{ "--i": 7 }}>𝙺</span>
//                 <span style={{ "--i": 8 }}>𝚈</span>
//                 <span style={{ "--i": 9 }}>𝙾</span>
//         </div>
//                 {/* <h1 className="titles">𝙽𝙴𝙾 𝚃𝙾𝙺𝚈𝙾</h1> */}
//                         {/* <div className="subdata">
//                                 <span>EXPERIENCE NOW</span>
//                                 <span>Endless Possibilities</span>
//                         </div> */}
//                 </div>
//         {/* <h1 className="title">𝙽𝙴𝙾 𝚃𝙾𝙺𝚈𝙾</h1> */}
//         {/* <div className="waviy">
//                 <span style={{ "--i": 1 }}>N</span>
//                 <span style={{ "--i": 2 }}>E</span>
//                 <span style={{ "--i": 3 }}>O</span>
//                 <span style={{ "--i": 4 }}>-</span>
//                 <span style={{ "--i": 5 }}>T</span>
//                 <span style={{ "--i": 6 }}>O</span>
//                 <span style={{ "--i": 7 }}>K</span>
//                 <span style={{ "--i": 8 }}>Y</span>
//                 <span style={{ "--i": 9 }}>O</span>
//         </div> */}

//       </div>
//       <div className="city-image">

//       </div>
//     </div>
//   );
// };

// export default WelcomeHome;

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import cityImage from "../../../Images/city.png";
import Quick from "../../../components/user/QuickPiks/Quick";
import Gaming from "../../../components/user/GamingR1/Gaming";
import FeedBack from "../../../components/user/FeedBack/FeedBack";
import AboutUs from "../../../components/user/AboutUs/AboutUs";
import Quality from "../../../components/user/AboutUs/Quality";
import Directional from "../../../components/user/AboutUs/Directional";
import PriorityOne from "../../../components/user/PriorityOne/PriorityOne";
import Blog from "../../../components/user/Blog/Blog";
import Support from "../../../components/user/Support/Support";
import Footer from "../../../components/user/Footer/Footer";
import NavBar from "../NavBar/NavBar";
import GamingPage from "../../user/Gamingpage/Gamingpage";
import WelcomeSection from "./welcomepage";


// import './WelcomeHome.css';
const WelcomeHome = () => {
  const [scrollY, setScrollY] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const scrollTop = wrapperRef.current.scrollTop;
        setScrollY(scrollTop);
      }
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const welcomeImageVariants = {
    hidden: { x: 0 },
    visible: {
      x: scrollY > 300 ? "100%" : 0, // Adjust value (300) based on when to trigger the effect
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={wrapperRef}
      className="content-wrapper"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh", // Ensure full viewport height
        overflowX: "hidden", // Hide horizontal scrollbar
        overflowY: "scroll", // Allow vertical scrolling
        display: "flex",
        flexDirection: "column",
        scrollbarWidth: "none", // Firefox specific: hides scrollbar
        WebkitOverflowScrolling: "touch", // Smooth scrolling for iOS
      }}
    >
      <NavBar />

      {/* Background City Image */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${cityImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          filter: "blur(3px)",
        }}
        animate={{
          scale: 1 + scrollY / 1000,
          y: -scrollY / 3,
        }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: -1,
        }}
      />

      {/* WelcomeSection */}
      <motion.div
        initial="hidden"
        animate={scrollY > 0 ? "visible" : "hidden"}
        variants={welcomeImageVariants}
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          scrollSnapAlign: "start",
          marginBottom: "80px",
          zIndex: 2,
        }}
      >
        <WelcomeSection />
      </motion.div>

      {/* All Sections */}
      {[
        Quick,
        Gaming,
        FeedBack,
        AboutUs,
        Quality,
        Directional,
        PriorityOne,
        GamingPage,
        // Support,
        Footer,
      ].map((Component, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          style={{
            position: "relative",
            minHeight: "100vh",
            width: "100%",
            overflow: "hidden",
            scrollSnapAlign: "start",
            marginBottom: "80px",
            zIndex: 2,
          }}
        >
          <Component />
        </motion.div>
      ))}
    </div>
  );
};

export default WelcomeHome;
