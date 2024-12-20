import React from "react";
import { Link } from "react-router-dom";
import "./GamesSection.css";

const games = [
  {
    title: "Spot the Lawbreaker",
    description: "Identify common legal violations in different scenarios.",
    link: "/spot-the-lawbreaker",
  },
  {
    title: "Guess the Penalty",
    description: "Guess the correct penalty for various legal violations.",
    link: "/guess-the-penalty",
  },
  {
    title: "Your Rights in Action",
    description: "Learn your rights by making choices in real-life scenarios.",
    link: "/your-rights-in-action",
  },
];

const GamesSection = () => {
  return (
    <div className="games-section">
      <h2 className="games-title">Learn Indian Laws Through Fun Games</h2>
      <div className="games-grid">
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <h3 className="game-title">{game.title}</h3>
            <p className="game-description">{game.description}</p>
            <Link to={game.link} className="game-link">
              Play Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesSection;
