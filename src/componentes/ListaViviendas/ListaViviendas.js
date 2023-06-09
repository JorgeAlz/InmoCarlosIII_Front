import SinResultados from "../SinResultados/SinResultados";
import Vivienda from "../Vivienda/Vivienda";

const ListaViviendas = (props) => {

  const viviendasFiltradas = props.listaViviendas
    .filter(filtrarMunicipioProvincia)
    .filter(filtrarTipoVivienda)
    .filter(filtrarPrecio)
    .filter(filtrarHabitaciones)
    .filter(filtrarBanyos)
    .filter(filtrarSuperficie);

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

  function filtrarTipoVivienda(vivienda) {
    return props.tipoVivienda === "Todos" ? true
      : vivienda.tipo === props.tipoVivienda;
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
      : vivienda.habitaciones === parseInt(props.habitaciones);
  }

  function filtrarBanyos(vivienda) {
    return props.banyos === "" ? true
      : vivienda.banyos === parseInt(props.banyos);
  }

  function filtrarSuperficie(vivienda) {
    return props.superficie === "" ? true
      : vivienda.superficie >= parseInt(props.superficie);
  }

  function muestraViviendas(vivienda, index) {
    return <Vivienda key={vivienda.id} vivienda={vivienda} index={index}></Vivienda>;
  }



  return (
    <div>
      {noHayViviendas ? (
        <SinResultados></SinResultados>
      ) : (<ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 justify-items-center">
        {viviendasFiltradas.map(muestraViviendas)}
      </ul>
      )}
    </div>
  );
}

export default ListaViviendas;