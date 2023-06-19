import { TbRulerMeasure } from "react-icons/tb";
import { FaShower } from "react-icons/fa";
import { GiBed } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BiBuildingHouse } from "react-icons/bi";

const Vivienda = (props) => {

    let precioBonito = "";
    let margen = "";

    for (let i = 0; i < props.vivienda.precio.toString().length; i++) {
        precioBonito += props.vivienda.precio.toString().charAt(i);
        if (i === props.vivienda.precio.toString().length - 4 || i === props.vivienda.precio.toString().length - 7) {
            precioBonito += ".";
        }
    }

    if (props.index % 2 === 0) {
        margen = "md:ml-[75px]";
    } else {
        margen = "md:mr-[75px]";
    }

    return (
        <li className={`w-96 p-5 md:w-5/6 mt-[25px] mb-[25px] ${margen} flex-wrap overflow-hidden`}>
            <a href={`/vivienda/${props.vivienda.id}`} className="block rounded-lg p-3 shadow-sm shadow-green-700 mt-4 transition-transform transform hover:scale-105">
                <img alt={`Vivienda ${props.vivienda.id}`} src={props.vivienda.imagenes[0]} className="h-40 w-full rounded-md object-cover" />
                <div className="mt-2">
                    <dl>
                        <div className="ml-1 md:ml-0">
                            <dt className="sr-only">Dirección</dt>
                            <dd className="font-medium">{props.vivienda.direccion}, {props.vivienda.provincia}, {props.vivienda.municipio}</dd>
                        </div>
                    </dl>
                    <div className="mt-4 grid grid-cols-2 lg:flex lg:items-center md:gap-8 text-xs mb-3 ml-1 md:ml-0 md:mb-0">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-1">
                            <BiBuildingHouse className="text-green-700 w-5 h-5"></BiBuildingHouse>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Tipo</p>
                                <p className="font-medium">{props.vivienda.tipo}</p>
                            </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-1">
                            <MdOutlineAttachMoney className="text-green-700 w-5 h-5"></MdOutlineAttachMoney>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Precio</p>
                                <p className="font-medium">{precioBonito}€</p>
                            </div>
                        </div>
                        <div className="my-5 md:my-0 sm:inline-flex sm:shrink-0 sm:items-center sm:gap-1">
                            <GiBed className="text-green-700 w-5 h-5"></GiBed>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Habitaciones</p>
                                <p className="font-medium">{props.vivienda.habitaciones}</p>
                            </div>
                        </div>
                        <div className="my-5 md:my-0 sm:inline-flex sm:shrink-0 sm:items-center sm:gap-1">
                            <FaShower className="text-green-700 w-5 h-5"></FaShower>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Baños</p>
                                <p className="font-medium">{props.vivienda.banyos}</p>
                            </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-1">
                            <TbRulerMeasure className="text-green-700 w-5 h-5"></TbRulerMeasure>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Superficie</p>
                                <p className="font-medium">{props.vivienda.superficie} m²</p>
                            </div>
                        </div>
                        <span className="ml-5 md:ml-0 mt-2.5 md:mt-0 h-10 md:h-9.5 w-28 relative md:absolute inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm right-5 md:right-3">
                            <button href={`/contactar/${props.vivienda.id}`}>
                                <div className="inline-block px-4 py-2 text-sm font-medium text-gray-700 border-r hover:bg-gray-50 focus:relative">
                                    <div className="flex items-center">
                                        <FiPhone className="mr-1.5" />
                                        <p>Contactar</p>
                                    </div>
                                </div>
                            </button>
                        </span>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default Vivienda;