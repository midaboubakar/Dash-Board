import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink>
      <NavLink to="/games" className={({ isActive }) => isActive ? 'active' : ''}>Tous les jeux</NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>Profil</NavLink>
      <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>Paramètres</NavLink>
      <NavLink to="/rawapi" className={({ isActive }) => isActive ? 'active' : ''}>Raw API</NavLink>
      <NavLink to="/steamapi" className={({ isActive }) => isActive ? 'active' : ''}>Steam API</NavLink>
    </nav>
  );
}

export default Navbar;
