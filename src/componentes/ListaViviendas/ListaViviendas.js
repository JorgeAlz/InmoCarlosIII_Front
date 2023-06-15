import Vivienda from "../Vivienda/Vivienda";

const ListaViviendas = (props) => {

  function filtrarMunicipioProvincia(vivienda) {
    if (!(props.municipioProvincia === "" || props.municipioProvincia == null)) {
      return filtradoPorLetras(vivienda);
    } else {
      return true;
    }
  }

  function filtradoPorLetras(vivienda) {
    for (let i = 0; i < props.municipioProvincia.length; i++) {
      if (vivienda.municipio.charAt(i).toLowerCase() !== props.municipioProvincia.charAt(i).toLowerCase() && vivienda.provincia.charAt(i).toLowerCase() !== props.municipioProvincia.charAt(i).toLowerCase()) {
        return false;
      }
    }
    return true;
  }

  function filtrarPrecio(vivienda) {
    if (props.precioMin === "Indiferente" && props.precioMax === "Indiferente") {
      return true;
    } else if (props.precioMin === "Indiferente" && props.precioMax !== "Indiferente") {
      return parseInt(vivienda.precio) <= props.precioMax;
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
      : vivienda.superficie >= parseInt(props.superficie);
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
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-24 mt-5">
        {props.listaViviendas
          .filter(filtrarMunicipioProvincia)
          .filter(filtrarPrecio)
          .filter(filtrarHabitaciones)
          .filter(filtrarBanyos)
          .filter(filtrarSuperficie)
          .filter(filtrarTipoVivienda)
          .map(muestraViviendas)}
      </ul>
    </div>
  );
}

export default ListaViviendas;