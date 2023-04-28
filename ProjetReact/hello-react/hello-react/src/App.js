import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import Body from './components/Body/Body';

function App() {
  return ( 
    <div className="App">
         <HeaderComponent/>
         <Body />         
         <FooterComponent/>
    </div>
  );
}

export default App;