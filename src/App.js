import React, { useState } from "react";
import "./App.css";

function App() {
  
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Who is the senator representing Lagos East in 2022?",
      options: [
        { id: 0, text: "Babajide Sanwoolu", isCorrect: false },
        { id: 1, text: "Adetokunbo Benson Abiru", isCorrect: false },
        { id: 2, text: "Gbenga Omotosho", isCorrect: false },
        { id: 3, text: "Mukhail Adetokunbo Abiru", isCorrect: true },
      ],
    },
    {
      text: "What is the full meaning of SAIL?",
      options: [
        { id: 0, text: "State Available Index Landscape", isCorrect: false },
        { id: 1, text: "Sample Aid Innovation Law", isCorrect: false },
        { id: 2, text: "Senator Abiru Innovation Lab", isCorrect: true },
        { id: 3, text: "Shola Age Inlink Length", isCorrect: false },
      ],
    },
    {
      text: "How many LGs are under Lagos East senatorial district?",
      options: [
        { id: 0, text: "Six", isCorrect: false },
        { id: 1, text: "Five", isCorrect: true },
        { id: 2, text: "Seven", isCorrect: false },
        { id: 3, text: "Four", isCorrect: false },
      ],
    },
    {
      text: "Lagos was created in what year?",
      options: [
        { id: 0, text: "1975", isCorrect: false },
        { id: 1, text: "1982", isCorrect: false },
        { id: 2, text: "1969", isCorrect: false },
        { id: 3, text: "1967", isCorrect: true },
      ],
    },
    {
      text: "How many regions constitute Nigeria?",
      options: [
        { id: 0, text: "Six", isCorrect: true },
        { id: 1, text: "Four", isCorrect: false },
        { id: 2, text: "Seven", isCorrect: false },
        { id: 3, text: "Twelve", isCorrect: false },
      ],
    },
    {
      text: "The smallest state in Nigeria is:",
      options: [
        { id: 0, text: "Borno", isCorrect: false },
        { id: 1, text: "Anambra", isCorrect: false },
        { id: 2, text: "Kwara", isCorrect: false },
        { id: 3, text: "Lagos", isCorrect: true },
      ],
    },
    {
      text: "Which of the following countries DOES NOT border Nigeria?",
      options: [
        { id: 0, text: "Ghana", isCorrect: true },
        { id: 1, text: "Chad", isCorrect: false },
        { id: 2, text: "Niger Republic", isCorrect: false },
        { id: 3, text: "Benin Republic", isCorrect: false },
      ],
    },
    {
      text: "Who was the first Governor of Lagos state?",
      options: [
        { id: 0, text: "Alhaji Lateef Jakande", isCorrect: false },
        { id: 1, text: "Col. Buba Marwa", isCorrect: false },
        { id: 2, text: "Brigadier Mobolaji Johnson", isCorrect: true },
        { id: 3, text: "Bola Ahmed Tinubu", isCorrect: false },
      ],
    },
    {
      text: "How many divisions are in Lagos state?",
      options: [
        { id: 0, text: "Ten", isCorrect: false },
        { id: 1, text: "Fifteen", isCorrect: false },
        { id: 2, text: "Twenty", isCorrect: false },
        { id: 3, text: "Five", isCorrect: true },
      ],
    },
    {
      text: "Dangote refinery is situtated in which LG?",
      options: [
        { id: 0, text: "Ikorodu", isCorrect: true },
        { id: 1, text: "Lagos Island", isCorrect: false },
        { id: 2, text: "Ibeju-Lekki", isCorrect: true },
        { id: 3, text: "Kosofe", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Adeshola's Random Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;