import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';

function App() {
  return (
    <div className="App">
         <HeaderComponent/>
         <FooterComponent/>
    </div>
  );
}

export default App;