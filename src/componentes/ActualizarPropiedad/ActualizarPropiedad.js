import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useIdUser from "../../hooks/useIdUser";
import { updateVivienda } from "../../servicios/viviendas/updateVivienda";
import Swal from "sweetalert2";

const ActualizarPropiedad = (props) => {
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

  const { antiguaPropiedad, buscando } = useIdUser(props.params.id);

  const [nuevaPropiedad, setNuevaPropiedad] = useState(propiedadInicial);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !nuevaPropiedad.provincia ||
      !nuevaPropiedad.direccion ||
      !nuevaPropiedad.precio ||
      !nuevaPropiedad.tipo ||
      !nuevaPropiedad.habitaciones ||
      !nuevaPropiedad.banyos ||
      !nuevaPropiedad.superficie ||
      !nuevaPropiedad.estado ||
      !nuevaPropiedad.imagenes ||
      !nuevaPropiedad.descripcion
    ) {
      Swal.fire(
        "Error de validacion",
        "Debe completar los campos del formulario",
        "question"
      );
    } else {
      updateVivienda(nuevaPropiedad.id, nuevaPropiedad);
      setTimeout(() => {
        navigate("/dashboard/propiedades/");
        window.location.reload();
      }, 1000);
      Swal.fire(
        "Propiedad Actualizada",
        "La propiedad ha sido actualizada con éxito!",
        "success"
      );
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevaPropiedad((prevState) => ({
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
            <label htmlFor="id" className="sr-only">
              Id
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={antiguaPropiedad.id}
                id="id"
                name="id"
                autoComplete="off"
                value={nuevaPropiedad.id}
                onChange={handleChange}
              />
            </div>
          </div>
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
                value={nuevaPropiedad.provincia}
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
                value={nuevaPropiedad.direccion}
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
                value={nuevaPropiedad.precio}
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
                value={nuevaPropiedad.tipo}
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
                value={nuevaPropiedad.habitaciones}
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
                value={nuevaPropiedad.banyos}
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
                value={nuevaPropiedad.superficie}
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
                value={nuevaPropiedad.estado}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="descripcion" className="sr-only">
              Descripción
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Descripción"
                id="descripcion"
                name="descripcion"
                autoComplete="on"
                value={nuevaPropiedad.descripcion}
                onChange={handleChange}
              />
            </div>
          </div>
          <Link to={`/dashboard/propiedades/`}>
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

export default ActualizarPropiedad;
