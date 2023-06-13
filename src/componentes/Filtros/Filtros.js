import MunicipioForm from "../Municipio/MunicipioForm";
import PrecioForm from "../Precio/PrecioForm";

const Filtros = (props) => {

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
        <div className="flex gap-8 p-6 border-b border-gray-300">
            <MunicipioForm></MunicipioForm>
            <PrecioForm manejarFiltroPrecioMinimo={manejarFiltroPrecioMinimo}
                        manejarFiltroPrecioMaximo={manejarFiltroPrecioMaximo}
                        restablecerPrecios={restablecerPrecios}>
            </PrecioForm>
        </div>
    );
};

export default Filtros;