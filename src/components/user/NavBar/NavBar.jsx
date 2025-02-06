import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Images/LoginWith/neo_tokyo-logo.png";
import "./nav.css";
import LoginPopup from "../Login/LoginPopup"; // Import the Login Popup component

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Nav Links */}
        <div className="nav-links">
          <Link to={"/products"}>Products</Link>
          <Link to={"/solutions"}>Solutions</Link>

          {/* Centered Logo */}
          <div className="logo-container">
            <Link to={"/"}>
              <img src={logo} className="logo-img" alt="Neo Tokyo Logo" />
            </Link>
          </div>

          <Link to={"/store"}>Store</Link>
          <Link to={"/support"}>Support</Link>
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <button className="cart-btn" onClick={() => navigate("/cart")}>
            Cart
          </button>
      
          <button className="menu-btn" onClick={() => setIsSidebarOpen(true)}>
            ☰
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          ✖
        </button>
        <div className="buttons-login">
            <button className="cart-btn" onClick={() => navigate("/cart")}>
                Login
            </button>
            <button className="cart-btn" onClick={() => navigate("/cart")}>
                Register
            </button>
        </div>
        <div className="sidebar-links">
          <Link to={"/products"} onClick={() => setIsSidebarOpen(false)}>
            Products
          </Link>
          <Link to={"/solutions"} onClick={() => setIsSidebarOpen(false)}>
            Solutions
          </Link>
          <Link to={"/store"} onClick={() => setIsSidebarOpen(false)}>
            Store
          </Link>
          <Link to={"/about"} onClick={() => setIsSidebarOpen(false)}>
            About
          </Link>
          <Link to={"/support"} onClick={() => setIsSidebarOpen(false)}>
            Support
          </Link>


          <div className="soon">
             <h2>NeoTokyo.Config </h2><span>Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)} />} 
      {isLoginOpen && <div className="overlay" onClick={() => setIsLoginOpen(false)} />} 

      {/* Login Popup Component */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </nav>
  );
}

export default NavBar;
