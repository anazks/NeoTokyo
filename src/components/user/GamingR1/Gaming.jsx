import React, { useEffect, useState } from 'react'
import './gaming.css'
export default function Gaming() {
    const [text, setText] = useState('');
  const fullText = [
    "DOESN’T HAVE TO BE A BOX...",
    "  IN A CORNER. IT CAN BE A..",
    "GAMING RI",
  ];
  const subHeadingText =
    '"Built with latest in PC hardware, highest quality components and backed by lifetime support"';

  useEffect(() => {
    let i = 0;
    let j = 0;
    let currentText = fullText[i];
    let currentSubText = '';

    const intervalId = setInterval(() => {
      if (j < currentText.length) {
        setText((prevText) => prevText + currentText[j]);
        j++;
      } else if (i < fullText.length - 1) {
        setText('');
        i++;
        j = 0;
        currentText = fullText[i];
      } else if (i === fullText.length - 1) {
        // Start displaying subheading after the last main text
        if (currentSubText.length < subHeadingText.length) {
          currentSubText += subHeadingText[j];
          setText(currentSubText);
          j++;
        } else {
          clearInterval(intervalId);
        }
      }
    }, 1000); // Adjust typing speed here

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
            <div className="head">
            <div className="textContent">
                <h1 style={{ textAlign: 'center' }}>{text}</h1>
                <h5 className="subHeading">{text}</h5>
                <div className="line"></div>
            </div>
            </div>
            <div className="containerBox">
                    <div className="leftBox">
                           <div className='leftDivText'>
                            <h1>NEW</h1>
                                <h1><span style={{color:"rgba(218, 0, 55, 1)"}}>EXP</span>ERIENCES</h1>
                                <h1>BEGINS HERE</h1>
                                <br /><br /><br />
                                <h4>Endless Possibilities</h4>
                           </div>
                    </div>
                    <div className="rightBox">
                        <div className="trangleDiv">
                            <div className="triangl"></div>
                            <div className="triangl"></div>
                            <div className="triangl"></div>
                            <div className="triangl"></div>
                        </div>
                    </div>

            </div>
            <div className="ProjectEden">
                <div className="Left">
                    <div className="shape">

                    </div>
                    <h2>PROJECT EDEN</h2>
                </div>
                <div className="right">
                    <h1><span style={{color:'rgba(255, 3, 94, 1)'}}>AT</span> 𝖯𝗋𝗈𝗃𝖾𝖼𝗍 𝖤𝖽𝖾𝗇, 𝗐𝖾 𝖻𝖾𝗅𝗂𝖾𝗏𝖾 𝗂𝗇 𝖼𝗋𝖾𝖺𝗍𝗂𝗇𝗀 𝖺 𝗌𝗉𝖺𝖼𝖾 𝗍𝗁𝖺𝗍'𝗌 𝗎𝗇𝗂𝗊𝗎𝖾𝗅𝗒 𝗒𝗈𝗎𝗋𝗌. 𝖥𝗋𝗈𝗆 𝗉𝖾𝗋𝗌𝗈𝗇𝖺𝗅𝗂𝗓𝖾𝖽 𝗌𝗍𝗒𝗅𝗂𝗇𝗀 𝗍𝗈 𝖼𝗅𝗂𝗆𝖺𝗍𝖾 𝖼𝗈𝗇𝗍𝗋𝗈𝗅, 𝖨𝗈𝖳 𝖺𝗎𝗍𝗈𝗆𝖺𝗍𝗂𝗈𝗇 𝗍𝗈 𝗂𝗆𝗆𝖾𝗋𝗌𝗂𝗏𝖾 𝗀𝖺𝗆𝗂𝗇𝗀, 𝖺𝗇𝖽 𝖺 𝗁𝗈𝗆𝖾 𝗍𝗁𝖾𝖺𝗍𝖾𝗋 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾, 𝗐𝖾'𝗏𝖾 𝖼𝖺𝗋𝖾𝖿𝗎𝗅𝗅𝗒 𝖼𝗁𝗈𝗌𝖾𝗇 𝖾𝗏𝖾𝗋𝗒 𝖾𝗅𝖾𝗆𝖾𝗇𝗍 𝗍𝗈 𝗀𝗎𝖺𝗋𝖺𝗇𝗍𝖾𝖾 𝗒𝗈𝗎𝗋 𝗉𝗅𝖾𝖺𝗌𝗎𝗋𝖾 𝖺𝗇𝖽 𝖼𝗈𝗆𝖿𝗈𝗋𝗍.</h1>
                </div>
            </div>
            <br />
            <br /><br/>
    </div>
  )
}
