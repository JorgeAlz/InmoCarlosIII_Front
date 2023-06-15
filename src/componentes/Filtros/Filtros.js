import { useState } from "react";
import BanyoForm from "../BanyoForm/BanyoForm";
import HabitacionForm from "../HabitacionForm/HabitacionForm";
import MunicipioProvinciaForm from "../MunicipioProvincia/MunicipioProvinciaForm";
import PrecioForm from "../Precio/PrecioForm";
import SuperficieForm from "../SuperficieForm/SuperficieForm";
import TipoViviendaForm from "../TipoVivienda/TipoViviendaForm";

const Filtros = (props) => {

    const [isFilterOpen, setFilterOpen] = useState(false);

    function toggleFilter() {
        setFilterOpen(!isFilterOpen);
    }

    function rellenarInput(input) {
        if (props.municipioProvincia !== null) {
            input.value = props.municipioProvincia;
        }
    }

    function manejarCambio(value) {
        actualizarMunicipioProvincia(value)
    }

    function actualizarMunicipioProvincia(value) {
        props.setMunicipioProvincia(value);
    }

    function comprobarVacio(value, elemento) {
        if (value === "" || value === null) {
            elemento.classList.add("hidden");
        } else {
            elemento.classList.remove("hidden");
        }
    }

    function manejarTipoVivienda(event) {
        props.setTipoVivienda(event.target.value);
    }

    function restablecerTipoVivienda() {
        props.setTipoVivienda("Todos");
    }

    function manejarPrecioMinimo(event) {
        props.setPrecioMin(event.target.value);
    }

    function manejarPrecioMaximo(event) {
        props.setPrecioMax(event.target.value);
    }

    function restablecerPrecios() {
        props.setPrecioMin("Indiferente");
        props.setPrecioMax("Indiferente");
    }

    function manejarHabitaciones(event) {
        props.setHabitaciones(event.target.value);
    }

    function restablecerHabitaciones(value) {
        props.setHabitaciones(value);
    }

    function manejarBanyos(event) {
        props.setBanyos(event.target.value);
    }

    function restablecerBanyos(value) {
        props.setBanyos(value);
    }

    function manejarSuperficie(event) {
        props.setSuperficie(event.target.value);
    }

    function restablecerSuperficie(value) {
        props.setSuperficie(value);
    }

    return (
        <div className="flex gap-8 p-6 bg-white border-b border-gray-300 sticky top-16 z-40">
            <MunicipioProvinciaForm rellenarInput={rellenarInput}
                manejarCambio={manejarCambio}
                comprobarVacio={comprobarVacio}>
            </MunicipioProvinciaForm>
            <div className="hidden md:flex">
                <TipoViviendaForm manejarTipoVivienda={manejarTipoVivienda}
                    restablecerTipoVivienda={restablecerTipoVivienda}>
                </TipoViviendaForm>
                <PrecioForm manejarPrecioMinimo={manejarPrecioMinimo}
                    manejarPrecioMaximo={manejarPrecioMaximo}
                    restablecerPrecios={restablecerPrecios}>
                </PrecioForm>
                <HabitacionForm manejarHabitaciones={manejarHabitaciones}
                    restablecerHabitaciones={restablecerHabitaciones}>
                </HabitacionForm>
                <BanyoForm manejarBanyos={manejarBanyos}
                    restablecerBanyos={restablecerBanyos}>
                </BanyoForm>
                <SuperficieForm manejarSuperficie={manejarSuperficie}
                    restablecerSuperficie={restablecerSuperficie}>
                </SuperficieForm>
            </div>
            <div className="block mt-[7px] md:hidden">
                <button onClick={toggleFilter} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                {isFilterOpen && (
                    <div className="md:hidden w-[168px] mt-[30px] bg-gray-100 rounded border border-green-700 p-2.5 text-sm absolute right-[33px] top-16 z-50">
                        <TipoViviendaForm manejarTipoVivienda={manejarTipoVivienda}
                            restablecerTipoVivienda={restablecerTipoVivienda}>
                        </TipoViviendaForm>
                        <PrecioForm manejarPrecioMinimo={manejarPrecioMinimo}
                            manejarPrecioMaximo={manejarPrecioMaximo}
                            restablecerPrecios={restablecerPrecios}>
                        </PrecioForm>
                        <HabitacionForm manejarHabitaciones={manejarHabitaciones}
                            restablecerHabitaciones={restablecerHabitaciones}>
                        </HabitacionForm>
                        <BanyoForm manejarBanyos={manejarBanyos}
                            restablecerBanyos={restablecerBanyos}>
                        </BanyoForm>
                        <SuperficieForm manejarSuperficie={manejarSuperficie}
                            restablecerSuperficie={restablecerSuperficie}>
                        </SuperficieForm>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filtros;