import React, {Component} from "react";
import "./UserId.css" ;  


/*import import { getContactApi, postContactApi, updateContactApi, deleteContactApi, postImage } from '../../ContactApiService'*/


class UserId extends Component{
constructor(props){
    super (props)
    this.state = {
        UserName : ["Holly"] 

    }
}
render() {
    return (
      <div className = "user">
        <img className = "imgUser" src="./Holly.jpg" alt="picture of the user" />
        <p>{this.state.UserName}</p>
      </div>
    );
  }
}

/*FetchUserName() = asunc ()=> {
        let response = await getUserNameApi();
        this.setState({
            UserName: response.data.data
        })
    
}*/

export default UserId; 
