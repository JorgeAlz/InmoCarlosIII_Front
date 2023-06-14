const HabitacionForm = (props) => {

    document.addEventListener('click', function (event) {
        let filtroHabitaciones = document.getElementById("FiltroHabitaciones");
        let targetElement = event.target;

        if (!filtroHabitaciones.contains(targetElement)) {
            if (filtroHabitaciones.open) {
                filtroHabitaciones.open = false;
            }
        }
    });

    function limitarCifra(event) {
        if (event.target.value > 9) {
            event.target.value = 9;
        }
      }

    function restablecerHabitaciones() {
        document.getElementById("Habitaciones").value = "";
        props.restablecerHabitaciones("");
    }

    return (
        <div className="relative mt-[10px] mx-5">
            <details id="FiltroHabitaciones" className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Habitaciones </span>
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

                <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-4">
                    <div className="w-[250px] rounded border border-gray-200 bg-white">
                        <div className="border-b border-gray-200 p-4">
                            <div className="flex justify-center gap-4">
                                <label for="FilterPriceFrom" className="flex items-center gap-2 mr-3">
                                    <div className="w-full mr-3 sm:text-sm">Cantidad</div>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            id="Habitaciones"
                                            min="1"
                                            max="9"
                                            step="1"
                                            onInput={limitarCifra}
                                            onChange={props.manejarHabitaciones}
                                            className="pl-8 pr-3 py-2 text-left rounded-md appearance-none bg-white border border-gray-200 shadow-sm sm:text-sm focus:outline-none"
                                        />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <header className="flex items-center justify-between p-4">
                            <button type="button" onClick={restablecerHabitaciones} className="text-sm text-gray-900 ml-4 underline underline-offset-4">Resetear filtro</button>
                        </header>
                    </div>
                </div>
            </details>
        </div>
    )
}

export default HabitacionForm;