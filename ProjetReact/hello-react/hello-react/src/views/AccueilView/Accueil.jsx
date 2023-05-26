import './Accueil.css';
import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom';
import { ListUser } from '../../datas/UserList';
import NewUser from '../NewUserView/NewUser';
import Connexion from '../ConnexionView/Connexion';

const Accueil = () => {

  const [users, setUsers] = useState(ListUser);

  return (
    <div id="test-accueil">

      
        <Link to="/Connexion">connexion</Link>

     
      <div>
      <h2>Accueil ♥</h2>
        <Link to="/NewUser">creer un compte</Link>
      
      </div>

      <Routes>
          <Route path='/NewUser' element={<NewUser users={users} setUsers={setUsers} />} />             
      </Routes>
      
    </div>
  );
};

export default Accueil;