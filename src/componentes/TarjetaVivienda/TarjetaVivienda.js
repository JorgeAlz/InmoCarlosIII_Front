const TarjetaVivienda = (props) => {

    let precioBonito = "";

    for (let i = 0; i < props.vivienda.precio.toString().length; i++) {
        precioBonito += props.vivienda.precio.toString().charAt(i);
        if (i === props.vivienda.precio.toString().length - 4 || i === props.vivienda.precio.toString().length - 7) {
            precioBonito += ".";
        }
    }

    return (
        <li>
            <a href={`/vivienda/${props.vivienda.id}`} className="block rounded-lg p-4 border shadow-md shadow-indigo-100 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-100">
                <img
                    alt="Home"
                    src={props.vivienda.imagenes[0]}
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Precio</dt>
                            <dd className="font-medium text-3xl mt-4">{precioBonito}€</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Dirección</dt>
                            <dd className="font-medium mt-3">{props.vivienda.direccion}, {props.vivienda.provincia}, {props.vivienda.municipio}</dd>
                        </div>
                    </dl>
                </div>
            </a>
        </li>
    )

}

export default TarjetaVivienda;