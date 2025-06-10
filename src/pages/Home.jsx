import React from 'react';
import './Home.css'; // on importe les styles

function Home() {
  return (
    <main className="home-container">
      <section className="intro-section">
        <h1>Bienvenue sur ton Dashboard Gaming</h1>
        <p>Suivez vos temps de jeu, succès, et statistiques Steam/PS/Xbox facilement.</p>
        <button className="btn-primary">Voir mes jeux</button>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h2>Temps de jeu</h2>
          <p>Visualisez vos heures passées sur chaque jeu.</p>
        </div>

        <div className="feature-card">
          <h2>Succès débloqués</h2>
          <p>Gardez un œil sur vos trophées et exploits.</p>
        </div>

        <div className="feature-card">
          <h2>Statistiques avancées</h2>
          <p>Comparez vos performances sur Steam, PlayStation, Xbox.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
