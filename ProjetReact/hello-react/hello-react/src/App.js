import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import Burger from './views/BurgerMenuView/Burger';
import Accueil from './views/AccueilView/Accueil';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import NewUser from './views/NewUserView/NewUser';

function App() {
  return (
    <div className="App">
         <HeaderComponent/>
        
         <FooterComponent/>
        
      <Routes>
        <Route path="/" element={<Accueil />} />
      
        <Route path="/Burger" element={<Burger />} />
      </Routes>

  

    <Outlet/>
    </div>
  );
}

export default App;