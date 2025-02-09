import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Images/LoginWith/neo_tokyo-logo.png";
import "./nav.css";
import LoginPopup from "../Login/LoginPopup";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/solutions">Solutions</Link>

          {/* Centered Logo */}
          <div className="logo-container">
            <Link to="/">
              <img src={logo} className="logo-img" alt="Neo Tokyo Logo" />
            </Link>
          </div>

          <Link to="/store">Store</Link>
          <Link to="/support">Support</Link>
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

      {/* Sidebar Code Inside NavBar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          ☰
        </button>

        {/* Register & Sign In Buttons */}
        <div className="buttons-login">
          <button className="cart-btn">Register</button>
          <button className="cart-btn">Sign In</button>
        </div>

        {/* Sidebar Links */}
        <div className="sidebar-links">
          <Link to="/store" onClick={() => setIsSidebarOpen(false)}>
            Store
          </Link>
          <Link to="/solutions" onClick={() => setIsSidebarOpen(false)}>
            Solutions
          </Link>
          <Link to="/products" onClick={() => setIsSidebarOpen(false)}>
            Products
          </Link>
          <Link to="/support" onClick={() => setIsSidebarOpen(false)}>
            Support
          </Link>
          <Link to="/rtx-pc" onClick={() => setIsSidebarOpen(false)}>
            RTX Powered PC
          </Link>
        </div>

        {/* Coming Soon Section */}
        <div className="soon">
          <h2>NeoTokyo.Config</h2> <span>Coming Soon</span>
        </div>

        {/* HQ Address */}
        <div className="hq-info">
          <h3>HQ - Kochi</h3>
          <p>
            Floor no. 2, Koroth Arcade,
            <br />
            Vennala High School Rd,
            <br />
            Opposite to V-Guard, Vennala,
            <br />
            Kochi, Kerala 682028
          </p>
          <p>91 - 8848133939</p>
          <p>info@neotokyo.in</p>
        </div>

        {/* Social Media Buttons */}
        <div className="social-buttons">
          <button className="social-btn">IG</button>
          <button className="social-btn">X</button>
          <button className="social-btn">IN</button>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
      {isLoginOpen && (
        <div className="overlay" onClick={() => setIsLoginOpen(false)} />
      )}

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </nav>
  );
}

export default NavBar;
