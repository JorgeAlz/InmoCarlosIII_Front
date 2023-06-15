import { TbRulerMeasure } from "react-icons/tb";
import { FaShower } from "react-icons/fa";
import { GiBed } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Vivienda = (props) => {

    let precioBonito = "";

    for (let i = 0; i < props.vivienda.precio.toString().length; i++) {
        precioBonito += props.vivienda.precio.toString().charAt(i);
        if (i === props.vivienda.precio.toString().length - 4 || i === props.vivienda.precio.toString().length - 7) {
            precioBonito += ".";
        }
    }

    return (
        <li className="p-5 md:w-5/6 mt-[25px] mb-[25px] ml-[70px] flex-wrap overflow-hidden">
            <a href={`/vivienda/${props.vivienda.id}`} className="block rounded-lg p-3 shadow-sm shadow-green-700 mt-4 transition-transform transform hover:scale-105">
                <img alt={`Vivienda ${props.vivienda.id}`} src={props.vivienda.imagenes[0]} className="h-40 w-full rounded-md object-cover" />
                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Dirección</dt>
                            <dd className="font-medium">{props.vivienda.direccion}, {props.vivienda.provincia}, {props.vivienda.municipio}</dd>
                        </div>
                    </dl>
                    <div className="mt-4 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <TbRulerMeasure className="text-green-700 w-5 h-5"></TbRulerMeasure>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Superficie</p>
                                <p className="font-medium">{props.vivienda.superficie} m²</p>
                            </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <FaShower className="text-green-700 w-5 h-5"></FaShower>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Baños</p>
                                <p className="font-medium">{props.vivienda.banyos}</p>
                            </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <GiBed className="text-green-700 w-5 h-5"></GiBed>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Habitaciones</p>
                                <p className="font-medium">{props.vivienda.habitaciones}</p>
                            </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <MdOutlineAttachMoney className="text-green-700 w-5 h-5"></MdOutlineAttachMoney>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Precio</p>
                                <p className="font-medium">{precioBonito}€</p>
                            </div>
                        </div>
                        <span className="absolute inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm right-3">
                            <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 border-r hover:bg-gray-50 focus:relative">
                                <div className="flex items-center">
                                    <FiPhone className="mr-2" />
                                    <p>Contactar</p>
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