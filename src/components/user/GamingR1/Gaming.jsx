import React from 'react';
import './gaming.css';
import triangle from '../../../Images/triangle.png';
import Typewriter from 'typewriter-effect';

export default function Gaming() {
  return (
    <div className='gaming-container'>
      <div className="head">
        <div className="textContent">
          <h1 style={{ textAlign: 'center' }}>
            "DOESN’T HAVE TO BE A BOX IN A CORNER.",
            "IT CAN BE A ..."
          </h1>
          <h1 className="gaming" style={{ fontSize: "40px", color: "rgba(218, 0, 55, 1)" }}>
            <Typewriter
              options={{
                strings: ["GAMING R1"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 70,
              }}
            />
          </h1>
          <br />
          <h5 className="subHeading">
            "Built with the latest in PC hardware, highest quality components, and backed by lifetime support"
          </h5>
          <div className="line"></div>
        </div>
      </div>

      <div className="bottomSection">
        <div className="containerBox">
          <div className="leftBox">
            <div className="leftDivText">
              <h1>NEW</h1>
              <h1>
                <span style={{ color: "rgba(218, 0, 55, 1)" }}>EXP</span>ERIENCES
              </h1>
              <h1>BEGIN HERE</h1>
      
              <h4>Endless Possibilities</h4>
            </div>
          </div>
          <div className="right-Box">
            <img src={triangle} alt="Triangle Design" />
          </div>
        </div>

        {/* Fixed ProjectEden Visibility */}
        <div className="ProjectEden">
          <div className="Left">
            <h2>PROJECT EDEN</h2>
          </div>
          <div className="right">
            <h1>
              <span style={{ color: 'rgba(255, 3, 94, 1)' }}>AT</span>{" "}
              <span style={{ color: 'black' }} className="G-Text">
                𝖯𝗋𝗈𝗃𝖾𝖼𝗍 𝖤𝖽𝖾𝗇 is a revolutionary gaming experience designed to immerse users in a world where technology meets comfort.
              </span>
            </h1>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}
