import '../../App.css';
import AjaxLoader from '../../componentes/Ajax-Loader/AjaxLoader';
import { useState } from 'react';
import TipoViviendaContext from '../../contextos/TipoViviendaContext';
import GeneroContext from '../../contextos/GeneroContext';
import StatusContext from '../../contextos/StatusContext';
import OrdenacionForm from '../../componentes/Ordenacion/OrdenacionForm';
import TipoViviendaForm from '../../componentes/TipoVivienda/TipoViviendaForm';
import GeneroForm from '../../componentes/Genero/GeneroForm';
import StatusForm from '../../componentes/Status/StatusForm';
import ListaViviendas from '../../componentes/ListaViviendas/ListaViviendas';
import CambioPagina from '../../componentes/CambioPagina/CambioPagina';
import useAllViviendas from '../../hooks/useAllViviendas';
import useAllViviendasByMunicipio from '../../hooks/useAllViviendasByMunicipio';
import Menu from '../../componentes/Menu/Menu';
import Footer from '../../componentes/Footer/Footer';

function Viviendas(props) {

    //El vivienda recibido en este componente es el vivienda de una id específica. Esta id es recogida del la url y pasada al hook useUnVivienda, que a su vez devuelve el vivienda de dicha id.
    const [ordenacion, setOrdenacion] = useState("A...Z");
    const [tipovivienda, setTipoVivienda] = useState("Todos");
    const [genero, setGenero] = useState("Todos");
    const [status, setStatus] = useState("Todos");
    //Dependiendo de la página, se devolverá gracias al hook useAllViviendas una lista de viviendas en concreto
    const [page, setPage] = useState(1);
    const { buscando, listaViviendas } = useAllViviendas(page);
    const { listaViviendasByMunicipio } = useAllViviendasByMunicipio(props.municipio);

    //Se recibe el valor del nieto o del hijo mediante el contexto en las siguientes funciones, en forma de event, y luego se manda al estado en forma de value
    function manejarOrdenacion(event) {
        actualizarOrdenacion(event.target.value);
    }

    function actualizarOrdenacion(value) {
        setOrdenacion(value);
    }

    function manejarFiltroTipoVivienda(event) {
        actualizarTipoVivienda(event.target.value);
    }

    function actualizarTipoVivienda(value) {
        setTipoVivienda(value);
    }

    function manejarFiltroGenero(event) {
        actualizarGenero(event.target.value);
    }

    function actualizarGenero(value) {
        setGenero(value);
    }

    function manejarFiltroStatus(event) {
        actualizarStatus(event.target.value);
    }

    function actualizarStatus(value) {
        setStatus(value);
    }

    function manejarPage(page) {
        setPage(page);
    }

    return (
        <div>
            <Menu></Menu>
                <div>
                    <ul>
                        <li>
                            <h3>Filtro 1</h3>
                            <OrdenacionForm manejarOrdenacion={manejarOrdenacion}></OrdenacionForm>
                        </li>
                        <li>
                            <h3>Filtro 2</h3>
                            <TipoViviendaContext.Provider value={manejarFiltroTipoVivienda}>
                                <TipoViviendaForm></TipoViviendaForm>
                            </TipoViviendaContext.Provider>
                        </li>
                        <li>
                            <h3>Filtro 3</h3>
                            <GeneroContext.Provider value={manejarFiltroGenero}>
                                <GeneroForm></GeneroForm>
                            </GeneroContext.Provider>
                        </li>
                        <li>
                            <h3>Filtro 4</h3>
                            <StatusContext.Provider value={manejarFiltroStatus}>
                                <StatusForm></StatusForm>
                            </StatusContext.Provider>
                        </li>
                        <li>
                            <h3>Filtro 5</h3>
                        </li>
                        <li>
                            <h3>Filtro 6</h3>
                        </li>
                        <li>
                            <h3>Filtro 7</h3>
                        </li>
                        <li>
                            <h3>Filtro 8</h3>
                        </li>
                        <li>
                            <h3>Filtro 9</h3>
                        </li>
                    </ul>
                </div>
                {buscando ? <AjaxLoader></AjaxLoader>
                    : <ListaViviendas actualizarOrdenacion={ordenacion}
                        actualizarTipoVivienda={tipovivienda}
                        actualizarGenero={genero}
                        actualizarStatus={status}
                        listaViviendas={listaViviendas}
                        municipio={props.municipio}
                        listaViviendasByMunicipio={listaViviendasByMunicipio}>
                    </ListaViviendas>
                }
                <CambioPagina manejarPage={manejarPage} page={page}></CambioPagina>
                <Footer></Footer>
        </div>
    );
}

export default Viviendas;