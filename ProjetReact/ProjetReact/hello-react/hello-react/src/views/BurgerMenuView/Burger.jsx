import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Burger.css';
import '../NewUserView/NewUser';

const BurgerMenu = () => {
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [nomProjet, setNomProjet] = useState('');
  const [nomEquipe, setNomEquipe] = useState('');
  const [nombreTache, setNombreTache] = useState('');
  const [statut, setStatut] = useState('A faire');
  const [projets, setProjets] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
const [deletedProjectName, setDeletedProjectName] = useState('');
const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();

  const handleChatClick = () => {
    setShowChat(!showChat);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    const newMessage = {

      text: message,
      sender: userIdentifiant,
      timestamp: new Date().getTime(),
    }
     
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage('');
  
      if (messages.length === 0) {
        setIsTyping(true);
        setTimeout(() => {
          const replyMessage = {
            text: "Bonjour !",
            sender: "Chat Box",
            timestamp: new Date().getTime(),
          };
          setMessages((prevMessages) => [...prevMessages, replyMessage]);
          setIsTyping(false);
        }, 2000);
      }
    };


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

  const handleStatutChange = (index, e) => {
    const updatedProjects = [...projets];
  updatedProjects[index].statut = e.target.value;
  setProjets(updatedProjects);
  };

  const handleNewProjectSubmit = (e) => {
    e.preventDefault();

    const nouveauProjet = {
      nomProjet,
      nomEquipe,
      nombreTache,
      statut
    };
    setProjets([...projets, nouveauProjet]);
    setNomProjet('');
    setNomEquipe('');
    setNombreTache('');
    setStatut('A faire');
    setShowNewProjectForm(false);
  };

  const handleDeleteProject = (index) => {
    const deletedProjectName = projets[index].nomProjet;
  openDeletePopup(deletedProjectName);
    const updatedProjects = [...projets];
    updatedProjects.splice(index, 1);
    setProjets(updatedProjects);
    setIsDeleting(true); //last ajout
  };

  const openDeletePopup = (projectName) => {
    setDeletedProjectName(projectName);
    setShowDeletePopup(true);
  };
  
  const closeDeletePopup = () => {
    setShowDeletePopup(false);
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
    <div className='p'>
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
            <li><a href="#" onClick={handleChatClick}>Message</a></li>
              <li><a href="#">Modifier le profil</a></li>
              <li><a href="#" onClick={handleLogoutClick}>Déconnexion</a></li>
            </ul>
          </div>
        )}
      </div>

      <div className="new-projet">
        <button onClick={handleNewProjectClick}>Nouveau Projet</button>
      </div>

{/*CHAT BOX*/}

{showChat && (
  <div className="chat-window">
    <div className="chat-header">
      <h3>Chat Box</h3>
      <button onClick={handleChatClick}>Fermer</button>
    </div>
    <div className="chat-body">
    {/* {isTyping && <div className="typing-indicator">...</div>} */}
  {messages.map((msg, index) => (
    <div key={index} className="message">
      <span className="sender">{msg.sender} : </span>
      <span className="text">{msg.text}</span>
     <span>
 {isTyping && <div className="typing-indicator"><img src="img/loadgif.gif" alt="typing" className ="typing-icon"/> <img src="img/loadgif.gif" alt="typing" className ="typing-icon"/> <img src="img/loadgif.gif" alt="typing" className ="typing-icon"/></div>}      </span> 


    </div>
  ))}
    </div>
    <div className="chat-footer">
      <input type="text" placeholder="Votre message" value={message} onChange={handleMessageChange} />
      <button onClick={handleSendMessage}>Envoyer</button>
    </div>
  </div>
)}

{/*FIN CHAT BOX*/}

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

{/* POPUP DE SUPPRESSION DE PROJ */}
{showDeletePopup && (
    <div className="delete-popup">
    <p className="deleted-project-name">
      Le projet "{deletedProjectName}" a été supprimé avec succès.
    </p>
    <img
      src="img/Supp.gif"
      className={`Projsupp ${isDeleting ? 'shake-animation' : ''}`}
      alt="Supp"
    />
    <button onClick={closeDeletePopup} className="button-popup">
      Fermer
    </button>
  </div>
)}
{/* FIN POPUP DE SUPPRESSION DE PROJ */}
{projets.length === 0 ? (
 <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
 <p>Vous n'avez pas encore de projet...</p>
 <img src="img/noproj.png" alt="noproj" style={{ width: "300px", height: "300px", borderRadius: "50%", margin: "20px auto" }} />
 <button onClick={handleNewProjectClick} style={{ display: "block" }}>Créer un projet</button>
</div>
) : (
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
      {projets.map((projet, index) => (
        <tr key={index}>
          <td>{projet.nomProjet}</td>
          <td>{projet.nomEquipe}</td>
          <td>{projet.nombreTache}</td>
          <td>
            <select
              value={projet.statut}
              onChange={(e) => handleStatutChange(index, e)}
            >
              <option value="A faire">A faire</option>
              <option value="En cours">En cours</option>
              <option value="Terminé">Terminé</option>
            </select>
          </td>
          <td>
            <button onClick={() => handleDeleteProject(index)}>
              Supprimer
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)}
        </div>
    
      );
    

    };
    
    export default BurgerMenu;