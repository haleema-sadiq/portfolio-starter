import React from 'react'
import './Services.css';
import Card from './Card';
import HeartEmoji from '../img/heartemoji.png';
import Glasses from '../img/glasses.png';
import Humble from '../img/humble.png';
import Resume from'./Resume.pdf'
const Services = () => {
  return (
    <div className='services'>
        {/* leftside */}
        <div className="awesome">
        <span>My Awesome </span>
      <span> Services</span>
      <spane>
        Lorem ipsum is simpley dummy text of printing of printing Lorem <br/>
        ispum is simple dummy text of printing
      </spane>
     <a href={Resume} download>
      <button className="button s-button ">Download Cv
      </button></a>
      <div className="blur s-blur1" style={{background:"#ABF1FF94" }}></div>
        </div>
        {/* rightside */}
        <div className="cards">
          <div style={{left:'14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Desgin'}
            detail={"Figma, Sketch, Adobe,Photoshop"}/>
          </div>
          {/* secondCard */}
          <div style={{left:'-4rem', top:"12rem"}}>
            <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={"HTML, CSS, JavaScript,ReactJs"}/>
          </div>
          {/* thirdCard */}
          <div style={{left:'12rem', top:'19rem'}}>
            <Card
            emoji={Humble}
            heading={'UX/UI'}
            detail={"Wireframes, Prototypes,Visual designs for web, Mobile, and Desktop applications"}/>
          </div>
          <div className="blur s-blur2" style={{background:"var(--purple)" }}></div>        </div>
     
    </div>
  )
}

export default Services
