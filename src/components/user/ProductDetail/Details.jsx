import React from 'react';
import './Detail.css';
import pcImage from '../../../Images/imagePC.png';
import NavBar from '../NavBar/NavBar';
import { FaCartPlus } from "react-icons/fa6";

function Details() {
  return (
    <>
      <NavBar />
      <div className="DetailsBox">
        <div className="pcPic">
          <img src={pcImage} alt="Gaming PC" />
        </div>
        <div className="descreption">
          <div>
            <h2>GAMING PC</h2>
            <div className="rate">
              <h1>THE SPECTRE SERIES</h1>
              <h1 style={{color:'green'}}><del>₹ 3.2L</del> ₹ 2,60,000/-</h1>
        
            </div>
          </div>
          <div className="detailedDescrption">
            This is a sample data space to fill how you see fit. This data is just to see how the space will look
            filled. Well, this looks damn good. Am I right? So what do you think? Will this work out for this space?
            This is a sample data space to fill how you see fit. This data is just to see how the space will look
            filled. Well, this looks damn good. Am I right? So what do you think? Will this work out for this space?
          </div>
          <h4 className='selectionHeading'><b>SELECT STORAGE (ALL DIMENSIONS MENTIONED IN TB)</b></h4>
          <div className='circleBox'>
                <div className="circle">.5</div>
                <div className="circle">1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>

          </div>
          <h4 className='selectionHeading'><b>RAM (ALL DIMENSIONS IN GB)</b></h4>
          <div className='circleBox'>
                <div className="circle">6</div>
                <div className="circle">16</div>
                <div className="circle">32</div>
                <div className="circle">64</div>
          </div>
          <div className="buttondSection">
                <div className="addtoCart">
                    <span> <FaCartPlus/> Add To Cart</span>
                    <button>Buy  NOw</button>
                </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Details;
