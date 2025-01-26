import React from 'react';
import './gaming.css';
import triangle from '../../../Images/triangle.png';
import Typewriter from 'typewriter-effect';

export default function Gaming() {
  return (
    <div>
      <div className="head">
        <div className="textContent">
          <h1 style={{ textAlign: 'center' }}>
          "DOESN’T HAVE TO BE A BOX IN A CORNER.",
          "IT CAN BE A ..."
          </h1> <br />
          <h1 className="gaming" style={{ fontSize: "40px",color: "rgba(218, 0, 55, 1)" }}>
              <Typewriter
                options={{
                  strings: ["GAMING R1"],
                  autoStart: true,
                  loop: true,
                  delay: 50, // Speed for typing
                  deleteSpeed: 70, // Speed for backspacing
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
              <h1>BEGINS HERE</h1>
              <br />
              <br />
              <br />
              <h4>Endless Possibilities</h4>
            </div>
          </div>
          <div className="line-c">
            
          </div>
          <div className="right-Box">
            <img src={triangle} alt="" />
          </div>
        </div>
        <div className="ProjectEden">
          <div className="Left">
            <div className="shape"></div>
            <h2>PROJECT EDEN</h2>
          </div>
          <div className="right">
            <h1>
              <span style={{ color: 'rgba(255, 3, 94, 1)' }}>AT</span>{" "}
              <span style={{ color: 'black' }} className="G-Text">
                𝖯𝗋𝗈𝗃𝖾𝖼𝗍 𝖤𝖽𝖾𝗇, 𝗐𝖾 𝖻𝖾𝗅𝗂𝖾𝗏𝖾 𝗂𝗇 𝖼𝗋𝖾𝖺𝗍𝗂𝗇𝗀 𝖺 𝗌𝗉𝖺𝗈𝖾 𝗍𝗁𝖺𝗍'𝗌 𝗎𝗇𝗂𝗊𝗎𝖾𝗅𝗒 𝗒𝗈𝗎𝗋𝗌. 𝖥𝗋𝗈𝗆
                𝗉𝖾𝗋𝗌𝗈𝗇𝖺𝗅𝗂𝗓𝖾𝖽 𝗌𝗍𝗒𝗅𝗂𝗇𝗀 𝗍𝗈 𝖼𝗅𝗂𝗆𝖺𝗍𝖾 𝖼𝗈𝗇𝗍𝗋𝗈𝗅, 𝖨𝗈𝖳 𝖺𝗎𝗍𝗈𝗆𝖺𝗍𝗂𝗈𝗇 𝗍𝗈
                𝗂𝗆𝗆𝖾𝗋𝗌𝗂𝗏𝖾 𝗀𝖺𝗆𝗂𝗇𝗀, 𝖺𝗇𝖽 𝖺 𝗁𝗈𝗆𝖾 𝗍𝗁𝖾𝖺𝗍𝖾𝗋 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾, 𝗐𝖾'𝗏𝖾 𝖼𝖺𝗋𝖾𝖿𝗎𝗅𝗅𝗒
                𝖼𝗁𝗈𝗌𝖾𝗇 𝖾𝗏𝖾𝗋𝗒 𝖾𝗅𝖾𝗆𝖾𝗇𝗍 𝗍𝗈 𝗀𝗎𝖺𝗋𝖺𝗇𝗍𝖾𝖾 𝗒𝗈𝗎𝗋 𝗉𝗅𝖾𝖺𝗌𝗎𝗋𝖾 𝖺𝗇𝖽 𝖼𝗈𝗆𝖿𝗈𝗋𝗍.
              </span>
            </h1>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
