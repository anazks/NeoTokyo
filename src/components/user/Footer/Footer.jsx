import React from 'react';
import './footer.css';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';

function Footer() {
  return (
    <div className="footer">
      {/* Top Div */}
      <div className="top-div">
      <div className="left-content">
        <span style={{color:'white'}}>
            Building Experiences<br />
            <span className="subtext" style={{color:'white'}}>Since ‘20s</span>
        </span>
        </div>
        <button className="team-button">
                    <IoArrowForwardCircleSharp className='iconsbtn-team' />
                    <span className='Team' style={{ color: 'black' }} >Get in Touch </span>
        </button>
      </div>

      {/* Banner Div */}
      <div className="banner-div">
        <div className='lefrtBanner'>

        </div>
        <div className='righttBanner'>
            <img src="https://s3-alpha-sig.figma.com/img/13ad/e3d6/80bfabc003d683a5e33d97232beb0275?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gj~l2gR2RydNH5eWpYyAh0gT3ZOfiYG4Jmoj119jnKnPCHHy~06lQWgz78FWVWwWKFf3LczsRo5MMaXPwgUSzB6tWypSt~TPd7xkwHpCBm95fzLBADtKJd4R-mEDR89KYQqvNZmhcdk9WrIDiCZR2YMs1PRwMRPcND55xYCDW5TgsLief8TazV6xTeNmcJmqpfnRnsuT8apdRyNAaQ5vN~rWQV1gpNUGf6~ejYjCFStQi4YG~YWnOgOdklmnq13JGXZdXQ0-ehdp9V~a-gYJWg7h9CKUlzxJZT-royrr5rOp5UyrXW2nt0ke6AtVv1v7uHA4mBrcsjN4GqvCbkXPYQ__" alt="" />
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
      <br /><br />
    </div>
  );
}

export default Footer;
