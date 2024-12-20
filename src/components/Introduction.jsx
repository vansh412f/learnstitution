import React from "react";
import "./Introduction.css"; // Importing the CSS for styling

const Introduction = () => {
  return (
    <div className="intro-container">
  <div className="intro-text">
    <h1 className="intro-title">Welcome to Learnstitution</h1>
    <p className="intro-tagline">Simplifying Laws for You</p>
    <p className="intro-description">
      Learnstitution is a platform dedicated to making legal knowledge more accessible to everyone. We simplify complex laws, making them easier to understand for all.
    </p>
  </div>
  <div className="intro-image">
    <img src="/Legal Balanced Scales_1734256905.jpg" alt="Learnstitution" />
  </div>
</div>

  );
};

export default Introduction;
