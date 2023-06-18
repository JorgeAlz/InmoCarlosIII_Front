import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useIdUser from "../../hooks/useIdUser";
import { updateUser } from "../../servicios/usuarios/updateUser";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ActualizarUsuario = (props) => {
  const usuarioInicial = {
    id: "",
    nombre: "",
    apellidos: "",
    usuario: "",
    clave: "",
    email: "",
    telefono: "",
  };

  const { antiguoUsuario, buscando } = useIdUser(props.params.id);

  const [nuevoUsuario, setNuevoUsuario] = useState(usuarioInicial);

  const navigate = useNavigate();

  useEffect(() => {
    if (antiguoUsuario) {
      setNuevoUsuario(antiguoUsuario);
    }
  }, [antiguoUsuario]);

  function soloNumeros(event) {
    const keyCode = event.which || event.keyCode;
    const isValidKey = keyCode >= 35 && keyCode <= 40 || keyCode >= 48 && keyCode <= 57 || keyCode === 116 || keyCode === 8 || keyCode === 9 || keyCode === 46 || keyCode === 45;

    if (!isValidKey) {
      event.preventDefault();
    }

    if (event.target.value.length > 8) {
      event.target.value = event.target.value.slice(0, 8);
    }
  }



  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !nuevoUsuario.nombre ||
      !nuevoUsuario.apellidos ||
      !nuevoUsuario.usuario ||
      !nuevoUsuario.email ||
      !nuevoUsuario.telefono
    ) {
      Swal.fire(
        "Error de validacion",
        "Debe completar los campos del formulario",
        "question"
      );
    } else {
      updateUser(nuevoUsuario.id, nuevoUsuario);
      setTimeout(() => {
        navigate("/dashboard/usuarios/");
        window.location.reload();
      }, 1000);
      Swal.fire(
        "Usuario Actualizado",
        "El usuario ha sido actualizado con exito!",
        "success"
      );
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    setNuevoUsuario((prevState) => ({
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
            <label htmlFor="id" className="sr-only">
              Id
            </label>
            <div className="relative">
              <input
                type="text"
                className=" w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                id="id"
                name="id"
                autoComplete="off"
                disabled={true}
                value={nuevoUsuario.id}
                onChange={handleChange}
              />
            </div>
          </div>
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
                value={nuevoUsuario.nombre}
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
                value={nuevoUsuario.apellidos}
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
                value={nuevoUsuario.usuario}
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
                value={nuevoUsuario.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="telefono" className="sr-only">
              Telefono
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={nuevoUsuario.telefono}
                id="telefono"
                name="telefono"
                autoComplete="tel"
                value={nuevoUsuario.telefono}
                onChange={handleChange}
                onKeyDown={soloNumeros}
              />
            </div>
          </div>
          <div className="pb-5">
            <label htmlFor="admin">¿Es administrador?</label>
            <select
              name="admin"
              id="admin"
              value={nuevoUsuario.admin}
              onChange={handleChange}
            >
              <option value={false}>No</option>
              <option value={true}>Sí</option>
            </select>
          </div>

          <Link to={`/dashboard/usuarios/`}>
            <button
              type="button"
              className="mr-3 inline-block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
            >
              Cerrar
            </button>
          </Link>

          <button
            type="submit"
            className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActualizarUsuario;
