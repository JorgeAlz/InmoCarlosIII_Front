import AjaxLoader from '../../componentes/Ajax-Loader/AjaxLoader';
import { useState } from 'react';
import ListaViviendas from '../../componentes/ListaViviendas/ListaViviendas';
import useAllViviendas from '../../hooks/useAllViviendas';
import Menu from '../../componentes/Menu/Menu';
import Footer from '../../componentes/Footer/Footer';
import Filtros from '../../componentes/Filtros/Filtros';
import InfiniteScroll from 'react-infinite-scroll-component';
import imagenLoader from '../../img/ajax-loader.gif';
import FinalPagina from '../../componentes/FinalPagina/FinalPagina';
import ScrollButton from '../../componentes/ScrollButton/ScrollButton';

function Viviendas() {

    const [municipioProvincia, setMunicipioProvincia] = useState(localStorage.getItem("getMunicipioProvincia"));
    localStorage.removeItem("getMunicipioProvincia");
    const [precioMin, setPrecioMin] = useState("Indiferente");
    const [precioMax, setPrecioMax] = useState("Indiferente");
    const [habitaciones, setHabitaciones] = useState("");
    const [banyos, setBanyos] = useState("");
    const [superficie, setSuperficie] = useState("");
    const [tipoVivienda, setTipoVivienda] = useState("Todos");
    const [page, setPage] = useState(0);
    const { buscando, listaViviendas } = useAllViviendas(page);

    function getNextPage() {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <div>
            <Menu></Menu>
            <Filtros
                municipioProvincia={municipioProvincia}
                setMunicipioProvincia={setMunicipioProvincia}
                setPrecioMin={setPrecioMin}
                setPrecioMax={setPrecioMax}
                setHabitaciones={setHabitaciones}
                setBanyos={setBanyos}
                setSuperficie={setSuperficie}
                setTipoVivienda={setTipoVivienda}>
            </Filtros>
            <InfiniteScroll
                dataLength={listaViviendas.length}
                next={getNextPage}
                hasMore={!buscando}
                loader={<AjaxLoader loader={imagenLoader}></AjaxLoader>}
                endMessage={<FinalPagina></FinalPagina>}>
                <ListaViviendas
                    municipioProvincia={municipioProvincia}
                    precioMin={precioMin}
                    precioMax={precioMax}
                    habitaciones={habitaciones}
                    banyos={banyos}
                    superficie={superficie}
                    tipoVivienda={tipoVivienda}
                    listaViviendas={listaViviendas}>
                </ListaViviendas>
            </InfiniteScroll>
            <ScrollButton></ScrollButton>
            <Footer></Footer>
        </div>
    );
}

export default Viviendas;