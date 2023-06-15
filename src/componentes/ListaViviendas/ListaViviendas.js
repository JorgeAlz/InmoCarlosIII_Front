import SinResultados from "../SinResultados/SinResultados";
import Vivienda from "../Vivienda/Vivienda";

const ListaViviendas = (props) => {

  const viviendasFiltradas = props.listaViviendas
    .filter(filtrarMunicipioProvincia)
    .filter(filtrarPrecio)
    .filter(filtrarHabitaciones)
    .filter(filtrarBanyos)
    .filter(filtrarSuperficie)
    .filter(filtrarTipoVivienda);

  const noHayViviendas = viviendasFiltradas.length === 0;

  function filtrarMunicipioProvincia(vivienda) {
    if (!(props.municipioProvincia === "" || props.municipioProvincia == null)) {
      return filtradoPorLetras(vivienda);
    } else {
      return true;
    }
  }

  function filtradoPorLetras(vivienda) {
    for (let i = 0; i < props.municipioProvincia.length; i++) {
      if (vivienda.municipio.substring(0, i + 1).toLowerCase() === props.municipioProvincia.substring(0, i + 1).toLowerCase() || vivienda.provincia.substring(0, i + 1).toLowerCase() === props.municipioProvincia.substring(0, i + 1).toLowerCase()) {
      } else {
        return false;
      }
    }
    return true;
  }

  function filtrarPrecio(vivienda) {
    if (props.precioMin === "Indiferente" && props.precioMax === "Indiferente") {
      return true;
    } else if (props.precioMin === "Indiferente" && props.precioMax !== "Indiferente") {
      return vivienda.precio <= props.precioMax;
    } else if (props.precioMin !== "Indiferente" && props.precioMax === "Indiferente") {
      return vivienda.precio >= props.precioMin;
    } else if (props.precioMin !== "Indiferente" && props.precioMax !== "Indiferente") {
      return vivienda.precio >= props.precioMin && vivienda.precio <= props.precioMax;
    }
  }

  function filtrarHabitaciones(vivienda) {
    return props.habitaciones === "" ? true
      : vivienda.habitaciones === props.habitaciones;
  }

  function filtrarBanyos(vivienda) {
    return props.banyos === "" ? true
      : vivienda.banyos === props.banyos;
  }

  function filtrarSuperficie(vivienda) {
    return props.superficie === "" ? true
      : vivienda.superficie >= props.superficie;
  }

  function filtrarTipoVivienda(vivienda) {
    return props.tipoVivienda === "Todos" ? true
      : vivienda.tipo === props.tipoVivienda;
  }

  function muestraViviendas(vivienda) {
    return <Vivienda key={vivienda.id} vivienda={vivienda}></Vivienda>;
  }



  return (
    <div>
      {noHayViviendas ? (
        <SinResultados></SinResultados>
      ) : (<ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 justify-center">
        {viviendasFiltradas.map(muestraViviendas)}
      </ul>
      )}
    </div>
  );
}

export default ListaViviendas;