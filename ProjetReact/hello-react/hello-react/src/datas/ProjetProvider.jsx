import React, { createContext, useState } from 'react';

export const ProjetContext = createContext();

export const ProjetProvider = ({ children }) => {
  const [projets, setProjets] = useState([]);
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [nomProjet, setNomProjet] = useState('');
  const [nomEquipe, setNomEquipe] = useState('');
  const [nombreTache, setNombreTache] = useState('');
  const [statut, setStatut] = useState('A faire');

  const supprimerProjet = (index) => {
    const projetsCopie = [...projets];
    projetsCopie.splice(index, 1);
    setProjets(projetsCopie);
  };

  const ajouterProjet = () => {
    const nouveauProjet = {
      nomProjet,
      nomEquipe,
      nombreTache,
      statut
    };
    setProjets([...projets, nouveauProjet]);
    setNomProjet('');
    setNomEquipe('');
    setNombreTache('');
    setStatut('A faire');
    setShowNewProjectForm(false);
  };

  return (
    <ProjetContext.Provider
      value={{
        projets,
        supprimerProjet,
        showNewProjectForm,
        setShowNewProjectForm,
        nomProjet,
        setNomProjet,
        nomEquipe,
        setNomEquipe,
        nombreTache,
        setNombreTache,
        statut,
        setStatut,
        ajouterProjet
      }}
    >
      {children}
    </ProjetContext.Provider>
  );
};