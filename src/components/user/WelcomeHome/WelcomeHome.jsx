import React, { useEffect, useState } from 'react';
import './WelcomeHome.css';

const WelcomeHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`welcome-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="line-container">
        <div className="vertical-line">
          <div className="line-left"></div>
          <div className="line-right"></div>
        </div>
        <div className="sub-welcome">
        <div className="waviy">
                <span style={{ "--i": 1 }}>𝙽</span>
                <span style={{ "--i": 2 }}>𝙴</span>
                <span style={{ "--i": 3 }}>𝙾</span>
                <span style={{ "--i": 4 }}> </span>
                <span style={{ "--i": 5 }}>𝚃</span>
                <span style={{ "--i": 6 }}>𝙾</span>
                <span style={{ "--i": 7 }}>𝙺</span>
                <span style={{ "--i": 8 }}>𝚈</span>
                <span style={{ "--i": 9 }}>𝙾</span>
        </div>
                {/* <h1 className="titles">𝙽𝙴𝙾 𝚃𝙾𝙺𝚈𝙾</h1> */}
                        {/* <div className="subdata">
                                <span>EXPERIENCE NOW</span>
                                <span>Endless Possibilities</span>
                        </div> */}
                </div>
        {/* <h1 className="title">𝙽𝙴𝙾 𝚃𝙾𝙺𝚈𝙾</h1> */}
        {/* <div className="waviy">
                <span style={{ "--i": 1 }}>N</span>
                <span style={{ "--i": 2 }}>E</span>
                <span style={{ "--i": 3 }}>O</span>
                <span style={{ "--i": 4 }}>-</span>
                <span style={{ "--i": 5 }}>T</span>
                <span style={{ "--i": 6 }}>O</span>
                <span style={{ "--i": 7 }}>K</span>
                <span style={{ "--i": 8 }}>Y</span>
                <span style={{ "--i": 9 }}>O</span>
        </div> */}
                
      </div>
      <div className="city-image">
        
      </div>
    </div>
  );
};

export default WelcomeHome;