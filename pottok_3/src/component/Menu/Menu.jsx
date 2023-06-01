import React, {Component} from 'react';
import "./Menu.css"; 
{/*import './deconnecter.png'; */}

class Menu extends Component{
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            newContact: null,
            toggleForm: false
        }
    }


render(){
    return(
     <div className='MenuContainer'>
        <p>Description</p>
        <p>Equipe</p>
        <p>Modifier statut</p>
        <p>Ajouter une tâche</p>
        <p>Enregister</p> <img className = "icone" src='enregistrer.png' alt ="icone deconnection"/>
    </div>
    )
}
}

export default Menu; 