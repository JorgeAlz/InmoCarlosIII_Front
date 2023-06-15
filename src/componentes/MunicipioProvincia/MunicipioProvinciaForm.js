import { useRef, useEffect } from 'react';

const MunicipioProvinciaForm = (props) => {

    const inputRef = useRef(null);
    const svgRef = useRef(null);

    function masTexto(event) {
        svgRef.current.classList.remove("hidden");;
        props.manejarCambio(event.target.value);
        props.comprobarVacio(inputRef.current.value, svgRef.current);
    }

    function borrarContenido() {
        inputRef.current.value = "";
        svgRef.current.classList.add("hidden");
        props.manejarCambio("");
    }

    useEffect(() => {
        if (inputRef.current && props.rellenarInput) {
            props.rellenarInput(inputRef.current);
        }
    }, [props.rellenarInput]);

    return (
        <div className="flex justify-center">
            <input
                ref={inputRef}
                id="busquedaMunicipio"
                type="text"
                onChange={masTexto}
                placeholder="Buscar vivienda en provincia, municipio..."
                className="mt-1 p-2 w-72 rounded-md border border-gray-200 shadow-sm focus:outline-none md:text-sm text-xs"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                ref={svgRef}
                id="iconoX"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={borrarContenido}
                className="absolute top-1/2 ml-[255px] mt-[2px] transform -translate-y-1/2 h-4 w-4 text-gray-500 cursor-pointer hover:text-black hidden"
            >
                <path
                    fillRule="evenodd"
                    d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </div>

    )
}

export default MunicipioProvinciaForm;