import React, { createContext, useState } from 'react';

// Créez un contexte pour les projets
export const ProjetContext = createContext();

// Créez un composant fournisseur de contexte pour encapsuler vos autres composants
export const ProjetProvider = ({ children }) => {
  const [projets, setProjets] = useState([]);

  // Fonction pour ajouter un projet au tableau des projets
  const ajouterProjet = (nouveauProjet) => {
    setProjets([...projets, nouveauProjet]);
  };

  // Fonction pour supprimer un projet du tableau des projets
  const supprimerProjet = (index) => {
    const projetsCopie = [...projets];
    projetsCopie.splice(index, 1);
    setProjets(projetsCopie);
  };

  return (
    <ProjetContext.Provider value={{ projets, ajouterProjet, supprimerProjet }}>
      {children}
    </ProjetContext.Provider>
  );
};