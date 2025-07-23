import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      <div className="hero-content">
        <h1 className="hero-title">
          Revolutionary
          <span className="hero-title-gradient">
            Coconut Processing
          </span>
        </h1>
        <p className="hero-description">
          Transform your coconut processing with our state-of-the-art husk removal machine. 
          Increase efficiency, reduce costs, and maximize your yield with cutting-edge automation technology.
        </p>
        <div className="hero-buttons">
          <button className="hero-button-primary">
            <span>Explore Our Machine</span>
            <ArrowRight className="button-icon" />
          </button>
          <button className="hero-button-secondary">
            <Play className="button-icon" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-container">
          <div className="scroll-indicator-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;