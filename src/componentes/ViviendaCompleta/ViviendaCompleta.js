const ViviendaCompleta = (props) => {

    let altImagen = "Vivienda " + props.vivienda.tipo;

    return (
        <div className="flex justify-center my-[100px]" >
            <figure className="w-1/2 block rounded-xl bg-green-200 p-4 sm:p-6 lg:p-8">
                <p>{props.vivienda.tipo}</p>
                <img className="w-80" src={props.vivienda.imagenes[0]} alt={altImagen}></img>
                <figcaption>
                    <p>Tiene {props.vivienda.superficie}m<sup>2</sup></p>
                    <p>Su dirección es {props.vivienda.direccion}</p>
                    <p>Tiene {props.vivienda.habitaciones} habitaciones y {props.vivienda.banyos} baños</p>
                    <p>Su precio actual es de {props.vivienda.precio}€</p>
                </figcaption>
            </figure>
        </div>
    )
}

export default ViviendaCompleta;