import React from 'react'
import './hero.css'
import heroImage from '../../../assets/homePage.svg'

export function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Explore<br />
          University<br />
          Communities<br />
          With <span className="highlight">Us</span>
        </h1>
        <p className="hero-text">
          Join your university's vibrant community, engage with societies, and stay updated with the latest activities. Your journey starts here!
        </p>
        <button className="explore-button">Explore</button>
      </div>
      <div className="hero-image">
        <img 
          src= {heroImage}
          alt="Happy student with notebooks"
          className="studentImage"
        />
      </div>
    </div>
  )
}

