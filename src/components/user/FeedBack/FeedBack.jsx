import React from 'react'
import './feedback.css'
function FeedBack() {
  return (
    <div className='feedback'>
        <div className="leftB">
            <h1>Don’t Just Take our 
                Word, Listen to 
                Our Customers
            </h1>
            <div className='ShortLine'></div>
            <div className="bottomBox">
                <h2>Neo Tokyo In Numbers</h2>
               <div className="contentsTokio">
                    <h1 className='thousand'>1000 <span><b>+</b></span></h1>
                    <span className='build'>Completed Builds</span>
               </div>
               <div className="numbers">
                <div className="entinies">
                            <span className='numbers'>50 +  Business Entities</span>
                            <p>  </p>
                </div>
                <div className="activeCustomers">
                        <span className='numbers'>500 + Active Customers</span>
                      
                </div>
            </div>
            </div>
            
        </div>
        <div className="rightB">
               
        </div>
    </div>
  )
}

export default FeedBack
