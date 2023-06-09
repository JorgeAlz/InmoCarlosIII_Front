import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/registeractions";
import { useState } from "react";
import logo from "../../img/LOGOINMO2.png";
import { toast } from 'react-toastify';


const Register2 = () => {

  const [username, setUsername] = useState('');
  const [telefono, setTelefono] = useState('');
  const [firstname, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !telefono || !firstname || !surname || !email || !password) {
      toast.error('Por favor, rellena todos los campos');
    } else {
      dispatch(register(username, surname, firstname, password, email, telefono));
    }
  };

  function soloNumeros(event) {
    const keyCode = event.which || event.keyCode;
    const isValidKey = keyCode >= 35 && keyCode <= 40 || keyCode >= 48 && keyCode <= 57 || keyCode === 116 || keyCode === 8 || keyCode === 9 || keyCode === 46 || keyCode === 45;

    if (!isValidKey) {
      event.preventDefault();
    }
  }

  function handleChange(event) {
    if (event.target.value.length > 9) {
      event.target.value = event.target.value.slice(0, 9);
    }
    setTelefono(event.target.value)
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img alt="Night" src="https://p4.wallpaperbetter.com/wallpaper/648/709/216/leaves-green-branches-dark-background-wallpaper-preview.jpg" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white w-32" href="/">
              <img
                className=""
                src={logo}
                alt="Logo inmobiliaria"
              />
            </a>
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Bienvenido a Inmocarlos III
            </h2>

          </div>
        </section>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20" href="/">
                <span className="sr-only">Home</span>
                <img
                  className="h-11"
                  src={logo}
                  alt="Logo inmobiliaria"
                />
              </a>
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Bienvenido a Inmocarlos III
              </h1>

            </div>
            <div>
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-8 gap-6">


                <div controlid="formFirstName" className="col-span-8 sm:col-span-4">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    Usuario
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="p-2 mt-1 w-full rounded-md border-green-700 bg-gray-200 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div controlid="formTelefono" className="col-span-8 sm:col-span-4">
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input type="text" id="telefono" name="telefono" value={telefono}
                    onChange={handleChange} onKeyDown={soloNumeros} className="p-2 mt-1 w-full rounded-md border-green-700 bg-gray-200 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700" />
                </div>

                <div controlid="formUsuario" className="col-span-8 sm:col-span-4">
                  <label htmlFor="Usuario" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input type="text" id="Usuario" name="usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} className="p-2 mt-1 w-full rounded-md border-green-700 bg-gray-200 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700" />
                </div>

                <div controlid="formSurname" className="col-span-8 sm:col-span-4">
                  <label htmlFor="Surname" className="block text-sm font-medium text-gray-700">
                    Apellidos
                  </label>
                  <input type="text" id="Surname" name="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)} className="p-2 mt-1 w-full rounded-md border-green-700 bg-gray-200 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700" />
                </div>

                <div controlid="formEmail" className="col-span-8 sm:col-span-4">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input type="email" id="Email" name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} className="p-2 mt-1 w-full rounded-md border-green-700 bg-gray-200 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700" />
                </div>

                <div controlid="formPassword" className="relative col-span-8 sm:col-span-4">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <input type={showPassword ? "text" : "password"} id="Password" name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} className="p-2 mt-1 w-full rounded-md border-green-700 bg-gray-200 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700" />
                  <span
                    className="absolute inset-y-0 end-0 grid place-content-center px-3"
                    onClick={handleTogglePassword}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 cursor-pointer mt-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button type="submit" className="inline-block shrink-0 rounded-md border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white transition active:bg-green-500 active:border-green-500 active:scale-95 focus:outline-none">
                    Registro
                  </button>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    ¿Ya tienes cuenta?&nbsp;
                    <a href="/login" className="text-gray-700 underline">Inicia sesión</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register2;