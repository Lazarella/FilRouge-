import "./Connexion.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListUser } from "../../datas/UserList";


const Connexion = () => {

    const [identifiant, setIdentifiant] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [erreurMessage, setErreurMessage] = useState('');
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
   
    useEffect(() => {
        if (isLoggedIn) {
          navigate('/Burger');
        }
      }, []);

    const handleIdentifiantChange = (e) => {
        setIdentifiant(e.target.value);
    }

    const handleMotDePasseChange = (e) => {
        setMotDePasse(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = ListUser.find((user) => user.identifiant === identifiant && user.mdp === motDePasse);
        if (user) {
         
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('identifiant', user.identifiant);

            setIdentifiant('');
            setMotDePasse('');
            setErreurMessage('');

            navigate('/Burger'); 
        } else {
            
            setErreurMessage('Identifiant ou mot de passe incorrect');
        }
    };

    return (
        <div className="connexion-container">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="identifiant">Identifiant:</label>
                    <input type="text" id="identifiant" value={identifiant} onChange={handleIdentifiantChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="motDePasse">Mot de passe:</label>
                    <input type="password" id="motDePasse" value={motDePasse} onChange={handleMotDePasseChange} required />
                </div>
                <div className="form-group">
                    <button type="submit">Se connecter</button>
                </div>
                {erreurMessage && <p className="erreur-message">{erreurMessage}</p>}
            </form>
        </div>
    );
}

export default Connexion;
