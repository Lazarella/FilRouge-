import './Accueil.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { ListUser } from '../../datas/UserList';
import NewUser from '../NewUserView/NewUser';
import Connexion from '../ConnexionView/Connexion';

const Accueil = () => {
  const [users, setUsers] = useState(ListUser);

  return (
    <div id="test-accueil">
      
      <div className="co-container">
        <Link to="/Connexion">Connexion</Link>
      </div>

      <div className='create-new'>

        <Link to="/NewUser">Créer un compte</Link>
      </div>

       
          <img
            src="./img/happy.jpg"
            id="happylogo"
            className="logo"
            alt="logoPottok"
          />
       

      <div className="text-container">
      
            Gérez vos tâches comme un(e) pro avec Pottok, pour une organisation
            à la fois dynamique et investie dans vos problématiques de
            management. Avec notre application, vous pourrez galoper vers la
            réussite en toute simplicité, tout en évitant les écueils du
            quotidien. Alors, ne laissez pas votre entreprise rester à
            l'écurie, essayez notre gestionnaire de tâches dès aujourd'hui !
         
      </div>

      <Routes>
        <Route
          path="/NewUser"
          element={<NewUser users={users} setUsers={setUsers} />}
        />
      </Routes>
    </div>
  );
};

export default Accueil;