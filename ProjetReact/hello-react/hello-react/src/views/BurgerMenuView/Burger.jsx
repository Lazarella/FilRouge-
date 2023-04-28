import './Burger.css';
import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    link,
    Outlet
} from 'react-router-dom';


const BurgerMenu = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdownClick = () => {setShowDropdown(!showDropdown)}
    return (

        <div>
        
        <div className="search-bar">
  <button type="submit">Rechercher</button>
  <input type="text" placeholder="Rechercher..."/>
    </div>


        <div id="nomUser">
        <img src="./img/imgUser.jpeg" id="imgUser" class="User" alt="imgUser" />
        <h1 class="username">User 1</h1> 
        </div>

        <div className="burger-menu">
        <button className="menu-icon" onClick={handleDropdownClick}>
          <i className="fas fa-bars">Compte</i>
        </button>
        {showDropdown && (
          <div className="dropdown">
            <ul>
              <li><a href="#">Message</a></li>
              <li><a href="#">Modifier le profil</a></li>
              <li><a href="#">Déconnexion</a></li>
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