
const Banner = () => {

    return (
        <section className="relative">
            <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat filter brightness-50">
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
            </div>
            <div className="relative mx-auto max-w-screen-xl px-10 md:px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-left text-white text-3xl font-extrabold sm:text-5xl">
                        Tu hogar,
                        <strong className="block font-extrabold text-green-400 mt-2">
                            Tu felicidad,
                        </strong>
                        <strong className="block font-extrabold text-green-600">
                            Nuestro compromiso.
                        </strong>
                    </h1>
                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a href="/register" className="group relative inline-flex items-center overflow-hidden rounded bg-green-500 px-6 py-2 md:px-8 md:py-3 text-white focus:outline-none active:bg-green-700">
                            <span className="absolute -start-full transition-all group-hover:start-4">
                                <svg
                                    className="h-5 w-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>

                            <span className="text-sm md:text-md font-medium transition-all group-hover:ms-4">
                                Unirme
                            </span>
                        </a>
                        <a href="/asesoramiento" className="group relative inline-flex items-center overflow-hidden rounded bg-white px-8 py-3 text-white focus:outline-none active:bg-gray-200">
                            <span className="absolute -start-full transition-all group-hover:start-4">
                                <svg
                                    className="h-5 w-5 text-green-500 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>

                            <span className="text-sm md:text-md text-green-500 font-medium transition-all group-hover:ms-4">
                                Saber más
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner;