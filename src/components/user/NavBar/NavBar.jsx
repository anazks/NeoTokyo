import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
const openCartPage = ()=>{
  navigate("/cart")
}
  return (
    <div className='NavBar'>
      <div className='left'>
        {/* Add logo or branding here */}
      </div>
        <div className='contents'>
          <div>Products</div>
          <div>Solutions</div>
          <div>Logo</div>
          <div>Store</div>
          <div>Support</div>
        </div>
      <div className='right' style={{width:'30%'}}>
        <div className='buttons'>
          <button className='cartText' onClick={openCartPage}>Cart</button>
          <button className='loginBtn'>Login</button>
        </div>
        <button className='menuBtn' onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      {isSidebarOpen && (
        <div className='sidebar'>
          <div onClick={toggleSidebar}>Products</div>
          <div onClick={toggleSidebar}>Solutions</div>
          <div onClick={toggleSidebar}>Logo</div>
          <div onClick={toggleSidebar}>Store</div>
          <div onClick={toggleSidebar}>Support</div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
