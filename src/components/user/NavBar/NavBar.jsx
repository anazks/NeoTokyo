// NavBar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Images/LoginWith/neo_tokyo-logo.png'
import './nav.css';

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
     
      
      <div className="nav-links">
        <div><Link to={'/products'}>Products</Link></div>
        <div>Solutions</div>
        <div> <img src={logo} style={{height:'70px',width:'90px'}} alt="Logo" className="logo-img" /> </div>
        <div>Store</div>
        <div><Link to={'/support'}>Support</Link></div>
      <div className="nav-buttons">
        <button className="cart-btn" onClick={() => navigate('/cart')}>Cart</button>
        <button className="login-btn">Login</button>
        <button className="menu-btn" onClick={() => setIsSidebarOpen(true)}>☰</button>
      </div>
      </div>
      <div className='Logo-Responsive'> <Link to={'/'}><img src={logo} style={{height:'70px',width:'90px'}} alt="Logo" className="logo-img" /></Link> </div>


      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>×</button>
        <div className="sidebar-links">
          <div onClick={() => setIsSidebarOpen(false)}>Products</div>
          <div onClick={() => setIsSidebarOpen(false)}>Solutions</div>
          <div onClick={() => setIsSidebarOpen(false)}>Store</div>
          <div onClick={() => setIsSidebarOpen(false)}>Support</div>
          <div onClick={() => setIsSidebarOpen(false)}>Cart</div>
          <button className="login-btn">Login</button>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
    </nav>
  );
}

export default NavBar;