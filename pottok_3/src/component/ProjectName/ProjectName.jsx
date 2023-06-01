import React, {Component} from 'react';
import "./ProjectName.css"; 

class ProjectName extends Component {
    constructor (props){
        super (props)
        this.state = {
            result : ["Find Redwarf"], 
            newResult: null,
            creator : ["Holly"],
            newCreator : null
        }
    }

render(){
    return (
        <div className ='container'>
<h1><b>{this.state.result}</b></h1>
<h2 className='creator'>Crée par {this.state.creator}</h2>
  {/*Statut à rajouter*/}          
            
        </div>
    );
}
}




export default ProjectName;