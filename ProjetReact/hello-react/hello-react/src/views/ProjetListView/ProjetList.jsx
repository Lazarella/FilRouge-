import React from "react";
import './ProjetList.css';

const ProjetList = ({ projets, setProjets }) => {
    return projets ? (
        <div className='container'>
            <h1 className='title'>Liste de Projets</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom Projet</th>
                        <th scope="col">Team</th>
                        <th scope="col">Tâches</th>
                        <th scope="col">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projets.map((projet,index) =>
                            <React.Fragment key={index}>
                                <tr>
                                    <th scope='col'>{projet.id}</th>
                                    <td>{projet.projet}</td>
                                    <td>{projet.team}</td>
                                    <td>{projet.tache}</td>
                                    <td>{projet.statut}</td>
                                </tr>
                            </React.Fragment>
                        )

                    }
                </tbody>
            </table>
        </div>
    )
        :
        (<div>
            <h3>Aucun projet dans la liste</h3>
        </div>);
};

export default ProjetList;