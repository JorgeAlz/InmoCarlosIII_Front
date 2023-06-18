import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CrearUsuario = () => {
  const usuarioInicial = {
    id: "",
    nombre: "",
    apellidos: "",
    usuario: "",
    clave: "",
    email: "",
    telefono: "",
    admin: false,
  };

  const [usuario, setUsuario] = useState(usuarioInicial);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !usuario.nombre ||
      !usuario.apellidos ||
      !usuario.usuario ||
      !usuario.clave ||
      !usuario.email ||
      !usuario.telefono
    ) {
      Swal.fire(
        "Error de validacion",
        "Debe completar los campos del formulario",
        "question"
      );
    } else {
      // Convertir el valor de esAdmin a un valor booleano
      const admin = usuario.admin === "true";

      const usuarioEnviado = {
        ...usuario,
        esAdmin: admin,
      };

      axios
        .post("http://localhost:8080/api/usuarios", usuarioEnviado)
        .then(function (response) {
          console.log(response);
          navigate("/dashboard/usuarios"); // Redireccionar a la ruta dashboard
        })
        .catch(function (error) {
          console.log(error);
        });
      Swal.fire(
        "Usuario Creado",
        "El usuario ha sido creado con exito!",
        "success"
      );

      setUsuario(usuarioInicial);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;

    if (name === "esAdmin") {
      newValue = value === "true";
    }

    setUsuario((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          User App
        </h1>

        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="nombre" className="sr-only">
              Nombre
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Nombre"
                id="nombre"
                name="nombre"
                autoComplete="on"
                value={usuario.nombre}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="apellidos" className="sr-only">
              Apellidos
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Apellidos"
                id="apellidos"
                name="apellidos"
                autoComplete="on"
                value={usuario.apellidos}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="usuario" className="sr-only">
              Usuario
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Usuario"
                id="usuario"
                name="usuario"
                autoComplete="on"
                value={usuario.usuario}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="clave" className="sr-only">
              Clave
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Contraseña"
                id="clave"
                name="clave"
                autoComplete="current-password"
                value={usuario.clave}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Email"
                id="email"
                name="email"
                autoComplete="email"
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Telefono
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Telefono"
                id="telefono"
                name="telefono"
                autoComplete="tel"
                value={usuario.telefono}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="admin">¿Es administrador?</label>
            <select
              name="admin"
              id="admin"
              value={usuario.admin}
              onChange={handleChange}
            >
              <option value={false}>No</option>
              <option value={true}>Sí</option>
            </select>
          </div>

          <button
            type="submit"
            className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Crear
          </button>
          <Link to="/dashboard/usuarios">
            <button
              type="button"
              className="ml-3 inline-block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
            >
              Cerrar
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuario;
