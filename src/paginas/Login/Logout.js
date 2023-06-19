import Cookies from 'js-cookie';

function Logout() {

  Cookies.remove('token');
  localStorage.removeItem('user');
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-8xl md:text-9xl">¡Hasta pronto!</h1>
          <a href="/" className="inline-block px-5 py-3 mt-16 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none">
            Volver a la página de inicio
          </a>
        </div>
    </div>
  );
}

export default Logout;