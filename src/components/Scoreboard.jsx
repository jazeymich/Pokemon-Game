import React from 'react';
/* import './Scoreboard.css';
 */
import '../App.css';
const Scoreboard = ({ currentScore, bestScore }) => (
  <div className="scoreboard">
    <h2>Scoreboard</h2>
    <p>Current Score: {currentScore}</p>
    <p>Best Score: {bestScore}</p>
  </div>
);

export default Scoreboard;
