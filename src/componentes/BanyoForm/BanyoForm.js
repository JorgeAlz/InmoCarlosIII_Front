const BanyoForm = (props) => {

    document.addEventListener('click', function (event) {
        let filtroBanyos = document.getElementById("FiltroBanyos");
        let targetElement = event.target;

        if (!filtroBanyos.contains(targetElement)) {
            if (filtroBanyos.open) {
                filtroBanyos.open = false;
            }
        }
    });

    function limitarCifra(event) {
        if (event.target.value > 9) {
            event.target.value = 9;
        }
      }

    function restablecerBanyos() {
        document.getElementById("Banyos").value = "";
        props.restablecerBanyos("");
    }

    return (
        <div className="relative mt-[10px] mx-5">
            <details id="FiltroBanyos" className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Baños </span>
                    <span className="transition-all group-open:rotate-90 group-open:-ml-[69px] md:group-open:-rotate-180 md:group-open:m-auto">
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

                <div className="z-50 group-open:left-[-220%] group-open:top-[-50%] group-open:absolute md:group-open:start-0 md:group-open:top-auto md:group-open:mt-4">
                    <div className="w-[200px] rounded border border-gray-200 bg-white md:w-[250px]">
                        <div className="border-b border-gray-200 p-4">
                            <div className="flex justify-center gap-4">
                                <label for="FilterPriceFrom" className="flex items-center gap-2 mr-3">
                                    <div className="w-full mr-3 text-xs md:text-sm">Cantidad</div>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            id="Banyos"
                                            min="1"
                                            max="9"
                                            step="1"
                                            onInput={limitarCifra}
                                            onChange={props.manejarBanyos}
                                            className="pl-8 pr-3 py-2 text-left rounded-md appearance-none bg-white border border-gray-200 shadow-sm text-xs md:text-sm focus:outline-none"
                                        />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <header className="flex md:items-center md:justify-between p-2 mb-1 md:mb-0 md:p-4">
                            <button type="button" onClick={restablecerBanyos} className="text-xs md:text-sm text-gray-900 ml-4 underline underline-offset-4">Resetear filtro</button>
                        </header>
                    </div>
                </div>
            </details>
        </div>
    )
}

export default BanyoForm;