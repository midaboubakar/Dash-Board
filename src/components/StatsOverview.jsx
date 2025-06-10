import React from 'react';
import './StatsOverview.css';

function StatsOverview({ games }) {
  const totalGames = games.length;
  const totalHours = games.reduce((sum, g) => sum + g.playtime, 0);

  return (
    <div className="stats-overview">
      <div>
        <h3>Jeux</h3>
        <p>{totalGames}</p>
      </div>
      <div>
        <h3>Heures jouées</h3>
        <p>{totalHours}</p>
      </div>
    </div>
  );
}

export default StatsOverview;
