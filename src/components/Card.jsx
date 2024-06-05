import React from 'react';
/* import './Card.css'; */
import '../App.css';


const Card = ({ card, onClick }) => (
  <div className="card" onClick={() => onClick(card)}>
    <img src={card.image} alt={card.name} />
    <p>{card.name}</p>
  </div>
);

export default Card;
