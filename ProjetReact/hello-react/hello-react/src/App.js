import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import Burger from './views/BurgerMenuView/Burger';

function App() {
  return (
    <div className="App">
         <HeaderComponent/>
         <Burger/>
         <FooterComponent/>
    </div>
  );
}

export default App;