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
import GamingPage from "../../user/Gamingpage/Gamingpage";
import Footer from "../../../components/user/Footer/Footer";
import NavBar from "../NavBar/NavBar";
import WelcomeSection from "./welcomepage";

const WelcomeHome = () => {
  const [scrollY, setScrollY] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        setScrollY(wrapperRef.current.scrollTop);
      }
    };

    const wrapper = wrapperRef.current;
    if (wrapper) wrapper.addEventListener("scroll", handleScroll);

    return () => {
      if (wrapper) wrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Background City Image with Zoom-in Effect */}
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
        // initial={{ scale: 1.1 }} // Slight zoom-in effect
        // animate={{ scale: 1 }}
        // transition={{ duration: 2, ease: "easeOut" }}
        initial={{ scale: 2 }} // Slight zoom-in effect
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      {/* Dark Overlay for Readability */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: -1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Stacked Sections with Slide-up Animation */}
      {[
        WelcomeSection,
        Quick,
        Gaming,
        FeedBack,
        // AboutUs,
        // Quality,
        Directional,
        PriorityOne,
        GamingPage,
        Footer,
      ].map((Component, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }} // Slide-up effect
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "sticky",
            top: 0,
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${cityImage})`,
            zIndex: index + 1,
            transform: `translateY(${index * 10}px)`,
          }}
        >
          <Component />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WelcomeHome;
