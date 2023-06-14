import precio from "../../mock-precio";
import Precio from "./Precio";

const PrecioForm = (props) => {

    document.addEventListener('click', function(event) {
        let filtroPrecios = document.getElementById("FiltroPrecios");
        let targetElement = event.target;
      
        if (!filtroPrecios.contains(targetElement)) {
          if (filtroPrecios.open) {
            filtroPrecios.open = false;
          }
        }
      });

    function restablecerPrecios() {
    }

    function muestraPrecios(precio, index) {
        return <Precio key={index} index={index} precio={precio}></Precio>;
    }

    return (
        <div className="relative mt-[10px]">
                <details id="FiltroPrecios" className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                        <span className="text-sm font-medium"> Precio </span>
                        <span className="transition group-open:-rotate-180">
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

                    <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                        <div className="w-[450px] rounded border border-gray-200 bg-white">
                            <div className="border-b border-gray-200 p-4">
                                <div className="flex justify-center gap-4">
                                    <label for="FilterPriceFrom" className="flex items-center gap-2 mr-3">
                                        <div className="w-full mr-1 sm:text-sm">Desde</div>
                                        <div className="relative">
                                            <select id="FilterPrioceFrom" onChange={props.manejarFiltroPrecioMinimo} className="pl-8 pr-3 py-2 text-left rounded-md appearance-none bg-white border border-gray-200 shadow-sm sm:text-sm focus:outline-none">
                                                {precio.map(muestraPrecios)}
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
                                        <span className="text-sm text-gray-800">€</span>
                                    </label>

                                    <label for="FilterPriceTo" className="flex items-center gap-2">
                                        <div className="w-full mr-1 sm:text-sm">Hasta</div>
                                        <div className="relative">
                                            <select id="FilterPriceTo" onChange={props.manejarFiltroPrecioMaximo} className="pl-8 pr-3 py-2 text-left rounded-md appearance-none bg-white border border-gray-200 shadow-sm sm:text-sm focus:outline-none">
                                                {precio.map(muestraPrecios)}
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
                                        <span className="text-sm text-gray-800">€</span>
                                    </label>
                                </div>
                            </div>
                            <header className="flex items-center justify-between p-4">
                                <button type="button" onClick={restablecerPrecios} className="text-sm text-gray-900 ml-4 underline underline-offset-4">Resetear filtro</button>
                            </header>
                        </div>
                    </div>
                </details>
            </div>
    )
}

export default PrecioForm;