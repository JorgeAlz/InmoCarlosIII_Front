import logo from "../../img/logo.png";

function Menu() {

    return (
        <header aria-label="Site Header" className="bg-gradient-to-br from-[#5F8577] to-[#84A98C] sticky top-0 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="/">
                            <span className="sr-only">Home</span>
                            <img
                                className="h-8"
                                src={logo}
                                alt="Descripción de la imagen"
                            />
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <nav aria-label="Site Nav">
                            <ul className="flex items-center gap-14 text-sm">
                                <li>
                                    <a className="relative text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-green-200 before:transition hover:before:scale-x-100" href="/viviendas">Propiedades en venta</a>
                                </li>
                                <li>
                                    <a className="relative text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-green-200 before:transition hover:before:scale-x-100" href="/">Careers</a>
                                </li>
                                <li>
                                    <a className="relative text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-green-200 before:transition hover:before:scale-x-100" href="/">History</a>
                                </li>
                                <li>
                                    <a className="relative text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-green-200 before:transition hover:before:scale-x-100" href="/">Services</a>
                                </li>
                                <li>
                                    <a className="relative text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-green-200 before:transition hover:before:scale-x-100" href="/modelos_3d">Modelos 3D</a>
                                </li>
                                <li>
                                    <a className="relative text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-green-200 before:transition hover:before:scale-x-100" href="/sobre_nosotros">Sobre nosotros</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a className="rounded-md bg-green-500 px-5 py-2.5 text-sm font-medium text-white shadow" href="/login">
                                Iniciar sesión
                            </a>
                            <div className="hidden sm:flex">
                                <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600" href="/">
                                    Crear cuenta
                                </a>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Menu;