import AjaxLoader from '../../componentes/Ajax-Loader/AjaxLoader';
import { useState } from 'react';
import ListaViviendas from '../../componentes/ListaViviendas/ListaViviendas';
import CambioPagina from '../../componentes/CambioPagina/CambioPagina';
import useAllViviendas from '../../hooks/useAllViviendas';
import Menu from '../../componentes/Menu/Menu';
import Footer from '../../componentes/Footer/Footer';
import Filtros from '../../componentes/Filtros/Filtros';

function Viviendas() {

    //El vivienda recibido en este componente es el vivienda de una id específica. Esta id es recogida del la url y pasada al hook useUnVivienda, que a su vez devuelve el vivienda de dicha id.
    const [precioMin, setPrecioMin] = useState("Indiferente");
    const [precioMax, setPrecioMax] = useState("Indiferente");
    const [ordenacion, setOrdenacion] = useState("A...Z");
    const [tipovivienda, setTipoVivienda] = useState("Todos");
    const [genero, setGenero] = useState("Todos");
    const [status, setStatus] = useState("Todos");
    //Dependiendo de la página, se devolverá gracias al hook useAllViviendas una lista de viviendas en concreto
    const [page, setPage] = useState(1);
    const { buscando, listaViviendas } = useAllViviendas(page);
    const [municipioProvincia, setMunicipioProvincia] = useState(localStorage.getItem("getMunicipioProvincia"));
    localStorage.removeItem("getMunicipioProvincia");

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
            <Filtros
                setPrecioMin={setPrecioMin}
                setPrecioMax={setPrecioMax}
                municipioProvincia={municipioProvincia}
                setMunicipioProvincia={setMunicipioProvincia}>
            </Filtros>
            {buscando ? <AjaxLoader></AjaxLoader>
                : <ListaViviendas
                    precioMin={precioMin}
                    precioMax={precioMax}
                    actualizarOrdenacion={ordenacion}
                    actualizarTipoVivienda={tipovivienda}
                    actualizarGenero={genero}
                    actualizarStatus={status}
                    municipioProvincia={municipioProvincia}
                    listaViviendas={listaViviendas}>
                </ListaViviendas>
            }
            <CambioPagina manejarPage={manejarPage} page={page}></CambioPagina>
            <Footer></Footer>
        </div>
    );
}

export default Viviendas;