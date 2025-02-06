import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import cityImage from "../../../Images/city.png";
import { useInView } from "react-intersection-observer"; // Import the hook

import Quick from "../../../components/user/QuickPiks/Quick";
import Gaming from "../../../components/user/GamingR1/Gaming";
import FeedBack from "../../../components/user/FeedBack/FeedBack";
import AboutUs from "../../../components/user/AboutUs/AboutUs";
import Quality from "../../../components/user/AboutUs/Quality";
import Directional from "../../../components/user/AboutUs/Directional";
import PriorityOne from "../../../components/user/PriorityOne/PriorityOne";
import GamingPage from "../../user/Gamingpage/Gamingpage";
import Support from "../../../components/user/Support/Support";
import Footer from "../../../components/user/Footer/Footer";
import NavBar from "../NavBar/NavBar";
import WelcomeSection from "./welcomepage";


// import './WelcomeHome.css';
const WelcomeHome = () => {
  const [scrollY, setScrollY] = useState(0);
  const wrapperRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: false, // Re-trigger the observer each time the section comes into view
    threshold: 0.2, // 20% of the component must be in view to trigger
  });

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

  return (
    <div
      ref={wrapperRef}
      className="content-wrapper"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        overflowY: "auto",
        scrollbarWidth: "none",
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
          scale: 1 + scrollY / 1000, // Increase the scale of the image as you scroll
          y: -scrollY / 3, // Parallax effect to move the image upwards as you scroll
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
        ref={ref} // Attach the observer to this section
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
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
          // variants={fadeInUp}
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
