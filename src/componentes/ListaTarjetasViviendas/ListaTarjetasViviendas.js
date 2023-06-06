import TarjetaVivienda from "../TarjetaVivienda/TarjetaVivienda";

const ListaTarjetasViviendas = (props) => {

  function muestraViviendas(vivienda) {
    return <TarjetaVivienda key={vivienda.id} vivienda={vivienda}></TarjetaVivienda>;
  }

  if (props.aleatoriedad) {
    return (
      <div>
        <ul className="flex gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {props.listaTarjetasViviendas.sort(() => Math.random() - 0.5).slice(0, 4).map(muestraViviendas)}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="flex gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {props.listaTarjetasViviendas.slice(0, 4).map(muestraViviendas)}
        </ul>
      </div>
    );
  }


}

export default ListaTarjetasViviendas;