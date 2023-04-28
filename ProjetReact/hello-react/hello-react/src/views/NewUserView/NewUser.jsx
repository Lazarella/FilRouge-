import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './NewUser.css';

const NewUser = ({users, setUsers}) => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [identifiant, setIdentifiant] = useState("");
    const [mdp, setMdp] = useState("");

    let navigate = useNavigate();

    function resetState(){
        setNom("");
        setPrenom("");
        setIdentifiant("");
        setMdp("");
    }

    function addUser(){
        let id = users.length + 1;
        setUsers([...users,{id, nom, prenom, identifiant, mdp}]);
        resetState();
        return navigate("/NewUser")
    }

    return (

            <div className='container'>
<div className="card formulaire">
                <h2>...</h2>
                <div className="form-control">
                    <div className="mb-3">
                        <label htmlFor="nom">Nom : </label>
                        <input type="text" className='form-control' name="nom" id="nom" onChange={(e) => setNom(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prenom">Prénom : </label>
                        <input type="text" className='form-control' name="prenom" id="prenom" onChange={(e) => setPrenom(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Identifiant : </label>
                        <input type="text" className='form-control' name="identifiant" id="identifiant" onChange={(e) => setIdentifiant(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telephone">mot de passe : </label>
                        <input type="text" className='form-control' name="mdp" id="mdp" onChange={(e) => setMdp(e.target.value)} />
                    </div>
                    <button className='btn btn-success form-control' onClick={() => addUser()}>Valider</button>
                </div>
            </div>

            </div>

    );
};

export default NewUser;