import React from 'react'
import './Hero.css'
import profileImg from '../../assets/ceo.webp'
const Hero = () => {
  return (
    <div className="hero">
      <img src={profileImg} alt="" className="person" />
      <h1>
        <span>I'm Philip Samuel,</span> Frontend developer based in Nigeria.
      </h1>
      <p>
        I design for compatibility, scalability and best user experience while
        keeping a keen eye on user security.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero
