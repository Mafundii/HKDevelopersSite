import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Portfolio from './pages/Portfolio';
import LogoContainer from './components/LogoContainer';
import LoadingScreen from './components/LoadingScreen'; // Import the LoadingScreen component
import './App.css'; // Your CSS file for global styles
import ParticlesComponent from './components/Particles';

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate a loading process, you can adjust the time or replace with an actual API call
    setTimeout(() => {
      setIsLoading(false); // Set loading to false when done
    }, 2000); // 5 seconds for demonstration
  }, []);

  return (
    <div className="app-container">
      <Router>
        <ParticlesComponent id="particles" />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div className="content">
            <LogoContainer />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
          </div>
        )}
      </Router>
    </div>
  );
  
}

export default App;
