import { Route } from 'wouter';
import Home from './paginas/Home/Home';
import Viviendas from './paginas/Viviendas/Viviendas';
import ViviendaDetallada from './paginas/ViviendaDetallada/ViviendaDetallada';
import LoginForm2 from './paginas/Login/Login';
import Logout from './paginas/Login/Logout';
import Register2 from './paginas/Login/Register2';
import Modelo3D from './componentes/Modelo3D/Modelo3D';
import Cookies from 'js-cookie';
import Asesoramiento from './paginas/Asesoramiento/Asesoramiento';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './paginas/AboutUs/AboutUs';
import easter_egg from './componentes/SobreNosotros/easteregg';

function App() {

  const token1 = Cookies.get('token');

  return (
    <div>
      <div>
        <Route component={Home} path="/"></Route>
        <Route component={Viviendas} path="/viviendas"></Route>
        <Route component={ViviendaDetallada} path="/vivienda/:idVivienda"></Route>
        <Route component={token1 ? Home : LoginForm2 } path="/login"></Route>
        <Route component={Logout} path="/logout"></Route>
        <Route component={Register2} path="/register"></Route>
        <Route component={Modelo3D} path='/modelos_3d'></Route>
        <Route component={Asesoramiento} path='/asesoramiento'></Route>
        <Route component={AboutUs} path='/sobre_nosotros'></Route>
        <Route component={easter_egg} path='/easter_egg'></Route>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;