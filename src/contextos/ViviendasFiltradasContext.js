import React, { createContext, useState } from 'react';

export const ViviendasFiltradasContext = createContext();

export const ViviendasFiltradasProvider = ({ children }) => {
  const [filtrado, setFiltrado] = useState(false);
  const [viviendasFiltradas, setViviendasFiltradas] = useState([]);

  return (
    <ViviendasFiltradasContext.Provider value={{ filtrado, setFiltrado, viviendasFiltradas, setViviendasFiltradas }}>
      {children}
    </ViviendasFiltradasContext.Provider>
  );
};