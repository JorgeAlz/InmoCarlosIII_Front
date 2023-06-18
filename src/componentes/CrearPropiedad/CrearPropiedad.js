import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CrearPropiedad = () => {
  const propiedadInicial = {
    id: "",
    provincia: "",
    direccion: "",
    precio: "",
    tipo: "",
    habitaciones: "",
    banyos: "",
    superficie: "",
    estado: "",
    imagenes: [],
    descripcion: "",
  };

  const [propiedad, setPropiedad] = useState(propiedadInicial);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !propiedad.provincia ||
      !propiedad.direccion ||
      !propiedad.precio ||
      !propiedad.tipo ||
      !propiedad.habitaciones ||
      !propiedad.banyos ||
      !propiedad.superficie ||
      !propiedad.estado
    ) {
      Swal.fire(
        "Error de validación",
        "Debe completar los campos del formulario",
        "question"
      );
    } else {
      // axios
      //   .post("http://localhost:8080/api/propiedades", propiedad)
      //   .then(function (response) {
      //     console.log(response);
      //     navigate("/dashboard/propiedades"); // Redireccionar a la ruta dashboard
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // Swal.fire(
      //   "Propiedad Creada",
      //   "La propiedad ha sido creada con éxito!",
      //   "success"
      // );

      // setPropiedad(propiedadInicial);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPropiedad((prevState) => ({
      ...prevState,
      [name]: value,
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
            <label htmlFor="provincia" className="sr-only">
              Provincia
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Provincia"
                id="provincia"
                name="provincia"
                autoComplete="on"
                value={propiedad.provincia}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="direccion" className="sr-only">
              Dirección
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Dirección"
                id="direccion"
                name="direccion"
                autoComplete="on"
                value={propiedad.direccion}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="precio" className="sr-only">
              Precio
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Precio"
                id="precio"
                name="precio"
                autoComplete="on"
                value={propiedad.precio}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="tipo" className="sr-only">
              Tipo
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Tipo"
                id="tipo"
                name="tipo"
                autoComplete="on"
                value={propiedad.tipo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="habitaciones" className="sr-only">
              Habitaciones
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Habitaciones"
                id="habitaciones"
                name="habitaciones"
                autoComplete="on"
                value={propiedad.habitaciones}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="banyos" className="sr-only">
              Baños
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Baños"
                id="banyos"
                name="banyos"
                autoComplete="on"
                value={propiedad.banyos}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="superficie" className="sr-only">
              Superficie
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Superficie"
                id="superficie"
                name="superficie"
                autoComplete="on"
                value={propiedad.superficie}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="estado" className="sr-only">
              Estado
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Estado"
                id="estado"
                name="estado"
                autoComplete="on"
                value={propiedad.estado}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="descripcion" className="sr-only">
              Descripción
            </label>
            <div className="relative">
              <textarea
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Descripción"
                id="descripcion"
                name="descripcion"
                value={propiedad.descripcion}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-block inline-block rounded-lg rounded-lg bg-indigo-600 bg-indigo-600
            px-5 px-5 py-3 py-3 text-sm text-sm font-medium text-white"
          >
            Crear
          </button>
          <Link to="/dashboard/propiedades">
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

export default CrearPropiedad;
