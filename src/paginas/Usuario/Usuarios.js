import Navbar from "../../componentes/NavBar/NavBar";
import ListaUsuarios from "../../componentes/ListaUsuarios/ListaUsuarios";
import useAllUsers from "../../hooks/useAllUsers";

const Usuarios = () => {
  const { listaUsuarios, buscando } = useAllUsers();
  return (
    <>
      <>
        <div className="flex columns-2">
          <Navbar />
          <div className="md:container md:mx-auto">
            <ListaUsuarios listaUsuarios={listaUsuarios} />
          </div>
        </div>
      </>
    </>
  );
};
export default Usuarios;
