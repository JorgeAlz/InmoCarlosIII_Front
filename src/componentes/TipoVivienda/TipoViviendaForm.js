import tipovivienda from "../../mock-tipovivienda";
import TipoVivienda from "./TipoVivienda";

const TipoViviendaForm = (props) => {

    document.addEventListener('click', function (event) {
        let filtroTipoVivienda = document.getElementById("FiltroTipoVivienda");
        let targetElement = event.target;

        if (filtroTipoVivienda) {
            if (!filtroTipoVivienda.contains(targetElement)) {
                if (filtroTipoVivienda.open) {
                    filtroTipoVivienda.open = false;
                }
            }
        }
    });


    function restablecerTipoVivienda() {
        document.getElementById("SelectTipoVivienda").selectedIndex = 0
        props.restablecerTipoVivienda();
    }

    function muestraTiposVivienda(tipoVivienda, index) {
        return <TipoVivienda key={index} index={index} tipoVivienda={tipoVivienda}></TipoVivienda>;
    }

    return (
        <div className="relative mt-[10px] mx-5 md:mr-8 md:ml-16">
            <details id="FiltroTipoVivienda" className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center gap-2 cursor-pointer border-b border-gray-400 pb-1 transition text-gray-900 hover:border-gray-600">
                    <span className="text-sm font-medium"> Tipo </span>
                    <span className="transition-all group-open:rotate-90 group-open:-ml-[59px] md:group-open:-rotate-180 md:group-open:m-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>
                </summary>

                <div className="z-50 group-open:left-[-220%] group-open:top-[-85%] group-open:absolute md:group-open:start-0 md:group-open:top-auto md:group-open:mt-4">
                    <div className="w-[200px] rounded border border-gray-200 bg-white md:w-[325px]">
                        <div className="border-b border-gray-200 p-4">
                            <div className="flex justify-center gap-4">
                                <label htmlFor="SelectTipoVivienda" className="flex items-center gap-2 mr-3">
                                    <div className="w-full md:mr-3 mr-1 text-xs md:text-sm">Tipo de vivienda</div>
                                    <div className="relative">
                                        <select id="SelectTipoVivienda" onChange={props.manejarTipoVivienda} className="pl-8 md:pr-3 py-2 text-left rounded-md appearance-none bg-white border border-gray-200 shadow-sm text-xs md:text-sm focus:outline-none">
                                            {tipovivienda.map(muestraTiposVivienda)}
                                        </select>
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                            <svg
                                                className="w-5 h-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <header className="flex items-center justify-center p-3 pt-2 md:p-4">
                            <button type="button" onClick={restablecerTipoVivienda} className="text-xs md:text-sm text-gray-900 underline underline-offset-4">Resetear filtro</button>
                        </header>
                    </div>
                </div>
            </details>
        </div>
    )
}

export default TipoViviendaForm;