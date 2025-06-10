import React from 'react';
import { useParams } from 'react-router-dom';
import games from '../mock/games';
import './GameDetail.css';

function GameDetail() {
  const { id } = useParams();
  const game = games.find((g) => g.id.toString() === id);

  if (!game) return <p className="not-found">Jeu non trouvé</p>;

  return (
    <main className="game-detail-container">
      <div className="game-detail-content-wrapper">
        <h1 className="game-title">{game.name}</h1>
        <div className="game-detail-content">
          <img className="game-image" src={game.image} alt={game.name} />
          <div className="game-info">
            <p><strong>Temps joué :</strong> {game.playtime} heures</p>
            <p><strong>Plateforme :</strong> {game.platform}</p>
            <p><strong>Description :</strong></p>
            <p className="game-description">{game.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GameDetail;
