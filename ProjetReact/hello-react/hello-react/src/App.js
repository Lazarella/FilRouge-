import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';


function App() {
  return ( 
    <div className="App">
         <HeaderComponent/>
         {/* <Bodycomponent />
         <div className="row g-0">
                <div className="col-4 columns" id='left'>
                    
                </div>
                <div className="col-4 columns" id='right'>
                    
                </div>
        </div> */}
         <FooterComponent/>
    </div>
  );
}

export default App;