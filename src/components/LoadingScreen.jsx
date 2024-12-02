import React, { useState, useEffect } from 'react';
import './LoadingScreen.css'; // Import the CSS for the loading screen
import logo from '../assets/HKD_logo.png'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 10); // Adjust the interval to control speed
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div id="loading-screen">
      <div id="logo-container">
        <img 
          src={logo} 
          alt="HKDevelopers Logo" 
          id="loading-logo" 
          style={{
            opacity: 1,  // Start with 50% opacity across the entire logo
            maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) ${progress}%, rgba(0, 0, 0, 0) ${progress}%)`,
            WebkitMaskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) ${progress}%, rgba(0, 0, 0, 0) ${progress}%)`,
          }}
        />
      </div>
      <div id="progress-container">
        <span id="progress-text">{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
