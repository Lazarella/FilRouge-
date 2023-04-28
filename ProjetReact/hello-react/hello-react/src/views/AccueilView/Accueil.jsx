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

const Accueil = () => {

  const [users, setUsers] = useState(ListUser);

  return (
    <div id="test-accueil">

      <button className='testconnexion'>
        <Link to="/Burger">connexion</Link>
      </button>

     
      <div>
      <h2>Accueil ♥</h2>
      <button className='creation-compte'>
        <Link to="/NewUser">creer un compte</Link>
      </button>
      </div>

      <Routes>
          <Route path='/NewUser' element={<NewUser users={users} setUsers={setUsers} />} />             
      </Routes>
      
    </div>
  );
};

export default Accueil;