import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Banner from '../../componentes/Banner/Banner';
import Menu from "../../componentes/Menu/Menu";
import useAllViviendas from "../../hooks/useAllViviendas";
import AjaxLoader from "../../componentes/Ajax-Loader/AjaxLoader";
import ListaTarjetasViviendas from "../../componentes/ListaTarjetasViviendas/ListaTarjetasViviendas";
import Footer from "../../componentes/Footer/Footer";

function Home() {

    const [valor, setValor] = useState('');
    const [aleatoriedad, setAleatoriedad] = useState(true);
    const [filtrado, setFiltrado] = useState(false);
    const [viviendasFiltradas, setViviendasFiltradas] = useState([]);
    const { buscando, listaViviendas } = useAllViviendas(1);

    function manejarValor(event) {
        setValor(event.target.value);
        setAleatoriedad(false);
    }

    function asignarDireccion() {
        if (valor !== "") {
            fetch(`http://localhost:8080/api/propiedades?municipio=${valor}`)
                .then((response) => response.json())
                .then((data) => setViviendasFiltradas(data))
                .catch((error) => console.error(error));
                setFiltrado(true);
        }
    }

    return (
        <div>
            <Menu></Menu>
            <Banner></Banner>
            <div className="relative">
                <div className="w-1/2 flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <input type="text" value={valor} onChange={manejarValor} className="w-full h-20 border border-gray-300 rounded-2xl py-2 px-4 text-lg focus:outline-none focus:border-green-700" placeholder="Buscar vivienda por municipio..." onfocus="if(this.value=='Buscar vivienda...') this.value='';" />
                    <a className="absolute right-0 bg-green-500 mr-7 text-white rounded-xl h-12 w-32 flex items-center justify-center cursor-pointer transition hover:scale-110" href="/viviendas" onClick={asignarDireccion} >
                        <FaSearch className="text-xl text-[#354F52] mr-3"></FaSearch>
                        <p className="mr-2">Buscar</p>
                    </a>
                </div>
            </div>
            <section className="mt-8">
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">En venta</h2>

                        <p className="max-w-md mx-auto mt-4 text-gray-500">Estás son algunas de las viviendas que tenemos en venta actualmente. ¿Te interesa alguna?</p>
                    </header>
                    {buscando ? <AjaxLoader></AjaxLoader>
                        : <ListaTarjetasViviendas
                            aleatoriedad={aleatoriedad}
                            listaTarjetasViviendas={listaViviendas}>
                        </ListaTarjetasViviendas>}
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default Home;