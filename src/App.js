import './App.css';
import { Route } from 'wouter';
import Menu from './componentes/Menu/Menu';
import Home from './paginas/Home/Home';
import Viviendas from './paginas/Viviendas/Viviendas';
import ViviendaDetallada from './paginas/ViviendaDetallada/ViviendaDetallada';
import Login from './paginas/Login/Login';
import Footer from './componentes/Footer/Footer';

function App() {

  //Si estamos en la ruta /, se nos mostrarán los datos del componente Home
  //De lo contrario, si estamos en la ruta /vivienda/[id], se mostrarán los datos del componente ViviendaDetallado
  return (
    <div>
      <div>
        <Route component={Home} path="/"></Route>
        <Route component={Viviendas} path="/viviendas"></Route>
        <Route component={ViviendaDetallada} path="/vivienda/:idVivienda"></Route>
        <Route component={Login} path="/login"></Route>
        </div>
    </div>
  );
}

export default App;