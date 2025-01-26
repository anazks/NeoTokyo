import React from 'react';
import './quick.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { RiShieldKeyholeLine } from "react-icons/ri";

function Quick() {
  return (
    <div className='fullWindow' style={{marginTop:"5%"}}>
      <div className='mainBox'>
      {/* New row above the banner */}

      {/* Banner div */}
      <div className="banner">
            <div className='imageContainer'></div>
              <div className='subcribe'>
                  <div className='contentsdiv'>
                    <div>
                      <p>GAMING SQUAD <br /> <span className='gaming'>    Radicle Gaming</span> <br /> Exclusive partnership</p>
                    </div>
                  </div>
                <div className="arrow">
                  <div>
                    <IoIosArrowForward className='arrowText'/>
                  </div>
                </div>
                <div className="sub">
                  <div className='exclusive'>
                    <p>Subscribe for Exclusive Content</p>
                  </div>
                  <div>
                    <button className="subscribe-button">
                      <IoArrowForwardCircleSharp className='iconsbtn' /> Subscribe
                    </button>
                  </div>
                </div>
              </div>
      </div>
      <div className="newRow">
            <div className="aspire">
              <div className="content">
              <p className="subheading-prebuild"><b>  <RiShieldKeyholeLine/> Prebuild</b></p>

                <h1 className="heading">Aspire Series</h1>
                <p className="subheading">Performance Minimal,Sleek</p>
                <br />
                <div className="rowCIricle">
                    <div className="pink"></div>
                    <div className="yellow"></div>
                    <div className="blue"></div>
                    <div className="black"></div>
                </div>
                <br />
                <h1>$1,40,000/-</h1>
                <br />
                <button className="buyNow-button">
                      <IoArrowForwardCircleSharp className='iconsbtn-buynow' />
                <span>Buy Now</span>
                </button>

              </div>
              <img
                className="img"
                src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__"
                alt="Decorative"
              />
            </div>

<div className="subBoxes">
      <div className="subRight">
                      <div className='subRight2'>
                          <img className='imgage' src="https://s3-alpha-sig.figma.com/img/095e/f135/9e497924ab8cc0fcb3692e1a45979a16?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzxN1lUt4yBMeGoYm9Pvfmarw48WhMNMMNqaCL48HCjRZhvhkO2JLjpnK012CXOLD4YPLs~RjOBcEgKuAAbTBmH4CDKHWhTrvTu4DdsDMvs3sXxoZykt38IDbOpDXquf-DwiCArI6kWRnitiaP0iBdH9y-ZlTree8NjG-synSZiWKeVM2j~kKVGriEa1y8POjHC9kGXIzvPivegTd5MLy-o2vHMulz5s9uKSzUMJ64ddE1bfb2K9C-9QHdXR4byBTzpk39446inCIioam3Q~7y3-ihiwJ~Xx3IbFPpbqSdp9350UEfSjRFdb1aNXwHbNKwchdlR7r8msrlPCbiTABw__" alt="" />
                      </div>
                      <div className='PcName'>
                          <span> <b>Ion Drive</b></span>
                      </div>
                  </div>
                  <div className="subRight">
                      <div className='subRight2'>
                          <img className='imgage' src="https://s3-alpha-sig.figma.com/img/095e/f135/9e497924ab8cc0fcb3692e1a45979a16?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzxN1lUt4yBMeGoYm9Pvfmarw48WhMNMMNqaCL48HCjRZhvhkO2JLjpnK012CXOLD4YPLs~RjOBcEgKuAAbTBmH4CDKHWhTrvTu4DdsDMvs3sXxoZykt38IDbOpDXquf-DwiCArI6kWRnitiaP0iBdH9y-ZlTree8NjG-synSZiWKeVM2j~kKVGriEa1y8POjHC9kGXIzvPivegTd5MLy-o2vHMulz5s9uKSzUMJ64ddE1bfb2K9C-9QHdXR4byBTzpk39446inCIioam3Q~7y3-ihiwJ~Xx3IbFPpbqSdp9350UEfSjRFdb1aNXwHbNKwchdlR7r8msrlPCbiTABw__" alt="" />
                      </div>
                      <div className='PcName'>
                          <span><b>E-75</b> </span>
                      </div>
                  </div>
                  <div className="subRight">
                      <div className='subRight2'>
                          <img className='imgage' src="https://s3-alpha-sig.figma.com/img/095e/f135/9e497924ab8cc0fcb3692e1a45979a16?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzxN1lUt4yBMeGoYm9Pvfmarw48WhMNMMNqaCL48HCjRZhvhkO2JLjpnK012CXOLD4YPLs~RjOBcEgKuAAbTBmH4CDKHWhTrvTu4DdsDMvs3sXxoZykt38IDbOpDXquf-DwiCArI6kWRnitiaP0iBdH9y-ZlTree8NjG-synSZiWKeVM2j~kKVGriEa1y8POjHC9kGXIzvPivegTd5MLy-o2vHMulz5s9uKSzUMJ64ddE1bfb2K9C-9QHdXR4byBTzpk39446inCIioam3Q~7y3-ihiwJ~Xx3IbFPpbqSdp9350UEfSjRFdb1aNXwHbNKwchdlR7r8msrlPCbiTABw__" alt="" />
                      </div>
                      <div className='PcName'>
                          <span><b>Phantom</b></span>
                      </div>
                  </div>
</div>
             
      </div>

    </div>
    </div>
  );
}

export default Quick;
