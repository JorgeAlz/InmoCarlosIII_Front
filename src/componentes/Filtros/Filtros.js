import MunicipioProvinciaForm from "../MunicipioProvincia/MunicipioProvinciaForm";
import PrecioForm from "../Precio/PrecioForm";

const Filtros = (props) => {

    function rellenarInput(input) {
        if (props.municipioProvincia !== null) {
            input.value = props.municipioProvincia;
        }
    }

    function manejarCambio(event) {
        actualizarMunicipioProvincia(event.target.value)
    }

    function actualizarMunicipioProvincia(value) {
        props.setMunicipioProvincia(value);
    }

    function comprobarVacio(value, elemento) {
        console.log(elemento);
        if (value === "" || value === null) {
            elemento.classList.add("hidden");
        } else {
            elemento.classList.remove("hidden");
        }
    }

    function manejarFiltroPrecioMinimo(event) {
        props.setPrecioMin(event.target.value);
    }

    function manejarFiltroPrecioMaximo(event) {
        props.setPrecioMax(event.target.value);
    }

    function restablecerPrecios() {
        props.setPrecioMin("Indiferente");
        props.setPrecioMax("Indiferente");
    }

    return (
        <div className="flex gap-8 p-6 bg-white border-b border-gray-300 sticky top-16 z-50">
            <MunicipioProvinciaForm rellenarInput={rellenarInput}
                                    manejarCambio={manejarCambio}
                                    comprobarVacio={comprobarVacio}>
            </MunicipioProvinciaForm>
            <PrecioForm manejarFiltroPrecioMinimo={manejarFiltroPrecioMinimo}
                        manejarFiltroPrecioMaximo={manejarFiltroPrecioMaximo}
                        restablecerPrecios={restablecerPrecios}>
            </PrecioForm>
        </div>
    );
};

export default Filtros;