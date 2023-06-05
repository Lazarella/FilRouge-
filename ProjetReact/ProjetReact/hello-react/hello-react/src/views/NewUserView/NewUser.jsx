import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewUser.css';

const NewUser = ({ users, setUsers }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isJumping, setIsJumping] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    //PAGE DE CHARGEMENT
    if (isLoading) {
      setIsTyping(true); // Activer l'effet de typage
      const textToType = "Création de votre écurie...";
      let currentIndex = -1;
      const typingInterval = setInterval(() => {
          currentIndex++;
        setTypedText((prevText) => prevText + textToType[currentIndex]);

        if (currentIndex === textToType.length -1) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsLoading(false); // Désactiver la page de chargement
            setIsTyping(false); // Désactiver l'effet de typage
            navigate('/Burger'); // Rediriger vers la page "burger"
          }, 3000); // Temps d'attente de  3 seconde avant la redirection
          }
      }, 100); // Vitesse de frappe des lettres (100 millisecondes)

      return () => clearInterval(typingInterval);
    }
  }, [isLoading, navigate]);

  const startLoading = () => {
    setIsLoading(true); // Activer la page de chargement
  };


 // SAUTER 

 useEffect(() => {
  function handleKeyDown(event) {
    if (event.code === 'Space' && !isJumping) {
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 300); // Temps avant de réinitialiser la classe CSS (300 millisecondes)
    }
  }

  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [isLoading, navigate, isJumping]);




//FIN DE PAGE DE CHARGEMENT


  function resetState() {
    setPhoto(null);
    setNom('');
    setPrenom('');
    setIdentifiant('');
    setMdp('');
  }

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    setPhoto(file);
  }

  const [photo, setPhoto] = useState(null);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [identifiant, setIdentifiant] = useState('');
  const [mdp, setMdp] = useState('');

  return (
    <div className="container">
       {isLoading ? (
        <div className={`loading ${isJumping ? 'jump' : ''}`}>
          <div>
             <img src="img/loadgif.gif" className={`loadingimg ${isJumping ? 'jumping' : ''}`} alt="Loading" />
          </div>
          <div className="typing-effect">{typedText}</div>
             
        </div>
      ) : (
        <div className="card formulaire">
          <div className="sitename">
            <img src="img/logo.jpg" className="logo" alt="Logo" /> Pottok
          </div>
          <h2 className="title">Formulaire d'inscription pour devenir un vrai Pottoker</h2>
          <div className="form-control">
            <div className="mb-3">
              <label htmlFor="nom">Nom :</label>
              <input
                type="text"
                className="form-control"
                name="nom"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="prenom">Prénom :</label>
              <input
                type="text"
                className="form-control"
                name="prenom"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Identifiant :</label>
              <input
                type="text"
                className="form-control"
                name="identifiant"
                id="identifiant"
                value={identifiant}
                onChange={(e) => setIdentifiant(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mdp">Mot de passe :</label>
              <input
                type="password"
                className="form-control"
                name="mdp"
                id="mdp"
                value={mdp}
                onChange={(e) => setMdp(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo">Photo de profil :</label>
              <input
                type="file"
                className="form-control"
                name="photo"
                id="photo"
                onChange={handlePhotoChange}
              />
            </div>
            <button className="btn btn-success form-control" onClick={startLoading}>
              Valider
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewUser;