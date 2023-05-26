import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjetContext } from '../../datas/ProjetContext';

import './Burger.css';

const BurgerMenu = () => {
  const { projets, contextProjets, nouveauProjet, supprimerProjet } = useContext(ProjetContext);
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [nomProjet, setNomProjet] = useState('');
  const [nomEquipe, setNomEquipe] = useState('');
  const [nombreTache, setNombreTache] = useState('');
  const [statut, setStatut] = useState('A faire');
  const navigate = useNavigate();

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNewProjectClick = () => {
    setShowNewProjectForm(!showNewProjectForm);
  };

  const handleNomProjetChange = (e) => {
    setNomProjet(e.target.value);
  };

  const handleNomEquipeChange = (e) => {
    setNomEquipe(e.target.value);
  };

  const handleNombreTacheChange = (e) => {
    setNombreTache(e.target.value);
  };

  const handleStatutChange = (e) => {
    setStatut(e.target.value);
  };

  const handleNewProjectSubmit = (e) => {
    e.preventDefault();

    const nouveauProjet = {
      nomProjet,
      nomEquipe,
      nombreTache,
      statut
    };

    contextProjets.nouveauProjet(nouveauProjet);

    setNomProjet('');
    setNomEquipe('');
    setNombreTache('');
    setStatut('A faire');
    setShowNewProjectForm(false);
  };

  const handleSupprimerProjet = (index) => {
    contextProjets.supprimerProjet(index);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('identifiant');
    navigate('/');
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userIdentifiant = localStorage.getItem('identifiant');

  if (!isLoggedIn) {
    navigate('/connexion');
    return null;
  }

  return (
    <div>
      <div className="search-bar">
        <button type="submit">Rechercher</button>
        <input type="text" placeholder="Rechercher..." />
      </div>

      <div id="nomUser">
        <img src="./img/imgUser.jpeg" id="imgUser" className="User" alt="imgUser" />
        <h1 className="username">{userIdentifiant}</h1>
      </div>

      <div className="burger-menu">
        <button className="menu-icon" onClick={handleDropdownClick}>
          <div className="principalButton">Compte</div>
        </button>
        {showDropdown && (
          <div className="dropdown">
            <ul>
              <li><a href="#">Message</a></li>
              <li><a href="#">Modifier le profil</a></li>
              <li><a href="#" onClick={handleLogoutClick}>Déconnexion</a></li>
            </ul>
          </div>
        )}
      </div>

      <div className="new-projet">
        <button onClick={handleNewProjectClick}>Nouveau Projet</button>
      </div>

      {showNewProjectForm && (
        <div className="new-project-form">
          <h2>Nouveau Projet</h2>
          <form onSubmit={handleNewProjectSubmit}>
            <div className="form-group">
              <label htmlFor="nomProjet">Nom du projet:</label>
              <input type="text" id="nomProjet" value={nomProjet} onChange={handleNomProjetChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="nomEquipe">Nom de l'équipe:</label>
              <input type="text" id="nomEquipe" value={nomEquipe} onChange={handleNomEquipeChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="nombreTache">Nombre de tâches:</label>
              <input type="text" id="nombreTache" value={nombreTache} onChange={handleNombreTacheChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="statut">Statut:</label>
              <select id="statut" value={statut} onChange={handleStatutChange} required>
                <option value="A faire">A faire</option>
                <option value="En cours">En cours</option>
                <option value="Terminé">Terminé</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit">Valider</button>
            </div>
          </form>
        </div>
      )}

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nom du projet</th>
            <th scope="col">Nom de l'équipe</th>
            <th scope="col">Nombre de tâches</th>
            <th scope="col">Statut</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {contextProjets.projets.map((projet, index) => (
            <tr key={index}>
              <td>{projet.nomProjet}</td>
              <td>{projet.nomEquipe}</td>
              <td>{projet.nombreTache}</td>
              <td>{projet.statut}</td>
              <td>
                <button onClick={() => supprimerProjet(index)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    
      );
    };
    
    export default BurgerMenu;