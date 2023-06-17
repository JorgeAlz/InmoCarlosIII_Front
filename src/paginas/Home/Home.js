import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Banner from '../../componentes/Banner/Banner';
import Menu from "../../componentes/Menu/Menu";
import useAllViviendas from "../../hooks/useAllViviendas";
import AjaxLoader from "../../componentes/Ajax-Loader/AjaxLoader";
import ListaTarjetasViviendas from "../../componentes/ListaTarjetasViviendas/ListaTarjetasViviendas";
import Footer from "../../componentes/Footer/Footer";

function Home() {

    const [municipioProvincia, setMunicipioProvincia] = useState('');
    const [aleatoriedad, setAleatoriedad] = useState(true);
    const { buscando, listaViviendas } = useAllViviendas(1);

    function manejarMunicipio(event) {
        setMunicipioProvincia(event.target.value)
        setAleatoriedad(false);
    }

    function manejarEnter(event) {
        if (event.keyCode === 13) {
            mandarMunicipio();
        }
    };

    function mandarMunicipio() {
        localStorage.setItem("getMunicipioProvincia", municipioProvincia);
        window.location.href="/viviendas";
    }

    return (
        <div>
            <Menu></Menu>
            <Banner></Banner>
            <div className="relative">
                <div className="w-full px-8 md:px-0 md:w-1/2 flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <input type="text" value={municipioProvincia} onChange={manejarMunicipio} onKeyDown={manejarEnter} className="w-full h-16 md:h-20 border border-gray-300 rounded-2xl py-2 px-4 md:text-lg text-xs focus:outline-none focus:border-green-700" placeholder="Buscar vivienda en provincia, municipio..."/>
                    <div className="absolute right-0 bg-green-500 mr-12 md:mr-6 text-white rounded-xl p-2 md:h-12 md:w-32 flex items-center justify-center cursor-pointer transition hover:scale-105" onClick={mandarMunicipio}>
                        <FaSearch className="text-sm md:text-xl text-[#354F52] mr-1.5 md:mr-3"></FaSearch>
                        <p className="text-sm md:text-lg mr-2">Buscar</p>
                    </div>
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