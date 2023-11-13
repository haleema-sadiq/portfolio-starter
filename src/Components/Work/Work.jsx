import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopife from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

const Work = () => {
  
    const emailAddress = 'haleemasadiq18@gmail.com'; // Replace with your Gmail address

  const handleButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
  <div className="work">
    <div className="awesome">
        <span>Work for  All these </span>
      <span> Brand & Client</span>
      <spane>
      Highly skilled UI/UX Designer with 1+ years of experience 
      <br/>creating beautiful,intuitive digital interfaces. 
      <br/> Possess extensive knowledge of user-centered design principles, 
      <br/> web development technologies, and design tools. 
      <br/> Proven ability to deliver exceptional visual designs 
      <br/> and user experiences for desktop, mobile, and web applications.
      </spane>
      {/* <button className="button s-button" onClick={handleButtonClick}> Hire Me </button> */}
      <div className="blur s-blur1" style={{background:"#ABF1FF94" }}></div>
        </div>
        {/* rightside */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork}/>
                </div>
                <div className="w-secCircle">
                    <img src={Fiver}/>
                </div>
                <div className="w-secCircle">
                    <img src={Amazon}/>
                </div>
                <div className="w-secCircle">
                    <img src={Facebook}/>
                </div>
                 <div className="w-secCircle">
                    <img src={Shopife}/>
                </div>
                {/* backgroundCircle */}
                <div className="w-background blueCircle"></div>
                <div className="w-background yellowCircle"></div>
            </div>
        </div>
  </div>
  )
}

export default Work
