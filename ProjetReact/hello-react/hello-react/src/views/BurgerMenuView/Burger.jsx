import './Burger.css';
import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from 'react-router-dom';
import Accueil from '../AccueilView/Accueil';




const BurgerMenu = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
  
    const handleDropdownClick = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleLogoutClick = () => {
      navigate('/');
    };
    return (
        <div>
          <div className="search-bar">
            <button type="submit">Rechercher</button>
            <input type="text" placeholder="Rechercher..." />
          </div>
    
          <div id="nomUser">
            <img src="./img/imgUser.jpeg" id="imgUser" className="User" alt="imgUser" />
            <h1 className="username">User 1</h1>
          </div>
    
          <div className="burger-menu">
            <button className="menu-icon" onClick={handleDropdownClick}>
              <div className="principalButton">Compte</div>
            </button>
            {showDropdown && (
              <div className="dropdown">
                <ul>
                  <li> <a href="#">Message</a></li>
                  <li><a href="#">Modifier le profil</a></li>
                  <li><a href="#" onClick={handleLogoutClick}> Déconnexion </a></li>
                </ul>
              </div>
            )}
          </div>
    
          <div className="new-projet">
            <button>Nouveau Projet</button>
          </div>
        </div>
      );
    };
    
    export default BurgerMenu;