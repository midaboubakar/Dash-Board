import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

function GameCard({ game }) {
  return (
    <Link to={`/games/${game.id}`} className="game-card">
      <img src={game.image} alt={game.name} className="game-card-image" />
      <div className="game-card-body">
        <h3 className="game-card-title">{game.name}</h3>
        <p className="game-card-platform">{game.platform}</p>
        <p className="game-card-playtime">{game.playtime}h</p>
      </div>
    </Link>
  );
}

export default GameCard;
