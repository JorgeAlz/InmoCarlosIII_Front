const TarjetaVivienda = (props) => {

    return (
        <li>
            <a href={`/vivienda/${props.vivienda.id}`} className="block rounded-lg p-4 border shadow-md shadow-indigo-100 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-100">
                <img
                    alt="Home"
                    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Precio</dt>
                            <dd className="font-medium text-3xl mt-4">{props.vivienda.precio}</dd>
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