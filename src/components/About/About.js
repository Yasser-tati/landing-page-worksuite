import React, { useState, useEffect } from 'react';
import './About.css';
import homeCrmImage from './home-crm.png';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set loaded state when component mounts
    setIsLoaded(true);
    
    // Add a slight delay for the animation to make it more noticeable
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <div className={`about-text ${isLoaded ? 'fade-in' : ''}`}>
          <h1>HR, CRM, and Project Management System</h1>
          <p>The simplest and most powerful way to collaborate with your team.</p>
          <a href="https://work.postinolabs.com/signup" className="get-started-btn1">Get Started</a>
        </div>
        <div className={`about-image ${isVisible ? 'slide-in' : ''}`}>
          <div className="image-container">
            <div className="image-loader"></div>
            <img 
              src={homeCrmImage} 
              alt="Worksuite Dashboard" 
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
