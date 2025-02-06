// import React from "react";
// import "./loginPopup.css";

// function LoginPopup({ isOpen, onClose }) {
//   return (
//     <div className={`login-popup ${isOpen ? "open" : ""}`}>
//       {/* Close Button */}
//       <button className="close-btn" onClick={onClose}>
//         ×
//       </button>

//       <h2>Sign In</h2>

//       {/* Login Form */}
//       <form>
//         <div className="input-group">
//           <label>Email</label>
//           <input type="email" placeholder="Enter your email" required />
//         </div>

//         <div className="input-group">
//           <label>Password</label>
//           <input type="password" placeholder="Enter your password" required />
//         </div>

//         <div className="options">
//           <label>
//             <input type="checkbox" /> Remember me
//           </label>
//           <a href="/forgot-password" className="forgot-link">
//             Forgot Password?
//           </a>
//         </div>

//         <button type="submit" className="login-btn">
//           Sign In
//         </button>
//       </form>

//       <p className="signup-link">
//         Don’t have an account? <a href="/register">Sign Up</a>
//       </p>
//     </div>
//   );
// }

// export default LoginPopup;

import React from "react";
import "./loginPopup.css";

function LoginPopup({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay Background */}
      {isOpen && <div className="overlay" onClick={onClose}></div>}

      {/* Sidebar Popup */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Close Button */}
        {/* <button className="close-btn" onClick={onClose}>
          ×
        </button> */}

        {/* Sidebar Content */}
        <div className="sidebar-content">
          {/* <div className="auth-buttons">
            <button className="register-btn">Register</button>
            <button className="signin-btn">Sign In</button>
          </div> */}

          {/* Sidebar Menu */}
          <ul>
            <li>Store</li>
            <li>Solutions</li>
            <li>Products</li>
            <li>Support</li>
            <li>RTXPoweredPC</li>
            <li>NeoTokyo.Comfig</li>
            <li>Coming Soon</li>
          </ul>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>HQ-Kochi</h3>
            <p>Floor no.2, Koroth Arcade,</p>
            <p>Vennala High School Rd.</p>
            <p>Opposite to V-Guard, Vennala</p>
            <p>Kochi, Kerala 682028</p>
            <p>91-8848133939</p>
            <p>info@neotokyo.in</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPopup;
