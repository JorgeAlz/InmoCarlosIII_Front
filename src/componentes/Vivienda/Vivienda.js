import { Link } from 'wouter';
import { GiBed } from "react-icons/gi";
import { FaShower } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";

const Vivienda = (props) => {

    let altImagen = props.vivienda.tipo + " número " + props.vivienda.id;
    let imagenes = props.vivienda.imagenes.split(",");

    return (
        <li>
            <figure className="flex mb-2 bg-[#C4A484] my-10 border border-gray-500 rounded-xl relative">
                <Link to={`/vivienda/${props.vivienda.id}`}><img className="w-48 rounded-tl-xl rounded-bl-xl" src={imagenes[0]} alt={altImagen}></img></Link>
                <figcaption className="flex flex-col items-center justify-center flex-1">
                    <div className="flex items-center">
                        <GiBed className="mr-2"></GiBed>
                        <p>{props.vivienda.habitaciones} habitaciones</p>
                        <FaShower className="mr-2 ml-5"></FaShower>
                        <p>{props.vivienda.banyos} baños</p>
                        <TbRulerMeasure className="mr-2 ml-5"></TbRulerMeasure>
                        <p>{props.vivienda.superficie}m<sup>2</sup></p>
                    </div>
                    <br></br>
                    <div className="text-center">
                        <h1 className="text-xl mx-20">La vivienda está en la provincia de {props.vivienda.provincia}, en el municipio de {props.vivienda.municipio}. La dirección completa es {props.vivienda.direccion}.</h1>
                        <p>Tiene un precio de {props.vivienda.precio}€.</p>
                    </div>
                </figcaption>
                <div className="flex flex-col">
                    <button className="group relative inline-block overflow-hidden bg-blue-500 rounded-tr-xl px-8 py-3">
                        <span className="absolute inset-y-0 right-0 w-[2px] bg-blue-700 transition-all group-hover:w-full group-active:bg-blue-600"></span>
                        <span className="relative text-sm font-medium text-white transition-colors">Contactar vendedor</span>
                    </button>
                    <button className="group relative inline-block overflow-hidden bg-red-500 px-8 py-3">
                        <span className="absolute inset-y-0 right-0 w-[2px] bg-red-700 transition-all group-hover:w-full group-active:bg-red-600"></span>
                        <span className="relative text-sm font-medium text-white transition-colors">Descartar vivienda</span>
                    </button>
                    <button className="group relative inline-block overflow-hidden bg-yellow-400 rounded-br-xl px-8 py-3">
                        <span className="absolute inset-y-0 right-0 w-[2px] bg-yellow-600 transition-all group-hover:w-full group-active:bg-yellow-500"></span>
                        <span className="relative text-sm font-medium text-white transition-colors">Añadir a favoritos</span>
                    </button>
                </div>
            </figure>
        </li>
    )
}

export default Vivienda;