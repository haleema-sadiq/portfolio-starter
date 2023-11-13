import React from 'react'
import './Floating.css';
import Crown from '../img/crown.png';
import glasses from '../img/glassesimoji.png';
import thumbup from '../img/thumbup.png';
const Floating = ({image ,txt1,txt2}) => {
  return (
  <div className="floating">
    <img src={image} alt=""/>
    <span>
        {txt1}
        <br/>
        {txt2}
    </span>
  </div>
  )
}

export default Floating
