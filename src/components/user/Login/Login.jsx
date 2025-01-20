import React, { useState } from 'react';
import './login.css';
import Apple from '../../../Images/LoginWith/apple.png';
import Linkedin from '../../../Images/LoginWith/Linkedin.png';
import Google from '../../../Images/LoginWith/Google.png';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import logo from '../../../Images/LoginWith/neo_tokyo-logo.png';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="quote-container">
          <p className="quote" style={{ color: 'black', textAlign: 'left' }}>
            𝖭𝖤𝖶 𝖳𝖧𝖨𝖭𝖪𝖨𝖭𝖦 𝖤𝖭𝖣𝖫𝖤𝖲𝖲 𝖯𝖮𝖲𝖲𝖨𝖡𝖨𝖫𝖨𝖳𝖨𝖤𝖲
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="button-container">
          <button
            className={`btn black-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`btn black-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Toggle between Login and Register Form */}
        {isLogin ? (
          <div className="form-container">
            <h2>Login</h2>
            <input type="email" placeholder="Email" className="input-box" />
            <input type="password" placeholder="Password" className="input-box" />
            <div className="icons">
              <div className="google">
                <img src={Google} alt="Google" />
              </div>
              <div className="apple">
                <img src={Apple} alt="Apple" />
              </div>
              <div className="Linkedin">
                <img src={Linkedin} alt="LinkedIn" />
              </div>
            </div>
            <button className="team-buttons">
              <IoArrowForwardCircleSharp className="iconsbtn-team" />
              <span className="teams" style={{ color: 'white' }}>Login</span>
            </button>
          </div>
        ) : (
          <div className="Register-Container">
            <h2>What's Your Email</h2>
            <p>Psst.. It’s a secret. we've got your back</p>
            <input type="email" placeholder="Email" className="input-box" />
            <div className="check">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <span>
                  Yes; nEO tOKYO may use and share my email to enable personalized advertising with third parties (e.g. Google, Twitch) and to send me info about new releases, updates, events, or other related content.
                </span>
              </div>
            </div>
            <p>yOU CAN ALSO CREATE AN aCCOUNT WITH</p>
            <div className="icons">
              <div className="google">
                <img src={Google} alt="Google" />
              </div>
              <div className="apple">
                <img src={Apple} alt="Apple" />
              </div>
              <div className="Linkedin">
                <img src={Linkedin} alt="LinkedIn" />
              </div>
            </div>
            <button className="team-buttons">
              <IoArrowForwardCircleSharp className="iconsbtn-team" />
              <span className="teams" style={{ color: 'white' }}>SIGN UP</span>
            </button>
            <h3 style={{ textAlign: 'center' }}>
              ALLREADY HAVE AN ACCOUNT? <b>SIGN IN</b>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
