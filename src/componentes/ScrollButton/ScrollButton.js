const ScrollButton = () => {

    //Manejamos la aparición y desaparición del botón de scroll cada vez que hagamos scroll en la página
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        //Si avanzamos un poco en la página hacia abajo, el botón aparecerá. De lo contrario, se mantendrá oculto
        let scrollButton = document.getElementById("scrollButton");
        if (document.documentElement.scrollTop > 50) {
            scrollButton.classList.remove("opacity-0");
            scrollButton.classList.add("opacity-100");
        } else {
            scrollButton.classList.remove("opacity-100");
            scrollButton.classList.add("opacity-0");
        }
    }

    function topFunction() {
        //Al pulsar el botón, nos situaremos arriba del todo de la página
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (

        <button id="scrollButton" onClick={topFunction} className="fixed bottom-10 right-9 z-50 opacity-0 text-white text-base transition bg-green-500 rounded-full p-4 focus:outline-none hover:bg-green-600 active:bg-green-400 active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
        </button>
    )

}

export default ScrollButton;