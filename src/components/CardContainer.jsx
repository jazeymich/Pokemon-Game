import React, { useState, useEffect } from 'react';
import Card from './Card';
import { fetchCards } from '../utils/api.js';

import '../App.css';
/* import './CardContainer.css'; */

const CardContainer = ({ updateScores }) => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const loadCards = async () => {
      const data = await fetchCards();
      const formattedData = data.map((item, index) => ({
        id: index,
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
      }));
      setCards(formattedData);
    };
    loadCards();
  }, []);
  
  const shuffleCards = (clickedCard) => {
    setCards((prevCards) => {
      const shuffledCards = [...prevCards];
      for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
      }
      updateScores(clickedCard);
      return shuffledCards;
    });
  };

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={shuffleCards} />
      ))}
    </div>
  );
};

export default CardContainer;
