import useUnaVivienda from '../../hooks/useUnaVivienda';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import { toast } from 'react-toastify';


function Contactar(props) {
  const { vivienda } = useUnaVivienda(props.params.idVivienda);
  const primeraImagen = vivienda?.imagenes?.[0];

  function EnviaSolicitud(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
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
                <p className="text-2xl text-green-400">{vivienda.direccion}</p>
                <address className="mt-2 not-italic">
                  {vivienda.municipio}, {vivienda.provincia}
                </address>
              </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="space-y-4">
                <div>
                  <p>Enviar solicitud de contacto</p>
                  <br></br>
                  <label className="sr-only" htmlFor="name">
                    Nombre y Apellidos
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Correo electrónico
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Teléfono
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>
                <br></br>
                <p>¿En qué está interesado?</p>
                <br></br>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
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
                  <label className="sr-only" htmlFor="message">
                    f
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Deje un mensaje a la persona que se pondrá en contacto con usted"
                    rows={8}
                    id="message"
                    defaultValue={""}
                    style={{
                      boxShadow: "1px 1px 4px 6px rgba(0, 0, 0, 0.1)" // Ajusta los valores de sombra para una apariencia más intensa
                    }}
                  />
                </div>
                <div className="mt-4">
                  <button
                    className="inline-block w-full rounded-lg bg-green-700 px-5 py-3 font-medium text-white sm:w-auto"
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