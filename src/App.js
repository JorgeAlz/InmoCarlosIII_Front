import './App.css';
import { Route } from 'wouter';
import Home from './paginas/Home/Home';
import Viviendas from './paginas/Viviendas/Viviendas';
import ViviendaDetallada from './paginas/ViviendaDetallada/ViviendaDetallada';
import Login from './paginas/Login/Login';
import FiltradoContext from './contextos/FiltradoContext';
import { useState } from 'react';

function App() {

  const [municipio, setMunicipio] = useState('');

  function manejarFiltrado(valor) {
    setMunicipio(valor);
  } 

  //Si estamos en la ruta /, se nos mostrarán los datos del componente Home
  //De lo contrario, si estamos en la ruta /vivienda/[id], se mostrarán los datos del componente ViviendaDetallada
  return (
    <div>
      <div>
        <FiltradoContext.Provider value={manejarFiltrado}>
          <Route component={Home} path="/"></Route>
        </FiltradoContext.Provider>
        <Route component={Viviendas} path="/viviendas" municipio={municipio}></Route>
        <Route component={ViviendaDetallada} path="/vivienda/:idVivienda"></Route>
        <Route component={Login} path="/login"></Route>
        
        </div>
    </div>
  );
}

export default App;