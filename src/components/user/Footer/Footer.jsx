import React from 'react'
import './footer.css'
import { ImArrowUpRight2 } from "react-icons/im"
import { CiLocationArrow1 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";


function Footer() {
  return (
    <div className="Main-Footer">
      <div className="BoxInsideMain-Footer">
        <div className="About-Footer">
          <div className="Forabout-Footer">
            <h1 className="Aboutheading-Footer">Building Experiences <br />Sice 20s </h1>
          </div>
          <div className="Getintouch-Footer">
            <div className="Boxinsidegetintouch-Footer">
              <div className="Getintouchslider-Footer">
                  <div className="Boxinsideslider-Footer">
                    <ImArrowUpRight2 className='Uprightarrow-Footer' />
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEECOND DIV FOR CONTACT */}
        <div className="Contact-Footer">
          <div className="Boxinsidecontact-Footer">
            <div className="Logo-Footer">
                <h1 className="Heading-Footer">NT <br />KO </h1>
            </div>
            <div className="Description-Footer">
                <span className="Secheading-Footer">Priority One By Neo Tokyo </span>
            </div>
            <div className="Support-Footer">
                <span className="ThirdHeading-Footer">+91 7920938981 <br />support@neotokyo.in</span>
            </div>
          </div>
        </div>

        {/* THIRD DIV FOR SITEOPTIONS */}
        <div className="Option-Footer">
          <div className="Boxinsideoption-Footer">
            <div className="Firstbox-Footer">
              <div className="Fstbox-Footer">
                <span className="Heading-Company">Company</span><br /><br />
                <ul className="List-Comapny">About</ul><br />
                <ul className="List-Comapny">FAQ's</ul><br />
                <ul className="List-Comapny">Blog</ul><br />
                <ul className="List-Comapny">Careers</ul>
              </div>
              <div className="Sdbox-Footer">
                <span className="Enterprise-Solutions">Enterprise Solutions</span><br /><br /><br />
                <span className="Enterprise-Solutions">Gaming Rigs</span><br /><br /><br />
                <span className="Enterprise-Solutions">Accounts</span><br /><br />
              </div>
              <div className="Thrdbox-Footer">
              <span className="Store">Store</span><br /><br />
              <ul className="List-Company">PC's</ul><br />
              <ul className="List-Comapny">Peripherals</ul><br />
              <ul className="List-Comapny">Gear</ul><br />
              <ul className="List-Comapny">Accessories</ul>
              
              </div>
              <div className="Forthbox-Footer">
              <span className="Soluthions">Solutions</span><br /><br />
              <ul className="List-Company">Home PC's</ul><br />
              <ul className="List-Company">Gaming PC's</ul><br />
              <ul className="List-Company">Workstations </ul><br />
              <ul className="List-Company">Enterprise Solutions</ul><br />
              </div>
              <div className="Fifthbox-Footer">
              <span className="Legal">Legal</span><br /><br />
              <ul className="List-Company">Privacy Policy</ul><br />
              <ul className="List-Company">Cookie Policy</ul><br />
              <ul className="List-Company">Trems And Conditions</ul><br />
              <ul className="List-Company">Return And Refunds</ul><br />
              </div>
            </div>
            <div className="Secondbox-Footer">
              <div className="FbiSecondbox-Footer">
                <div className="Reachus-Footer">
                  <span className="Reachus">Reach Us</span>
                </div>
                <div className="Location-Footer">
                  <span className="Neotokyo">NEO TOKYO</span> <CiLocationArrow1 className='Location-icon'/><br />
                  <span className="Neotokyo">Head Quarters</span>
                </div>
              </div>
              <div className="SbiSecondbox-Footer">
                <span className="DetailedLocation">Floor no. 2, Koroth Arcade, </span><br />
                <span className="DetailedLocation">Vennala High School Rd, </span><br />
                <span className="DetailedLocation">opposite to V-Guard, Vennala,</span><br />
                <span className="DetailedLocation">Kochi, Kerala 682028 </span>
              </div>
            </div>
            <div className="Thirdbox-Footer">
              <div className="Social">
                <span className="Heading-Social">Social</span>
              </div>
              <div className="Social-Icons">
                <FaWhatsapp className="Social-Iconszz"/>
                <SlSocialFacebook className="Social-Iconszz"/>
                <FaInstagram className="Social-Iconszz"/>
              </div>
              <div className="All-Rights">
                <span className="All-Rights"><BsShieldLock className='Shield-Icon'/>All Rights Reserved. 2024 Neo Tokyo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer