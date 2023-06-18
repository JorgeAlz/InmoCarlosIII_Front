import Navbar from "../../componentes/NavBar/NavBar";
import ListaPropiedades from "../../componentes/ListaPropiedades/ListaPropiedades";
import useAllViviendas from "../../hooks/useAllViviendas";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import imagenLoader from '../../img/ajax-loader.gif';
import AjaxLoader from "../../componentes/Ajax-Loader/AjaxLoader";

const Propiedades = () => {
  const [page, setPage] = useState(0);
  const { buscando, listaViviendas } = useAllViviendas(page);
  console.log(listaViviendas);
  function getNextPage() {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <>
      <>
        <div className="flex columns-2">
          <Navbar />
          <div className="md:container md:mx-auto">
            <InfiniteScroll
              dataLength={listaViviendas.length}
              next={getNextPage}
              hasMore={!buscando}
              loader={<AjaxLoader loader={imagenLoader}></AjaxLoader>}>
              <ListaPropiedades listaPropiedades={listaViviendas} />
            </InfiniteScroll>
          </div>
        </div>
      </>
    </>
  );
};
export default Propiedades;
