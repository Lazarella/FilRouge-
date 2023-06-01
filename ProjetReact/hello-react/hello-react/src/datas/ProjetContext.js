import React, { createContext, useState } from 'react';

// Créez un contexte pour les projets
export const ProjetContext = createContext();

// Créez un composant fournisseur de contexte pour encapsuler vos autres composants
export const ProjetProvider = ({ children }) => {
  const [projets, setProjets] = useState([]);

  return (
    <ProjetContext.Provider value={{ projets, setProjets }}>
      {children}
    </ProjetContext.Provider>
  );
};