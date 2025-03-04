import React, { useState } from 'react';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import Apple from '../../../Images/LoginWith/apple.png';
 import Linkedin from '../../../Images/LoginWith/Linkedin.png';
  import Google from '../../../Images/LoginWith/Google.png';
  import logo from '../../../Images/LoginWith/neo_tokyo-logo.png'
  import './login.css'
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="logo">
          <img 
            src={logo} 
            alt="Logo" 
            className="hover:opacity-90 transition-opacity duration-300"
          />
        </div>
        <div className="quote-container">
          <p className="quote text-black text-left font-serif tracking-wider animate-fade-in">
            𝖭𝖤𝖶 𝖳𝖧𝖨𝖭𝖪𝖨𝖭𝖦 𝖤𝖭𝖣𝖫𝖤𝖲𝖲 𝖯𝖮𝖲𝖲𝖨𝖡𝖨𝖫𝖨𝖳𝖨𝖤𝖲
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="button-container shadow-md rounded-full bg-gray-200 p-1">
          <button
            className={`btn ${
              isLogin
                ? 'black-btn bg-black text-white'
                : 'text-gray-600 hover:text-black'
            } transition-all duration-300 transform hover:scale-105`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`btn ${
              !isLogin
                ? 'black-btn bg-black text-white'
                : 'text-gray-600 hover:text-black'
            } transition-all duration-300 transform hover:scale-105`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <div className="form-container animate-slide-up">
            <h2 className="text-3xl font-bold mb-8 text-center">Welcome Back</h2>
            <div className="relative mb-6">
              <input 
                type="email" 
                placeholder="Email" 
                className="input-box focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300" 
              />
            </div>
            <div className="relative mb-6">
              <input 
                type="password" 
                placeholder="Password" 
                className="input-box focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300" 
              />
            </div>
            <div className="icons gap-4">
              {[Google, Apple, Linkedin].map((icon, index) => (
                <div 
                  key={index}
                  className="transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl bg-white"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img 
                    src={icon} 
                    alt={`Social ${index + 1}`} 
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <button 
              className="team-buttons group hover:bg-gray-900 transition-all duration-300"
              onMouseEnter={() => setIsHovered('login')}
              onMouseLeave={() => setIsHovered(false)}
            >
              <IoArrowForwardCircleSharp className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
              <span className="teams">Login</span>
            </button>
          </div>
        ) : (
          <div className="Register-Container animate-slide-up">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              What's Your Email
            </h2>
            <p className="text-gray-600 italic mb-8">
              Psst.. It's a secret. we've got your back
            </p>
            <input 
              type="email" 
              placeholder="Email" 
              className="input-box focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300" 
            />
            <div className="check hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black transition-colors duration-300"
                />
                <span className="text-gray-600 text-sm leading-relaxed">
                  Yes; nEO tOKYO may use and share my email to enable personalized advertising with third parties (e.g. Google, Twitch) and to send me info about new releases, updates, events, or other related content.
                </span>
              </div>
            </div>
            <p className="text-gray-500 uppercase text-sm font-medium mt-6">
              yOU CAN ALSO CREATE AN aCCOUNT WITH
            </p>
            <div className="icons gap-4">
              {[Google, Apple, Linkedin].map((icon, index) => (
                <div 
                  key={index}
                  className="transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl bg-white"
                >
                  <img 
                    src={icon} 
                    alt={`Social ${index + 1}`} 
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <button 
              className="team-buttons group hover:bg-gray-900 transition-all duration-300"
            >
              <IoArrowForwardCircleSharp className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
              <span className="teams">SIGN UP</span>
            </button>
            <h3 className="text-center mt-6">
              ALREADY HAVE AN ACCOUNT?{' '}
              <button 
                onClick={() => setIsLogin(true)}
                className="font-bold hover:underline transition-all duration-300"
              >
                SIGN IN
              </button>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;