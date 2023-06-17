const BannerAsesoramiento = () => {



    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Líderes en asesoramiento de diseño de interiores
                    </h3>
                    <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-justify">
                        InmoCarlosIII, la inmobiliaria líder en ventas y diseño de interiores, te ofrece la oportunidad de transformar tu hogar en un espacio excepcional. Nuestro equipo de expertos en diseño trabajará contigo para crear ambientes personalizados y funcionales que reflejen tu estilo y maximicen el potencial de cada espacio. Con InmoCarlosIII, podrás disfrutar de un hogar que te haga sentir cómodo, inspirado y orgulloso de mostrar. Descubre la belleza de un diseño interior excepcional con InmoCarlosIII.
                    </p>
                </header>
                <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                    <li>
                        <a href="https://images.hola.com/imagenes/decoracion/20221115220840/cortinas-tendencias-decoracion-ms/1-164-216/tendencias-cortinas-10a-a.jpg" target="_blank" rel="noreferrer" className="relative block group">
                            <img
                                src="https://images.hola.com/imagenes/decoracion/20221115220840/cortinas-tendencias-decoracion-ms/1-164-216/tendencias-cortinas-10a-a.jpg"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-80"
                            />

                        </a>
                    </li>
                    <li>
                        <a href="https://kawaii.kawaii.at/img/shade-of-green-fern-leaves-cotton-fabric-by-Dear-Stella-on-green-background-249447-4.jpg" target="_blank" rel="noreferrer" className="relative block group">
                            <img
                                src="https://kawaii.kawaii.at/img/shade-of-green-fern-leaves-cotton-fabric-by-Dear-Stella-on-green-background-249447-4.jpg"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-80"
                            />
                        </a>
                    </li>
                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="https://thalesdemileto.com/wp-content/uploads/2021/10/butaca-tapizada-en-tono-verde-oscuro-3.jpg" target="_blank" rel="noreferrer" className="group block">
                            <div className="relative h-[650px] sm:h-[720px]">
                                <img
                                    src="https://thalesdemileto.com/wp-content/uploads/2021/10/butaca-tapizada-en-tono-verde-oscuro-2-1.jpg"
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover opacity-100 hover:opacity-0"
                                />
                                <img
                                    src="https://thalesdemileto.com/wp-content/uploads/2021/10/butaca-tapizada-en-tono-verde-oscuro-3.jpg"
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover opacity-0 hover:opacity-100"
                                />
                            </div>
                        </a>
                        <div className="mt-3 flex">
                            <a href="https://thalesdemileto.com/wp-content/uploads/2021/10/butaca-tapizada-en-tono-verde-oscuro-3.jpg" target="_blank" rel="noreferrer">

                                <h3 className="text-sm text-gray-700 hover:underline hover:underline-offset-4">
                                    Butaca tapizada en verde
                                </h3>
                            </a>
                        </div>
                        <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                            Colaboración con tiendas de cartera de clientes.
                            Para más información contacta con nosotros.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )

}

export default BannerAsesoramiento;