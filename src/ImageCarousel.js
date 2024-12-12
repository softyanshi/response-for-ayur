import React from "react";
import "./App.css"; // Ensure your CSS file is correctly linked

const ImageCarousel = () => {
  const images = [
    { src: "/assets/strength.jpg", title: "STRENGTH" },
    { src: "/assets/mobility.jpg", title: "MOBILITY" },
    { src: "/assets/drills.jpg", title: "DRILLS" },
  ];

  const handleNextClick = () => {
    alert("Next clicked!"); // Replace with your navigation logic
  };

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image.src} alt={image.title} />
          <div className="overlay">{image.title}</div>
        </div>
      ))}

      
      
    </div>
  );
};

export default ImageCarousel;
