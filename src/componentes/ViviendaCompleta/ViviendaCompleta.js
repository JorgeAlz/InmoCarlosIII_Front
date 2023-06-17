import { FaShower } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GiBed } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import { BsFillChatRightTextFill } from "react-icons/bs";

const ViviendaCompleta = (props) => {

    let altImagenes = "Vivienda " + props.vivienda.tipo;
    let precioBonito = "";

    for (let i = 0; i < props.vivienda.precio.toString().length; i++) {
        precioBonito += props.vivienda.precio.toString().charAt(i);
        if (i === props.vivienda.precio.toString().length - 4 || i === props.vivienda.precio.toString().length - 7) {
            precioBonito += ".";
        }
    }

    return (
        <div>
            <div className="flex justify-center my-[100px]" >
                <div className="flex w-3/4 block rounded-xl bg-gray-100 shadow-lg">
                    <div className="flex flex-col">
                        <a href={props.vivienda.imagenes[0].replace("482x269", "948x542")} target="_blank" rel="noreferrer">
                            <img className="w-[100%] rounded-tl-xl transition hover:opacity-80 active:scale-[97.5%]" src={props.vivienda.imagenes[0]} alt={altImagenes}></img>
                        </a>
                        <div className="border-t border-l border-r border-solid border-4 border-gray-100" />
                        <div className="flex">
                            <a href={props.vivienda.imagenes[1].replace("482x269", "948x542")} target="_blank" rel="noreferrer">
                                <img className="w-64 rounded-bl-xl transition hover:opacity-80 active:scale-[97.5%]" src={props.vivienda.imagenes[1]} alt={altImagenes}></img>
                            </a>
                            <div className="border-t border-l border-b border-solid border-4 border-gray-100" />
                            <a href={props.vivienda.imagenes[2].replace("482x269", "948x542")} target="_blank" rel="noreferrer">
                                <img className="w-64 transition hover:opacity-80 active:scale-[97.5%]" src={props.vivienda.imagenes[2]} alt={altImagenes}></img>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col p-6">
                        <div className="flex">
                            <p className="text-2xl font-bold pb-5 pt-3">{precioBonito}€</p>
                            <span className="h-12 w-32 inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm ml-6 mt-1.5">
                                <button className="inline-block px-5 text-sm font-medium text-gray-700 border-r hover:bg-gray-50 focus:relative">
                                    <a href={`/contactar/${props.vivienda.id}`} className="flex items-center">
                                        <FiPhone className="mr-2 text-lg" />
                                        <p className="text-md">Contactar</p>
                                    </a>
                                </button>
                            </span>
                        </div>
                        <p className="mb-5"><span className="font-bold">{props.vivienda.tipo}</span> en {props.vivienda.direccion} - {props.vivienda.municipio} - {props.vivienda.provincia}.</p>
                        <div className="flex justify-between mt-12">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <GiBed className="text-green-500 w-12 h-12"></GiBed>
                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500 text-lg">Habitaciones: <span className="font-medium text-black">{props.vivienda.habitaciones}</span></p>
                                    <p className="font-medium"></p>
                                </div>
                            </div>
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <FaShower className="text-green-500 w-12 h-12"></FaShower>
                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500 text-lg">Baños: <span className="font-medium text-black">{props.vivienda.banyos}</span></p>
                                    <p className="font-medium"></p>
                                </div>
                            </div>
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <TbRulerMeasure className="text-green-500 w-12 h-12"></TbRulerMeasure>
                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500 text-lg">Superficie: <span className="font-medium text-black">{props.vivienda.superficie}m<sup>2</sup></span></p>
                                    <p className="font-medium"></p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 mt-16">
                            <BsFillChatRightTextFill className="text-green-500 w-10 h-10"></BsFillChatRightTextFill>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500 text-lg">Descripción: <span className="text-black">{props.vivienda.descripcion}.</span></p>
                                <p className="font-medium"></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mb-[3%] underline flex justify-center scale-150">
                <a className="inline-block rounded-full border border-green-500 p-3 transition text-green-500 hover:bg-green-500 hover:text-white focus:outline-none active:border-green-400 active:bg-green-400 active:scale-95" href="/viviendas">
                    <svg
                        className="h-5 w-5 rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default ViviendaCompleta;