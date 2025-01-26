import React, { useEffect } from 'react';
import './feedback.css';
// import CylinderGrid from '../../Animation/CylnederEff';
import Grid2Background from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/grid2.cdn.min.js";

function FeedBack() {
  useEffect(() => {
    // Initialize the background grid
    const canvas = document.getElementById("webgl-canvas");
    const bg = Grid2Background(canvas);

    // Add click event listener to change colors and intensities
    const handleClick = () => {
      bg.grid.setColors([
        0xffffff * Math.random(),
        0xffffff * Math.random(),
        0xffffff * Math.random(),
      ]);
      bg.grid.light1.color.set(0xffffff * Math.random());
      bg.grid.light1.intensity = 500 + Math.random() * 1000;
      bg.grid.light2.color.set(0xffffff * Math.random());
      bg.grid.light2.intensity = 270 + Math.random() * 250;
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      // Cleanup the event listener when the component is unmounted
      document.body.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className="feedback">
      <div className="leftB">
        <div>
          <h1>
            𝙳𝚘𝚗’𝚝 𝙹𝚞𝚜𝚝 𝚃𝚊𝚔𝚎 𝚘𝚞𝚛 𝚆𝚘𝚛𝚍, 𝙻𝚒𝚜𝚝𝚎𝚗 𝚝𝚘 𝙾𝚞𝚛 𝙲𝚞𝚜𝚝𝚘𝚖𝚎𝚛𝚜
          </h1>
        </div>
        <div className="ShortLine"></div>
        <div className="bottomBox">
          <h2>𝙽𝚎𝚘 𝚃𝚘𝚔𝚢𝚘 𝙸𝚗 𝙽𝚞𝚖𝚋𝚎𝚛𝚜</h2>
          <div className="contentsTokio">
            <h1 className="thousand">1000 <span><b>+</b></span></h1>
            <span className="build">Completed Builds</span>
          </div>
          <div className="numbers">
            <div className="entinies">
              <span>50+ Business Entities</span>
            </div>
            <div className="activeCustomers">
              <span>500+ Active Customers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rightB">
      <div id="app" style={{width:'100%',height:'100%',borderRadius:'30px'}} >
            <canvas id="webgl-canvas" style={{width:'100%',height:'100%',borderRadius:'30px'}}></canvas>
            <div className="hero">
    
      </div>
    </div>
      </div>
    </div>
  );
}

export default FeedBack;
