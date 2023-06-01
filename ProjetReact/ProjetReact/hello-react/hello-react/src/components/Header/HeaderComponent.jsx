import React from 'react';
import './HeaderComponent.css';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/'); // Assurez-vous que le chemin correspond à votre page d'accueil
    };
    return (
        <div id="background-green">
            
    <h2 onClick={handleClick}>Pottok ♥</h2>
    <p id="italic">Gagnez la course contre le temps! Démarrez au galop avec notre gestionnaire de tâches intuitif!</p>
    <img src="./img/logo.jpg" id="logocheval" class="logo" alt="logoPottok" />
        </div>
    );
};

export default HeaderComponent;