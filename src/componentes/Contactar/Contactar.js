import useUnaVivienda from '../../hooks/useUnaVivienda';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import { toast } from 'react-toastify';


function Contactar(props) {
    const { vivienda } = useUnaVivienda(props.params.idVivienda);
    const primeraImagen = vivienda?.imagenes?.[0];

    function EnviaSolicitud(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && telefono && mensaje) {
            toast.success('¡Solicitud enviada!');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } else {
            toast.error('Por favor, complete todos los campos del formulario');
        }
    }

    return (
        <div>
            <Menu></Menu>
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            {primeraImagen && <img src={primeraImagen} alt="Vivienda" />}
                            <div className="mt-8">
                                <p className="text-2xl text-green-600">{vivienda.direccion}</p>
                                <address className="mt-2 not-italic">
                                    {vivienda.municipio}, {vivienda.provincia}
                                </address>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 lg:pb-6">
                            <form action="" className="space-y-4">
                                <div>
                                    <p>Enviar solicitud de contacto</p>
                                    <br></br>
                                    <label className="sr-only" htmlFor="nombre">
                                        Nombre
                                    </label>
                                    <div controlId="formNombre" className="col-span-8 sm:col-span-4">
                                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                                            Nombre
                                        </label>
                                        <input type="text" id="nombre" name="nombre" className="p-3 mt-1 w-full rounded-md border-green-700 bg-gray-200 text-sm text-gray-700 shadow-sm" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">
                                            Correo electrónico
                                        </label>
                                        <div controlId="formEmail" className="col-span-8 sm:col-span-4">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Correo electrónico
                                            </label>
                                            <input type="text" id="email" name="email" className="p-3 mt-1 w-full rounded-md border-green-700 bg-gray-200 text-sm text-gray-700 shadow-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="telefono">
                                            Teléfono
                                        </label>
                                        <div controlId="formTelefono" className="col-span-8 sm:col-span-4">
                                            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                                                Teléfono
                                            </label>
                                            <input type="number" id="telefono" name="telefono" className="p-3 mt-1 w-full rounded-md border-green-700 bg-gray-200 text-sm text-gray-700 shadow-sm" />
                                        </div>
                                    </div>
                                </div>
                                <p className="py-2">¿En qué está interesado?</p>
                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3 pb-5">
                                    <div>
                                        <input
                                            className="peer sr-only"
                                            id="option1"
                                            type="radio"
                                            tabIndex={-1}
                                            name="option"
                                        />
                                        <label
                                            htmlFor="option1"
                                            className="block w-full rounded-lg border border-gray-200 p-3 hover:border-green-400 peer-checked:border-black-400 peer-checked:bg-green-400 peer-checked:text-black"
                                            tabIndex={0}
                                        >
                                            <span className="text-sm font-medium text-green-600"> Comprar </span>
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="peer sr-only"
                                            id="option3"
                                            type="radio"
                                            tabIndex={-1}
                                            name="option"
                                        />
                                        <label
                                            htmlFor="option3"
                                            className="block w-full rounded-lg border border-gray-200 p-3 hover:border-green-400 peer-checked:border-black-400 peer-checked:bg-green-400 peer-checked:text-black"
                                            tabIndex={0}
                                        >
                                            <span className="text-sm font-medium text-green-600"> Alquilar </span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="mensaje">
                                        f
                                    </label>
                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Deje un mensaje a la persona que se pondrá en contacto con usted..."
                                        rows={8}
                                        id="mensaje"
                                        defaultValue={""}
                                        style={{
                                            boxShadow: "1px 1px 4px 6px rgba(0, 0, 0, 0.1)"
                                        }}
                                    />
                                </div>
                                <div className="pt-2">
                                    <button
                                        className="inline-block w-full rounded-lg bg-green-500 px-5 py-3 font-medium text-white sm:w-auto transition active:bg-green-400 active:scale-95"
                                        onClick={EnviaSolicitud}
                                    >
                                        Enviar solicitud
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default Contactar;