import BanyoForm from "../BanyoForm/BanyoForm";
import HabitacionForm from "../HabitacionForm/HabitacionForm";
import MunicipioProvinciaForm from "../MunicipioProvincia/MunicipioProvinciaForm";
import PrecioForm from "../Precio/PrecioForm";
import SuperficieForm from "../SuperficieForm/SuperficieForm";
import TipoViviendaForm from "../TipoVivienda/TipoViviendaForm";

const Filtros = (props) => {

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
        <div className="flex gap-8 p-6 bg-white border-b border-gray-300 sticky top-16 z-50">
            <MunicipioProvinciaForm rellenarInput={rellenarInput}
                manejarCambio={manejarCambio}
                comprobarVacio={comprobarVacio}>
            </MunicipioProvinciaForm>
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
    );
};

export default Filtros;