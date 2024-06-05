import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard.jsx';
import CardContainer from './components/CardContainer.jsx';
import './App.css';

function Pokemon() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateScores = (clickedCard) => {
    setCurrentScore((prevScore) => prevScore + 1);
    if (currentScore + 1 > bestScore) {
      setBestScore(currentScore + 1);
    }
  };

  return (
    <div className="App">
      <h1>Pokemon Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardContainer updateScores={updateScores} />
    </div>
  );
}

export default  Pokemon;
