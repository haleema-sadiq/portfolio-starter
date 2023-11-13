import React from 'react'
import './Intro.css';
import Github from '../img/github.png';
import Instagram from '../img/instagram.png';
import Linkedin from '../img/linkedin.png';
import me from '../img/me.png';
import Vector1 from '../img/Vector1.png';
import Vector2 from '../img/Vector2.png';
import Floating from './Floating';
import Crown from '../img/crown.png';
import glasses from '../img/glassesimoji.png';
import thumbup from '../img/thumbup.png';
const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy!I Am </span>
                <span>Haleema Sadiq </span>
                <span>Frontend Developer with high level of Experience
                    in web desgining and Developerment, producting the Quality work
                </span>
            </div>
            {/* <button className='button i-button'>Hire Me </button> */}
        <div className='i-icons'>
            <a href='https://github.com/haleema-sadiq'> <img src={Github} alt="Github"/></a>
           
          <a href='https://www.linkedin.com/in/haleema-sadiq-440464238/'><img src={Linkedin} alt="LinkedIn"/></a>  
         <a href='https://www.instagram.com/haleema__hale/'> <img src={Instagram} alt="Instagram"/></a>  
        </div>
        </div>
         <div className="i-right">
            <img src={Vector1}></img>
            <img src={Vector2}></img>
            <img src={me} style={{width:'40%',height:'50%',top:'15%',margin:'15px',padding:'15px',position:'relative'}}></img>
            <img src={glasses}></img>
            <div style={{top:'-4%',left:'68%'}}>
                <Floating image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'18rem',left:'1rem'}}>
                <Floating image={thumbup} txt1='Best Desgin' txt2='Award'/>
            </div>
            {/* blurdiv */}
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
         </div>
       
      
    </div>
  )
}

export default Intro
