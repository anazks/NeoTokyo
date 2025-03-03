import React from 'react';
import './Detail.css';
import NavBar from '../NavBar/NavBar';
import { FaCartPlus } from "react-icons/fa6";
import BaseURL from '../../../Static/Static';

function Details({ product }) { // ✅ Correctly destructure props
  if (!product) {
    return <h2>Loading product details...</h2>; // ✅ Show a loading message if no data
  }

  return (
    <>
      <NavBar />
      <div className="DetailsBox">
        <div className="pcPic">
          <img src={product.images?.[0]?.image ? BaseURL + product.images[0].image : "https://via.placeholder.com/150"}  /> {/* ✅ Use actual product image */}
        </div>
        <div className="descreption">
          <div>
            <h2>{product.category || "GAMING PC"}</h2> {/* ✅ Use actual category */}
            <div className="rate">
              <h1>{product.name || "THE SPECTRE SERIES"}</h1> {/* ✅ Use actual product name */}
              <h1 style={{ color: 'green' }}>
                {product.originalPrice && <del>₹ {product.originalPrice.toLocaleString()}</del>}  
                ₹ {product.price.toLocaleString()}/-
              </h1> {/* ✅ Display actual pricing */}
            </div>
          </div>
          <div className="detailedDescrption">
            {product.description || "No description available."} {/* ✅ Show real description */}
          </div>

          <h4 className='selectionHeading'><b>SELECT STORAGE (TB)</b></h4>
          <div className='circleBox'>
            <div className="circle">.5</div>
            <div className="circle">1</div>
            <div className="circle">2</div>
            <div className="circle">3</div>
          </div>

          <h4 className='selectionHeading'><b>RAM (GB)</b></h4>
        
          <div className='circleBox'>
            <div className="circle">8</div>
            <div className="circle">16</div>
            <div className="circle">32</div>
            <div className="circle">64</div>
          </div>
 

          <div className="buttondSection">
            <div className="addtoCart">
              <span> <FaCartPlus /> Add To Cart</span>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
