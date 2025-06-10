import React from 'react';
import GameCard from '../components/GameCard';
import games from '../mock/games';
import './AllGames.css';

// Regrouper les jeux par type
function groupGamesByType(games) {
  return games.reduce((acc, game) => {
    const type = game.type || 'Autres';
    if (!acc[type]) acc[type] = [];
    acc[type].push(game);
    return acc;
  }, {});
}

function AllGames() {
  const gamesByType = groupGamesByType(games);

  return (
    <main className="all-games-container">
      <h1 className="page-title">Tous mes jeux</h1>
      <div className="all-sections-wrapper">
        {Object.entries(gamesByType).map(([type, gamesList]) => (
          <section key={type} className="game-section">
            <h2 className="game-type">{type}</h2>
            <div className="game-list">
              {gamesList.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default AllGames;
