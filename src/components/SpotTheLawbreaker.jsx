// SpotTheLawbreaker.js
import React, { useState } from 'react';
import './SpotTheLawbreaker.css';

const scenarios = [
    {
        image: '/images/scenario1.jpg',
        correctAnswer: 'Littering',
        options: ['Littering', 'Speeding', 'Drunk Driving', 'Parking Violation'],
        explanation: 'Littering in public places is punishable under the Swachh Bharat Abhiyan.'
      },
      {
        "image": "/images/scenario2.jpg",
        "correctAnswer": "No Helmet",
        "options": ["No Helmet", "Jaywalking", "Illegal Parking", "Drunk Driving"],
        "explanation": "Riding without a helmet is a violation of the Motor Vehicle Act."
    },
{
    image: '/images/scenario3.jpg',
    correctAnswer: 'Parking Violation',
    options: ['Littering', 'Parking Violation', 'Speeding', 'Not Wearing Seatbelt'],
    explanation: 'Parking in no-parking zones can lead to fines and penalties.'
  },
  {
    image: '/images/scenario4.jpg',
    correctAnswer: 'Drunk Driving',
    options: ['Jaywalking', 'Drunk Driving', 'Speeding', 'Overloading'],
    explanation: 'Drunk driving is prohibited and carries severe penalties under the IPC.',
  },
  {
    image: '/images/scenario5.jpg',
    correctAnswer: 'Speeding',
    options: ['Speeding', 'Parking Violation', 'Littering', 'Riding without a Helmet'],
    explanation: 'Excessive speeding is punishable under traffic laws with fines or imprisonment.'
  },
];

const SpotTheLawbreaker = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleOptionClick = (option) => {
    const scenario = scenarios[currentScenarioIndex];
    setSelectedOption(option);
    setFeedbackVisible(true);

    if (option === scenario.correctAnswer) {
      setScore(score + 1);
      setExplanation('Correct! ' + scenario.explanation);
    } else {
      setExplanation('Wrong! ' + scenario.explanation);
    }

    setTimeout(() => {
      if (currentScenarioIndex < scenarios.length - 1) {
        setCurrentScenarioIndex(currentScenarioIndex + 1);
        setSelectedOption(null);
        setFeedbackVisible(false);
      } else {
        setGameOver(true);
      }
    }, 2000);
  };

  const restartGame = () => {
    setCurrentScenarioIndex(0);
    setScore(0);
    setSelectedOption(null);
    setFeedbackVisible(false);
    setGameOver(false);
  };

  const scenario = scenarios[currentScenarioIndex];

  return (
    <div className="game-container">
      <h1>Spot the Lawbreaker</h1>
      {gameOver ? (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Your score: {score} / {scenarios.length}</p>
          <button className="restart-button" onClick={restartGame}>Restart Game</button>
        </div>
      ) : (
        <div className="scenario-container">
          <img
            src={scenario.image}
            alt={`Scenario ${currentScenarioIndex + 1}`}
            className="scenario-image"
          />
          <div className="options">
            {scenario.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`option-button ${feedbackVisible && option === scenario.correctAnswer ? 'correct' : ''} ${feedbackVisible && option === selectedOption && option !== scenario.correctAnswer ? 'wrong' : ''}`}
                disabled={feedbackVisible}
              >
                {option}
              </button>
            ))}
          </div>
          {feedbackVisible && (
            <div className="feedback">
              <p>{explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SpotTheLawbreaker;