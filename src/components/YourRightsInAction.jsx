import React, { useState, useEffect } from "react";
import './YourRightsInAction.css';

const scenarios = [
  {
    question: "You witness a person getting arrested by the police. They claim they are being treated unfairly. What do you do?",
    options: [
      { text: "Ask the police if they are treating the person fairly", outcome: "wrong", explanation: "Asking the police may not be the most effective way to ensure fairness. You should try to gather evidence or contact legal authorities." },
      { text: "Record the situation with your phone", outcome: "correct", explanation: "Recording the situation can be helpful as evidence in case of any legal dispute." },
      { text: "Ignore the situation", outcome: "wrong", explanation: "Ignoring the situation could lead to injustices going unaddressed. It's important to take action when witnessing rights violations." },
      { text: "Approach the person and ask if they need help", outcome: "wrong", explanation: "While it's good to offer help, approaching the situation without knowing the facts could put you in danger or complicate things." }
    ]
  },
  
  {
    question: "You're asked to sign a document at a police station but you're not sure what it says. What do you do?",
    options: [
      { text: "Sign it without asking questions", outcome: "wrong", explanation: "You should never sign a document you don't understand. Always ask for clarification or a translation if needed." },
      { text: "Ask for a lawyer to review the document", outcome: "correct", explanation: "It's your right to ask for legal assistance before signing anything you're unsure of." },
      { text: "Walk away and refuse to sign", outcome: "wrong", explanation: "Refusing to sign might not be the best option. It’s better to ask for legal assistance if you're uncertain." },
      { text: "Ask for a translator if you don't understand the language", outcome: "correct", explanation: "You have the right to understand any document you are asked to sign. A translator can assist if needed." }
    ]
  },
  {
    question: "You're being questioned by the police. They haven't read you your rights. What do you do?",
    options: [
      { text: "Answer their questions willingly", outcome: "wrong", explanation: "You have the right to remain silent. Always ask for a lawyer before answering any questions." },
      { text: "Politely inform them that you wish to remain silent until you have legal counsel", outcome: "correct", explanation: "You have the right to remain silent and request a lawyer during police questioning." },
      { text: "Argue with the police and demand to leave", outcome: "wrong", explanation: "While you can assert your rights, arguing with the police may escalate the situation unnecessarily." },
      { text: "Ask if you are under arrest", outcome: "correct", explanation: "You have the right to know whether you are being detained or arrested." }
    ]
  },
  {
    question: "You're stopped by the police for a random check. They ask to search your bag. What do you do?",
    options: [
      { text: "Let them search without asking questions", outcome: "wrong", explanation: "You have the right to ask why they want to search your bag." },
      { text: "Politely ask if you can decline the search", outcome: "correct", explanation: "You can refuse a search unless the police have a valid reason or warrant." },
      { text: "Demand to know the reason for the search", outcome: "correct", explanation: "The police must have a valid reason to search you or your belongings." },
      { text: "Allow the search but ask for a receipt", outcome: "correct", explanation: "You can ask for a receipt if they take anything during the search." }
    ]
  },
  {
    question: "A police officer demands your ID, but you don't have it on you. What do you do?",
    options: [
      { text: "Give them your name and address", outcome: "correct", explanation: "You are legally required to provide identification when asked by the police, but not if they have no reason to stop you." },
      { text: "Refuse to provide any information", outcome: "wrong", explanation: "Refusing to cooperate may lead to suspicion and detention." },
      { text: "Ask if you're being detained or free to leave", outcome: "correct", explanation: "If you are not being detained, you can ask to leave." },
      { text: "Offer your phone number instead", outcome: "wrong", explanation: "You are required to provide certain information, such as your name and address, but not alternative contact details." }
    ]
  },
  {
    question: "You are wrongfully accused of a crime you didn’t commit. What should you do?",
    options: [
      { text: "Confess to avoid trouble", outcome: "wrong", explanation: "Never confess to a crime you didn't commit. You have the right to remain silent and get legal help." },
      { text: "Remain silent and request a lawyer", outcome: "correct", explanation: "You have the right to remain silent and ask for legal representation." },
      { text: "Argue with the police and demand to be released", outcome: "wrong", explanation: "Arguing may escalate the situation. Stay calm and request legal help." },
      { text: "Cooperate and explain your side of the story", outcome: "wrong", explanation: "It's better to remain silent and consult a lawyer first before offering any explanation." }
    ]
  },
  {
    question: "You are at a protest and the police tell you to disperse. What do you do?",
    options: [
      { text: "Leave immediately", outcome: "correct", explanation: "If the police ask you to leave, it’s important to comply, as they may have declared the protest illegal." },
      { text: "Stay and continue protesting", outcome: "wrong", explanation: "If the police declare the protest illegal, staying may result in detention." },
      { text: "Try to negotiate with the police", outcome: "wrong", explanation: "Negotiation is not advisable. It's better to comply and leave peacefully." },
      { text: "Record the situation while leaving", outcome: "correct", explanation: "Recording the situation as you leave may serve as evidence, in case of any legal disputes later." }
    ]
  },
  {
    question: "A police officer asks for your phone. Do you have to give it to them?",
    options: [
      { text: "Yes, because they asked for it", outcome: "wrong", explanation: "You do not have to give your phone to the police unless they have a warrant." },
      { text: "No, unless they have a valid reason or warrant", outcome: "correct", explanation: "You have the right to refuse unless the police have a valid legal reason or warrant." },
      { text: "Hand over the phone, but ask for a receipt", outcome: "correct", explanation: "If the police take your phone, they must have a valid reason, and you can ask for a receipt." },
      { text: "Politely ask them why they need your phone", outcome: "correct", explanation: "It's important to understand why they are requesting your phone, and you have the right to ask." }
    ]
  },
  {
    question: "You are driving and the police pull you over. They ask to search your vehicle. What do you do?",
    options: [
      { text: "Allow the search without question", outcome: "wrong", explanation: "You can ask the police for a reason before agreeing to a search." },
      { text: "Ask if they have a warrant to search your vehicle", outcome: "correct", explanation: "You have the right to ask for a warrant before the police search your vehicle." },
      { text: "Refuse to allow them to search", outcome: "wrong", explanation: "You should comply unless they have a warrant or legal reason to search." },
      { text: "Ask if you are free to leave before they search", outcome: "correct", explanation: "If you are not being detained, you may leave without consenting to the search." }
    ]
  },
  {
    question: "You are detained by the police, but they haven't informed you of the reason. What should you do?",
    options: [
      { text: "Remain silent until you are told the reason", outcome: "correct", explanation: "You have the right to know why you are being detained." },
      { text: "Ask to leave", outcome: "wrong", explanation: "You can't leave unless the police inform you that you're free to go." },
      { text: "Argue with them about your rights", outcome: "wrong", explanation: "While you can assert your rights, arguing with the police could escalate the situation." },
      { text: "Request a phone call to inform someone about your detention", outcome: "correct", explanation: "You have the right to inform someone about your detention." }
    ]
  },
  {
    question: "You're arrested, and the police don't inform you of your rights. What do you do?",
    options: [
      { text: "Stay silent and wait for your lawyer", outcome: "correct", explanation: "You have the right to remain silent and consult a lawyer." },
      { text: "Speak up and try to explain your innocence", outcome: "wrong", explanation: "It's better to remain silent until you have legal representation." },
      { text: "Agree to answer questions without a lawyer", outcome: "wrong", explanation: "You are not required to speak without a lawyer." },
      { text: "Ask for your rights to be read aloud", outcome: "correct", explanation: "You have the right to be informed of your rights, and you can request them to be read to you." }
    ]
  },
  {
    question: "A police officer demands to search your home. What do you do?",
    options: [
      { text: "Allow the search without asking questions", outcome: "wrong", explanation: "The police need a warrant to search your home, unless there's an emergency." },
      { text: "Refuse to allow them to search your home", outcome: "correct", explanation: "You have the right to refuse unless they present a warrant." },
      { text: "Ask for a warrant before they search", outcome: "correct", explanation: "You can ask to see the warrant before allowing a search." },
      { text: "Offer to let them search a specific area only", outcome: "wrong", explanation: "You cannot give partial consent. They need a warrant for the full search." }
    ]
  },
  {
    question: "A police officer stops you on the road and asks you to produce your vehicle's documents. What do you do?",
    options: [
      { text: "Refuse to show the documents", outcome: "wrong", explanation: "Refusing to show documents can result in penalties. You are required to provide valid documents when asked." },
      { text: "Politely show the requested documents", outcome: "correct", explanation: "You are legally required to show vehicle-related documents to a police officer when asked." },
      { text: "Ask for a written request to show the documents", outcome: "wrong", explanation: "There’s no need for a written request in such situations; you must comply directly." },
      { text: "Leave the scene without showing the documents", outcome: "wrong", explanation: "Leaving without showing documents may escalate the situation or lead to legal consequences." }
    ]
  },
  {
    question: "You see a person being searched by the police without a warrant. What should you do?",
    options: [
      { text: "Interrupt the search and question the police", outcome: "wrong", explanation: "Interrupting a police search could be seen as obstructing justice." },
      { text: "Observe quietly and document the incident if necessary", outcome: "correct", explanation: "You can document the search if you suspect it is unlawful, but do not interfere directly." },
      { text: "Join others to protest the search on the spot", outcome: "wrong", explanation: "Protesting directly could lead to escalation or your own detention. Stay calm and observe." },
      { text: "Walk away without paying attention", outcome: "wrong", explanation: "Ignoring the situation could mean missing an opportunity to provide valuable evidence later." }
    ]
  },
  {
    question: "You are detained by the police but believe the detention is unlawful. What do you do?",
    options: [
      { text: "Resist and try to escape", outcome: "wrong", explanation: "Resisting or escaping can worsen the situation and lead to additional charges." },
      { text: "Calmly ask the police for the reason for your detention", outcome: "correct", explanation: "You have the right to know the reason for your detention. Stay calm and ask politely." },
      { text: "Demand to see a warrant for your detention", outcome: "wrong", explanation: "Warrants are typically not required for detentions. However, you can ask for the reason." },
      { text: "Call a lawyer immediately", outcome: "correct", explanation: "You have the right to legal assistance and can call a lawyer to help you with the situation." }
    ]
  },
  {
    question: "While being questioned by the police, they try to intimidate you into confessing to a crime. What do you do?",
    options: [
      { text: "Confess to avoid further intimidation", outcome: "wrong", explanation: "You should never confess to something you didn’t do under intimidation." },
      { text: "Stay calm and ask for a lawyer", outcome: "correct", explanation: "You have the right to remain silent and request legal assistance." },
      { text: "Argue with the police about your innocence", outcome: "wrong", explanation: "Arguing could escalate the situation. It’s better to remain calm and ask for legal help." },
      { text: "Agree to answer their questions immediately", outcome: "wrong", explanation: "You are not obligated to answer questions without legal representation." }
    ]
  },
  {
    question: "The police stop you and say they suspect you of carrying illegal items. What should you do?",
    options: [
      { text: "Run away to avoid trouble", outcome: "wrong", explanation: "Running away could increase suspicion and lead to further legal issues." },
      { text: "Cooperate and ask why they suspect you", outcome: "correct", explanation: "You should cooperate and politely ask for the reason behind their suspicion." },
      { text: "Refuse to answer any questions and remain silent", outcome: "correct", explanation: "You have the right to remain silent and request legal counsel before answering." },
      { text: "Demand an apology for being stopped", outcome: "wrong", explanation: "Demanding an apology may not help and could escalate the situation unnecessarily." }
    ]
  },
  {
    question: "A police officer asks for your private phone password. What should you do?",
    options: [
      { text: "Provide the password immediately", outcome: "wrong", explanation: "You are not obligated to provide your phone password unless there’s a court order." },
      { text: "Politely decline and ask for a warrant", outcome: "correct", explanation: "You can decline and request a warrant before sharing personal data like your phone password." },
      { text: "Ignore the request and walk away", outcome: "wrong", explanation: "Ignoring the officer could worsen the situation. Politely state your rights instead." },
      { text: "Ask the officer for the reason they need access to your phone", outcome: "correct", explanation: "It’s your right to ask why they need access to your private data." }
    ]
  },
  {
    question: "You are at a public event, and the police ask for a random identity check. What do you do?",
    options: [
      { text: "Refuse and leave the event", outcome: "wrong", explanation: "Leaving without complying might increase suspicion or lead to detainment." },
      { text: "Provide your ID as requested", outcome: "correct", explanation: "You should comply and provide your ID when asked by the police." },
      { text: "Argue with the police about your rights", outcome: "wrong", explanation: "Arguing could escalate the situation. It’s better to cooperate calmly." },
      { text: "Ask why they are conducting the identity check", outcome: "correct", explanation: "It’s reasonable to ask about the purpose of the identity check while cooperating." }
    ]
  },
  {
    question: "The police visit your home for questioning but have no warrant. What do you do?",
    options: [
      { text: "Let them inside without hesitation", outcome: "wrong", explanation: "The police cannot enter your home without your consent or a valid warrant." },
      { text: "Politely decline and ask them to come back with a warrant", outcome: "correct", explanation: "You have the right to refuse entry unless the police have a warrant." },
      { text: "Refuse to answer the door", outcome: "wrong", explanation: "Refusing to engage might create unnecessary suspicion or tension." },
      { text: "Invite them inside and cooperate fully", outcome: "wrong", explanation: "You should first ask for a warrant before allowing them to enter." }
    ]
  },
  {
    question: "You are protesting peacefully when the police declare it an unlawful assembly. What do you do?",
    options: [
      { text: "Refuse to leave and continue protesting", outcome: "wrong", explanation: "Continuing to protest may lead to your detention. It's better to comply and disperse." },
      { text: "Leave the area immediately", outcome: "correct", explanation: "If the protest is declared unlawful, leaving the area peacefully is the best course of action." },
      { text: "Ask the police for legal documentation of their declaration", outcome: "correct", explanation: "You can ask the police for the legal basis for their declaration if it's safe to do so." },
      { text: "Start recording the situation while dispersing", outcome: "correct", explanation: "Recording the situation while leaving could provide evidence if any rights are violated." }
    ]
  },
  {
    question: "A police officer accuses you of a minor offense but offers to 'settle' without paperwork. What should you do?",
    options: [
      { text: "Agree to settle to avoid legal trouble", outcome: "wrong", explanation: "Settling without paperwork could lead to legal complications later. Always follow due process." },
      { text: "Refuse and ask for a proper legal process", outcome: "correct", explanation: "You should insist on proper legal procedures and avoid informal settlements." },
      { text: "Report the incident to a senior officer or authority", outcome: "correct", explanation: "Reporting such behavior ensures transparency and accountability in the legal process." },
      { text: "Negotiate for a lower 'settlement'", outcome: "wrong", explanation: "Engaging in such negotiations is unethical and could implicate you in illegal activities." }
    ]
  }
  // Add more scenarios as needed
];


  const YourRightsInAction = () => {
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [userChoice, setUserChoice] = useState(null);
    const [explanationVisible, setExplanationVisible] = useState(false);
    const [explanationText, setExplanationText] = useState('');
    const [showProgressBar, setShowProgressBar] = useState(true);
    const [selectedScenarios, setSelectedScenarios] = useState([]);
  
    useEffect(() => {
      // Shuffle the scenarios array and select the first 5 questions
      const shuffledScenarios = [...scenarios].sort(() => Math.random() - 0.5).slice(0, 5);
      setSelectedScenarios(shuffledScenarios);
    }, []);
  
    const handleChoice = (outcome, explanation) => {
      setUserChoice(outcome);
      setExplanationText(explanation);
      setExplanationVisible(true);
  
      if (outcome === 'correct') {
        setScore(prevScore => prevScore + 1);
      }
  
      // Move to the next scenario or end the game
      if (currentScenarioIndex < selectedScenarios.length - 1) {
        setTimeout(() => {
          setCurrentScenarioIndex(prevIndex => prevIndex + 1);
          setExplanationVisible(false);
        }, 1500); // Wait for 1.5 seconds before moving to the next question
      } else {
        setTimeout(() => {
          setGameOver(true);
        }, 1500); // End the game after the last question
      }
    };
  
    const restartGame = () => {
      setGameOver(false);
      setScore(0);
      setCurrentScenarioIndex(0);
      setUserChoice(null);
      setExplanationVisible(false);
      setShowProgressBar(true);
  
      // Shuffle and select 5 new random questions
      const shuffledScenarios = [...scenarios].sort(() => Math.random() - 0.5).slice(0, 5);
      setSelectedScenarios(shuffledScenarios);
    };
  
    // Check if selectedScenarios is not empty
    if (selectedScenarios.length === 0) {
      return <div>Loading...</div>; // Show loading while scenarios are being shuffled
    }
  
    const scenario = selectedScenarios[currentScenarioIndex];
  
    const progressBarWidth = ((currentScenarioIndex + 1) / selectedScenarios.length) * 100;
  
    return (
      <div className="game-container">
        <h1>Your Rights in Action</h1>
  
        {gameOver ? (
          <div className="game-over">
            <h2>Game Over!</h2>
            <p>Your score: {score}/5</p> {/* Score out of 5 */}
            <button className="restart-button" onClick={restartGame}>Restart Game</button>
          </div>
        ) : (
          <div className="scenario">
            <p className="question">{scenario.question}</p>
            <div className="options">
              {scenario.options.map((option, index) => (
                <button key={index} onClick={() => handleChoice(option.outcome, option.explanation)} className={`option-button ${userChoice === option.outcome ? 'selected' : ''}`}>
                  {option.text}
                </button>
              ))}
            </div>
  
            {explanationVisible && (
              <div className="explanation">
                <p>{userChoice === 'correct' ? 'Correct!' : 'Wrong!'}</p>
                <p>{explanationText}</p>
              </div>
            )}
  
            {showProgressBar && (
              <div className="progress-bar">
                <div className="progress" style={{ width: `${progressBarWidth}%` }}></div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default YourRightsInAction;