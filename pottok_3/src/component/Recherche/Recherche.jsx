import React, {Component} from 'react';
import "./Recherche.css"; 

class Recherche extends Component {
    constructor (props){
        super (props)
        this.state = {
            result : [], 
            newResult: null
        }
    }

render(){
    return (
        <div class='recherche'>
            <img class="loupe" src='loupe.png' alt = 'icone loupe'/>
            <input type="text" placeholder='Rechercher ...' />
        </div>
    );
}
}




export default Recherche;