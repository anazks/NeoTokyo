import React, { useEffect, useState } from 'react'
import './gamingpage.css'
import gameImg  from '../../../Images/Valorant Game - Clove asset.jpg'
import GameImg2 from '../../../Images/game2.png'
import GameImg3 from '../../../Images/game3.png'
import GameImg4 from '../../../Images/gane4.png'

import pro1 from '../../../Images/pro1.jpg'
import pro2 from '../../../Images/LoginWith/Loginbg.jpg'
import pro3 from '../../../Images/pro3.jpg'
import pro4 from '../../../Images/pro4.jpg'




function Gamingpage() {
    const gamingImages = [gameImg, GameImg2, GameImg3, GameImg4];
    const proImages = [pro1, pro2, pro3, pro4];
    const [isGaming, setIsGaming] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsGaming(prev => !prev);
      }, 3000); // Toggle every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
      const currentImages = isGaming ? gamingImages : proImages;

  return (
    <div className="Gaming-page">
    <div className="Bigaming-page">
      <div className="Banner-firstrow">
        <div className="Divfor-heading">
          <h1>
            {isGaming ? (
              "GAMING \n SYSTEMS"
            ) : (
              "PROFESSIONAL \n SYSTEMS"
            )}
          </h1>
        </div>
        {currentImages.map((img, index) => (
          <div key={index} className="Divfor-image">
            <img 
              src={img}
              alt={isGaming ? `Gaming System ${index + 1}` : `Professional System ${index + 1}`}
              style={{
                opacity: 1,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
          </div>
        ))}
      </div>
      <div className="Banner-secondrow">
        <div className="Bibanner-secondrow">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="Small-box"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Gamingpage