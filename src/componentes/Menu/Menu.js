import { Link } from "wouter";
import logo from "../../img/LOGOINMO2.png";
import Cookies from 'js-cookie';
import { useState } from 'react';


function Menu() {
    const token1 = Cookies.get('token');
    const username = localStorage.getItem('user');
    const [isMenuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!isMenuOpen);
    }


    return (
        <header aria-label="Site Header" className="bg-gradient-to-br from-[#5F8577] to-[#84A98C] sticky top-0 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a href="/" className="block text-teal-600 ml-5 md:ml-0">
                            <span className="sr-only">Home</span>
                            <img
                                className="h-14"
                                src={logo}
                                alt="Logo inmobiliaria"
                            />
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <nav aria-label="Site Nav">
                            <ul className="flex items-center gap-14 text-sm">
                                <li>
                                    <a className="relative text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-green-200 before:transition hover:before:scale-x-100" href="/">Inicio</a>
                                </li>
                                <li>
                                    <a className="relative text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-green-200 before:transition hover:before:scale-x-100" href="/viviendas">Propiedades en venta</a>
                                </li>
                                <li>
                                    <a className="relative text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-green-200 before:transition hover:before:scale-x-100" href="/asesoramiento">Asesoramiento</a>
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
                            {token1 ?
                                <Link to="/logout"><a href="/logout" className="mx-5 md:mx-0 rounded-md bg-green-500 px-2.5 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-medium text-white shadow transition hover:scale-[103%]">Logout </a></Link>
                                :
                                <Link to="/login"><a href="/login" className="mx-5 md:mx-0 rounded-md bg-green-500 px-2.5 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-medium text-white shadow transition hover:scale-[103%]">Login </a></Link>
                            }
                            {/* <div className="hidden sm:flex"> */}
                                {/* <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600" href="/">
                                    Crear cuenta
                                </a> */}

                                {token1 ?
                                    <Link to="/dashboard"><a href="/dashboard" className="mr-1 md:mr-0 rounded-md bg-white px-2.5 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-medium text-green-500 shadow transition hover:scale-[103%]">Bienvenid@, {username} </a></Link>
                                    :
                                    <Link to="/register"><a href="/register" className="mr-1 md:mr-0 rounded-md bg-gray-100 px-2.5 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-medium text-green-500 shadow transition hover:scale-[103%]">Crear cuenta </a></Link>
                                }

                                {/* {username === "admin" ?
                                    console.log("Tienes acceso a dashboard")
                                    :
                                    console.log("No tienes acceso a dashboard")
                                } */}

                            {/* </div> */}
                        </div>
                        <div className="block md:hidden">

                            <button onClick={toggleMenu} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
                {isMenuOpen && (
                    <nav className="md:hidden bg-gray-100 p-4 text-sm absolute top-16 right-0 z-50">
                        <ul className="flex flex-col gap-4">
                            <li className="p-2 hover:bg-gray-300">
                                <a href="/">Inicio</a>
                            </li>
                            <li className="p-2 hover:bg-gray-300">
                                <a href="/viviendas">Propiedades en venta</a>
                            </li>
                            <li className="p-2 hover:bg-gray-300">
                                <a href="/asesoramiento">Asesoramiento</a>
                            </li>
                            <li className="p-2 hover:bg-gray-300">
                                <a href="/modelos_3d">Modelos 3D</a>
                            </li>
                            <li className="p-2 hover:bg-gray-300">
                                <a href="/sobre_nosotros">Sobre nosotros</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Menu;






