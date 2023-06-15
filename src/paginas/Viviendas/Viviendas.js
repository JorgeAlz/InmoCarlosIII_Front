import AjaxLoader from '../../componentes/Ajax-Loader/AjaxLoader';
import { useState } from 'react';
import ListaViviendas from '../../componentes/ListaViviendas/ListaViviendas';
import useAllViviendas from '../../hooks/useAllViviendas';
import Menu from '../../componentes/Menu/Menu';
import Footer from '../../componentes/Footer/Footer';
import Filtros from '../../componentes/Filtros/Filtros';

function Viviendas() {

    const [municipioProvincia, setMunicipioProvincia] = useState(localStorage.getItem("getMunicipioProvincia"));
    localStorage.removeItem("getMunicipioProvincia");
    const [precioMin, setPrecioMin] = useState("Indiferente");
    const [precioMax, setPrecioMax] = useState("Indiferente");
    const [habitaciones, setHabitaciones] = useState("");
    const [banyos, setBanyos] = useState("");
    const [superficie, setSuperficie] = useState("");
    const [tipoVivienda, setTipoVivienda] = useState("Todos");
    const { buscando, listaViviendas } = useAllViviendas();

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
            {buscando ? <AjaxLoader></AjaxLoader>
                : <ListaViviendas
                    municipioProvincia={municipioProvincia}
                    precioMin={precioMin}
                    precioMax={precioMax}
                    habitaciones={habitaciones}
                    banyos={banyos}
                    superficie={superficie}
                    tipoVivienda={tipoVivienda}
                    listaViviendas={listaViviendas}>
                </ListaViviendas>
            }
            <Footer></Footer>
        </div>
    );
}

export default Viviendas;