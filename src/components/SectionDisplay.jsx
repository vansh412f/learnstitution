import React, { useState, useEffect } from "react";
import "./SectionDisplay.css";

const SectionDisplay = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState({});
  const [lastIndex, setLastIndex] = useState(null);

  const getRandomSection = () => {
    if (sections.length > 0) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * sections.length);
      } while (newIndex === lastIndex);
      setCurrentSection(sections[newIndex]);
      setLastIndex(newIndex);
    }
  };

  useEffect(() => {
    getRandomSection();
  }, [sections]);

  return (
    <div className="section-display">
      <div className="section-header">
        <h3>{currentSection.sectionNumber}</h3>
      </div>
      <div className="section-content">
        <div className="section-item">
          <i className="icon-description ri-book-fill"></i>
          <p>
            <strong>Description:</strong> {currentSection.text}
          </p>
        </div>
        <div className="section-item">
          <i className="icon-scenario ri-lightbulb-flash-line"></i>
          <p>
            <strong>Scenario:</strong> {currentSection.example}
          </p>
        </div>
        <div className="section-item">
          <i className="icon-punishment ri-auction-fill"></i>
          <p>
            <strong>Punishment:</strong> {currentSection.punishment}
          </p>
        </div>
      </div>
      <div className="button-container">
        <button className="button" onClick={getRandomSection}>
          <span>New Section</span>
          <i className="ri-shuffle-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default SectionDisplay;
