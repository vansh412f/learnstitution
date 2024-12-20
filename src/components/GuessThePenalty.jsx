import React, { useState, useEffect } from "react";
import "./GuessThePenalty.css";


const originalQuestionsList = [
  {
    question: "What is the penalty for driving without a license in India?",
    options: ["₹2000", "₹5000", "₹10,000", "₹15,000"],
    correctAnswer: "₹5000",
    explanation: "Driving without a license can result in a fine of ₹5000 as per the Motor Vehicle Act.",
  },
  {
    question: "What is the punishment for rash driving in India?",
    options: ["₹1000 fine", "₹5000 fine and/or 6 months in jail", "₹2000 fine", "₹10,000 fine"],
    correctAnswer: "₹5000 fine and/or 6 months in jail",
    explanation: "Rash driving is punishable with a fine of ₹5000 and/or up to 6 months in jail under the Motor Vehicle Act.",
  },
  {
    question: "What is the penalty for using a mobile phone while driving?",
    options: ["₹1000", "₹2000", "₹5000", "₹7500"],
    correctAnswer: "₹5000",
    explanation: "Using a mobile phone while driving can attract a fine of ₹5000 under the Motor Vehicle Act.",
  },
  {
    question: "What is the punishment for committing cyberbullying in India?",
    options: ["₹10,000 fine", "3 years in jail", "₹50,000 fine or 3 years in jail", "₹1,00,000 fine"],
    correctAnswer: "₹50,000 fine or 3 years in jail",
    explanation: "Cyberbullying is punishable under the IT Act with a fine of ₹50,000 or imprisonment of up to 3 years.",
  },
  {
    question: "What is the penalty for drinking and driving in India?",
    options: ["₹2000 fine", "₹10,000 fine and/or 6 months in jail", "₹5000 fine", "₹15,000 fine"],
    correctAnswer: "₹10,000 fine and/or 6 months in jail",
    explanation: "Drinking and driving is a serious offense punishable with a fine of ₹10,000 and/or imprisonment of up to 6 months.",
  },
  {
    question: "What is the punishment for defamation in India?",
    options: ["2 years in jail", "₹10,000 fine", "2 years in jail and/or fine", "₹20,000 fine"],
    correctAnswer: "2 years in jail and/or fine",
    explanation: "Defamation is punishable with up to 2 years in jail and/or a fine under Section 500 of the IPC.",
  },
  {
    question: "What is the penalty for assaulting a public servant?",
    options: ["3 years in jail", "2 years in jail", "6 months in jail", "5 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Assaulting a public servant is punishable with up to 3 years in jail under Section 353 of the IPC.",
  },
  {
    question: "What is the punishment for dowry harassment in India?",
    options: ["3 years in jail", "5 years in jail and fine", "1 year in jail", "10 years in jail"],
    correctAnswer: "5 years in jail and fine",
    explanation: "Dowry harassment is punishable with 5 years in jail and a fine under Section 498A of the IPC.",
  },
  {
    question: "What is the fine for littering in public places in India?",
    options: ["₹200", "₹500", "₹1000", "₹1500"],
    correctAnswer: "₹500",
    explanation: "Littering in public places is punishable with a fine of ₹500 under Swachh Bharat Abhiyan.",
  },
  {
    question: "What is the punishment for theft in India?",
    options: ["6 months in jail", "3 years in jail", "7 years in jail", "10 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Theft is punishable with imprisonment of up to 3 years under Section 379 of the IPC.",
  },
  {
    question: "What is the punishment for trespassing in India?",
    options: ["₹500 fine", "3 months in jail", "₹1000 fine or 3 months in jail", "₹2000 fine"],
    correctAnswer: "₹1000 fine or 3 months in jail",
    explanation: "Trespassing is punishable under Section 447 of the IPC with a fine of ₹1000 or up to 3 months in jail.",
  },
  {
    question: "What is the penalty for fake driving license usage?",
    options: ["₹5000 fine", "₹10,000 fine", "₹25,000 fine or 2 years in jail", "₹50,000 fine"],
    correctAnswer: "₹25,000 fine or 2 years in jail",
    explanation: "Using a fake driving license can lead to a fine of ₹25,000 or imprisonment of up to 2 years.",
  },
  {
    question: "What is the punishment for cheating in India?",
    options: ["₹1000 fine", "3 years in jail", "7 years in jail", "10 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Cheating is punishable under Section 420 of the IPC with imprisonment of up to 3 years.",
  },
  {
    question: "What is the penalty for spitting in public in India?",
    options: ["₹100", "₹500", "₹2000", "₹1000"],
    correctAnswer: "₹500",
    explanation: "Spitting in public is punishable with a fine of ₹500 in many states as part of Swachh Bharat Abhiyan.",
  },
  {
    question: "What is the punishment for sexual harassment in India?",
    options: ["1 year in jail", "3 years in jail", "5 years in jail", "7 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Sexual harassment is punishable with imprisonment of up to 3 years under Section 354A of the IPC.",
  },
  {
    question: "What is the fine for carrying banned plastic bags in India?",
    options: ["₹500", "₹2000", "₹5000", "₹10,000"],
    correctAnswer: "₹2000",
    explanation: "Carrying banned plastic bags can attract a fine of ₹2000 under various state laws.",
  },
  {
    question: "What is the punishment for drug trafficking in India?",
    options: ["5 years in jail", "10 years in jail", "20 years in jail or death penalty", "Life imprisonment"],
    correctAnswer: "20 years in jail or death penalty",
    explanation: "Drug trafficking is punishable with severe penalties, including up to 20 years in jail or the death penalty.",
  },
  {
    question: "What is the penalty for evading income tax in India?",
    options: ["₹10,000 fine", "100% of the tax amount due", "₹50,000 fine", "200% of the tax amount due"],
    correctAnswer: "100% of the tax amount due",
    explanation: "Tax evasion is punishable with a penalty of up to 100% of the tax amount due.",
  },
  {
    question: "What is the punishment for domestic violence in India?",
    options: ["1 year in jail", "3 years in jail and fine", "5 years in jail", "7 years in jail"],
    correctAnswer: "3 years in jail and fine",
    explanation: "Domestic violence is punishable under the Protection of Women from Domestic Violence Act with imprisonment and a fine.",
  },
  {
    question: "What is the punishment for stalking in India?",
    options: ["1 year in jail", "3 years in jail", "5 years in jail", "7 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Stalking is punishable under Section 354D of the IPC with imprisonment of up to 3 years.",
  },
  {
    question: "What is the fine for jaywalking in India?",
    options: ["₹50", "₹200", "₹500", "₹1000"],
    correctAnswer: "₹200",
    explanation: "Jaywalking is punishable with a fine of ₹200 in many cities under traffic regulations.",
  },
  {
    question: "What is the penalty for violating noise pollution regulations in India?",
    options: ["₹500", "₹1000", "₹2000", "₹5000"],
    correctAnswer: "₹2000",
    explanation: "Violating noise pollution regulations can result in a fine of ₹2000 under various state laws.",
  },
  {
    question: "What is the punishment for vandalism in India?",
    options: ["1 year in jail", "3 years in jail", "5 years in jail", "10 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Vandalism is punishable with imprisonment of up to 3 years under Section 427 of the IPC.",
  },
  {
    question: "What is the fine for driving without wearing a seatbelt in India?",
    options: ["₹100", "₹500", "₹1000", "₹2000"],
    correctAnswer: "₹1000",
    explanation: "Driving without a seatbelt can attract a fine of ₹1000 under the Motor Vehicle Act.",
  },
  {
    question: "What is the punishment for bigamy in India?",
    options: ["1 year in jail", "3 years in jail", "5 years in jail", "7 years in jail"],
    correctAnswer: "5 years in jail",
    explanation: "Bigamy is punishable with up to 5 years in jail under Section 494 of the IPC.",
  },
  {
    question: "What is the fine for smoking in public places in India?",
    options: ["₹100", "₹500", "₹1000", "₹2000"],
    correctAnswer: "₹500",
    explanation: "Smoking in public places can attract a fine of ₹500 under the Cigarettes and Other Tobacco Products Act (COTPA).",
  },
  {
    question: "What is the punishment for dowry death in India?",
    options: ["5 years in jail", "7 years in jail", "10 years in jail", "Life imprisonment"],
    correctAnswer: "Life imprisonment",
    explanation: "Dowry death is punishable with life imprisonment under Section 304B of the IPC.",
  },
  {
    question: "What is the penalty for defacing public property in India?",
    options: ["₹500", "₹1000", "₹2000", "₹5000"],
    correctAnswer: "₹1000",
    explanation: "Defacing public property can attract a fine of ₹1000 under Section 3 of the Prevention of Damage to Public Property Act.",
  },
  {
    question: "What is the punishment for causing death by negligence in India?",
    options: ["2 years in jail", "5 years in jail", "7 years in jail", "10 years in jail"],
    correctAnswer: "2 years in jail",
    explanation: "Causing death by negligence is punishable with up to 2 years in jail under Section 304A of the IPC.",
  },
  {
    question: "What is the punishment for bribery in India?",
    options: ["1 year in jail", "3 years in jail", "7 years in jail", "10 years in jail"],
    correctAnswer: "7 years in jail",
    explanation: "Bribery is punishable with up to 7 years in jail under the Prevention of Corruption Act.",
  },
  {
    question: "What is the fine for drinking in public places in India?",
    options: ["₹200", "₹500", "₹1000", "₹2000"],
    correctAnswer: "₹1000",
    explanation: "Drinking in public places can attract a fine of ₹1000 in many cities as per local laws.",
  },
  {
    question: "What is the penalty for kidnapping in India?",
    options: ["5 years in jail", "7 years in jail", "10 years in jail", "Life imprisonment"],
    correctAnswer: "10 years in jail",
    explanation: "Kidnapping is punishable with up to 10 years in jail under Section 363 of the IPC.",
  },
  {
    question: "What is the punishment for misappropriation of funds in India?",
    options: ["1 year in jail", "3 years in jail", "5 years in jail", "10 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Misappropriation of funds is punishable with up to 3 years in jail under Section 403 of the IPC.",
  },
  {
    question: "What is the fine for not using a helmet while riding a two-wheeler in India?",
    options: ["₹200", "₹500", "₹1000", "₹2000"],
    correctAnswer: "₹500",
    explanation: "Riding without a helmet can attract a fine of ₹500 under the Motor Vehicle Act.",
  },
  {
    question: "What is the punishment for assault in India?",
    options: ["6 months in jail", "1 year in jail", "3 years in jail", "5 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Assault is punishable with up to 3 years in jail under Section 351 of the IPC.",
  },
  {
    question: "What is the penalty for possession of illegal firearms in India?",
    options: ["3 years in jail", "5 years in jail", "7 years in jail", "10 years in jail"],
    correctAnswer: "7 years in jail",
    explanation: "Possession of illegal firearms is punishable with up to 7 years in jail under the Arms Act, 1959.",
  },
  {
    question: "What is the punishment for online harassment in India?",
    options: ["3 years in jail", "5 years in jail", "7 years in jail", "10 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Online harassment is punishable with up to 3 years in jail under the IT Act.",
  },
  {
    question: "What is the fine for driving without valid insurance in India?",
    options: ["₹500", "₹1000", "₹2000", "₹5000"],
    correctAnswer: "₹2000",
    explanation: "Driving without valid insurance can attract a fine of ₹2000 under the Motor Vehicle Act.",
  },
  {
    question: "What is the punishment for identity theft in India?",
    options: ["1 year in jail", "3 years in jail", "5 years in jail", "7 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Identity theft is punishable with up to 3 years in jail under the IT Act.",
  },
  {
    question: "What is the penalty for environmental pollution in India?",
    options: ["₹500", "₹1000", "₹5000", "₹10,000"],
    correctAnswer: "₹5000",
    explanation: "Environmental pollution can result in a fine of ₹5000 under various environmental protection laws.",
  },
  {
    question: "What is the punishment for animal cruelty in India?",
    options: ["1 year in jail", "3 years in jail", "5 years in jail", "7 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Animal cruelty is punishable with up to 3 years in jail under the Prevention of Cruelty to Animals Act.",
  },
  {
    question: "What is the fine for carrying too many passengers in a vehicle in India?",
    options: ["₹500", "₹1000", "₹2000", "₹5000"],
    correctAnswer: "₹2000",
    explanation: "Carrying too many passengers can attract a fine of ₹2000 under the Motor Vehicle Act.",
  },
  {
    question: "What is the punishment for adultery in India?",
    options: ["1 year in jail", "3 years in jail", "5 years in jail", "Not punishable"],
    correctAnswer: "Not punishable",
    explanation: "Adultery is no longer punishable under Section 497 of the IPC following a 2018 Supreme Court ruling.",
  },
  {
    question: "What is the penalty for violating traffic signals in India?",
    options: ["₹100", "₹500", "₹1000", "₹2000"],
    correctAnswer: "₹1000",
    explanation: "Violating traffic signals can result in a fine of ₹1000 under the Motor Vehicle Act.",
  },
  {
    question: "What is the fine for overloading a vehicle in India?",
    options: ["₹500", "₹1000", "₹2000", "₹5000"],
    correctAnswer: "₹2000",
    explanation: "Overloading a vehicle can attract a fine of ₹2000 under the Motor Vehicle Act.",
  },
  {
    question: "What is the punishment for importing counterfeit goods in India?",
    options: ["1 year in jail", "3 years in jail", "5 years in jail", "7 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Importing counterfeit goods is punishable with up to 3 years in jail under the Customs Act, 1962.",
  },
  {
    question: "What is the penalty for abandoning a child in India?",
    options: ["3 years in jail", "5 years in jail", "7 years in jail", "10 years in jail"],
    correctAnswer: "7 years in jail",
    explanation: "Abandoning a child is punishable with up to 7 years in jail under the Juvenile Justice Act.",
  },
  {
    question: "What is the punishment for spreading fake news in India?",
    options: ["1 year in jail", "3 years in jail", "5 years in jail", "7 years in jail"],
    correctAnswer: "3 years in jail",
    explanation: "Spreading fake news can lead to up to 3 years in jail under the IT Act and IPC.",
  }
  // Add 30 more questions here
  // For brevity, I can continue if you confirm this format works for you.
];

const GuessThePenalty = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started

  // Shuffle the questions array and pick the first 5
  const shuffleQuestions = (questionsList) => {
    const shuffled = questionsList
      .map((question) => ({ question, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ question }) => question);

    return shuffled.slice(0, 5); // Get only the first 5 questions
  };

  // Initialize the game with shuffled questions
  useEffect(() => {
    const shuffledQuestions = shuffleQuestions(originalQuestionsList);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const isAnswerCorrect = option === questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => Math.min(prevScore + 1, 5)); // Ensure score doesn't exceed 5
    }

    setShowExplanation(true);

    // Once the first question is answered, mark the game as started
    if (!gameStarted) {
      setGameStarted(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setIsCorrect(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Go to next question
    } else {
      setGameOver(true); // End the game when all questions are answered
    }
  };

  const restartGame = () => {
    const shuffledQuestions = shuffleQuestions(originalQuestionsList);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setIsCorrect(null);
    setGameOver(false);
    setGameStarted(false); // Reset gameStarted state when restarting the game
  };

  // Start the game when the component is loaded (just on first render)
  const startGame = () => {
    setGameStarted(true); // Mark the game as started
  };

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  const question = questions[currentQuestionIndex];

  return (
    <div className="game-container">
      <h2 className="game-title" style={{ color: "#007bff" }}>
        Guess the Penalty
      </h2>

      {/* Display "Start the Game!" before game starts */}
      {!gameStarted && !gameOver && (
        <div className="score">
          <span className="start-text">Start the Game!</span>
        </div>
      )}

      {/* Display score only after the game has started */}
      {gameStarted && !gameOver && (
        <div className="score">
          {`Score: ${score}/5`}
        </div>
      )}

      {!gameOver ? (
        <div className="question-box">
          <p className="question">{question.question}</p>
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOption === option
                    ? isCorrect
                      ? "correct-option"
                      : "wrong-option"
                    : ""
                }`}
                onClick={() => handleAnswer(option)}
                disabled={showExplanation}
              >
                {option}
              </button>
            ))}
          </div>
          {showExplanation && (
            <div className="explanation">
              <p>
                {isCorrect
                  ? "Correct!"
                  : `Wrong! The correct answer is "${question.correctAnswer}".`}
              </p>
              <p>{question.explanation}</p>
              <button className="next-button" onClick={handleNextQuestion}>
                {currentQuestionIndex < questions.length - 1
                  ? "Next Question"
                  : "Finish Game"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="game-over">
          <h1>Game Over!</h1>
          <p>Your final score: {score}/5</p>
          <button className="restart-button" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default GuessThePenalty;