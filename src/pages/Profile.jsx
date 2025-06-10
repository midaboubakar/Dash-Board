import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Profil Utilisateur</h1>
      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="Avatar"
          className="profile-avatar"
        />
        <div className="profile-info">
          <p><strong>Nom :</strong> Ella Midjiyawa</p>
          <p><strong>PreNom :</strong> Mohamadou Ab</p>
          <p><strong>Email :</strong> midaboubakar@gmail.com</p>
          <p><strong>Jeux favoris :</strong> Elden Ring, God of War</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
