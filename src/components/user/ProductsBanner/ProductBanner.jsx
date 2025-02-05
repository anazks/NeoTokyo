import React from 'react'
import './Pbanner.css'
import image from '../../../Images/Rectangle 532.jpg'
import { IoArrowForwardCircleSharp } from 'react-icons/io5'
import "@fontsource/rajdhani"; // Default font weight
import "@fontsource/rajdhani/700.css"; // Optional: specific font weight (600)
function ProductBanner() {
  return (
   <>
    <div className='ProductBanneBox'>
            <div className="LeftBox">
                    <div className="Headers">
                            <div><h1>GAME BEYOND</h1></div>
                    </div>
                    <div className="textContenst">
                        <span>FRAMES SPEAKS MORE <br /> THAN SPECS. <br />
                            MEET THE  <br />
                            FPS <u><span className='MONGER'>MONGER</span></u>
                        </span>
                    
                    </div>
                    <div className='smallText'>
                        <span>
                            Intel Core i7 14700K - 5.6GHz Max Clock
                            Nvidia RTX 4070Ti - 8GB DDR6 VRAM
                            Corsair Vengeance DDR5 - 16GB
                            Samsung 970 Evo Pro - 1TB
                        </span>
                    </div>
                    <div className="rate">
                        <span style={{color:'grey'}}><del>₹2,77,990</del></span> <span style={{color:'#AD43DE'}}>₹2,57,990</span>
                    </div>

                <button className="team-buttons">
                                      <IoArrowForwardCircleSharp className='iconsbtn-team' />
                                      <span className='Team' style={{ color: 'white' }} >BUY NOW </span>
                </button>
                    
            </div>
            <div className="rightBox">
                <img src={image} alt="no img" />
            </div>
    </div>
   </>
  )
}

export default ProductBanner
