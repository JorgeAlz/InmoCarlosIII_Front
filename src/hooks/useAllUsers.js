import { useEffect, useState } from "react";
import { getAllUsuarios } from "../servicios/usuarios/getAllUsuarios";

const useAllUsers = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [buscando, setBuscando] = useState(true);

  function obtenerAllUsers() {
    //Marcamos que estamos buscando los datos
    setBuscando(true);
    // Usamos el servicio de obtención de posts que hemos creado
    getAllUsuarios().then((usuarios) => {
      //Cargamos los post en el estado del componente
      setListaUsuarios(usuarios);
      //Indicamos que hemos terminado de cargar los datos
      setBuscando(false);
    });
  }

  // Llamamos a la función de extracción de datos con un useEffect
  // para que solo se ejecute una vez
  useEffect(obtenerAllUsers, []);
  //La lista de viviendas que devolvemos es la cual cuya página hemos pasado a este hook
  return { buscando, listaUsuarios };
};
export default useAllUsers;