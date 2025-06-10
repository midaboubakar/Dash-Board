import React from 'react';
import './Settings.css';

function Settings() {
  return (
    <div className="settings-container">
      <h1 className="settings-title">Paramètres</h1>
      <div className="settings-card">
        <p><strong>Notification :</strong> Activée</p>
        <p><strong>Thème :</strong> Sombre</p>
        <p><strong>Langue :</strong> Français</p>
      </div>
    </div>
  );
}

export default Settings;
