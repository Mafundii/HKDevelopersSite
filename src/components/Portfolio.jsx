import React, { useState } from "react";
import "./Portfolio.css";
import officeDesign from "../assets/office-design.jpg";
import residential from "../assets/residential.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Modern Office Design",
    description: "A sleek, modern office space for a tech company.",
    details: "This project involved designing a modern office space for a tech startup. We used eco-friendly materials and incorporated ergonomic furniture to create a productive workspace.",
    imgSrc: officeDesign,
  },
  {
    id: 2,
    title: "Residential Architecture",
    description: "A luxurious residential property with modern features.",
    details: "This luxurious property features state-of-the-art amenities, open spaces, and modern design aesthetics. We worked closely with the client to bring their vision to life.",
    imgSrc: residential,
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null); 

  const openModal = (item) => {
    setSelectedItem(item); 
  };

  const closeModal = () => {
    setSelectedItem(null); 
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <h1>Our Portfolio</h1>
        <p>Explore a selection of our previous projects showcasing our commitment to quality and innovation.</p>
      </div>

      <div className="portfolio-container">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="portfolio-card"
            onClick={() => openModal(item)} 
          >
            <img src={item.imgSrc} alt={item.title} className="portfolio-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <button className="modal-close-button" onClick={closeModal}>
              ×
            </button>
            <img src={selectedItem.imgSrc} alt={selectedItem.title} className="modal-image" />
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
