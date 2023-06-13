import AjaxLoader from '../../componentes/Ajax-Loader/AjaxLoader';
import useUnaVivienda from '../../hooks/useUnaVivienda';
import ViviendaCompleta from '../../componentes/ViviendaCompleta/ViviendaCompleta';
import Menu from '../../componentes/Menu/Menu';
import Footer from '../../componentes/Footer/Footer';


function ViviendaDetallada(props) {

    //La vivienda recibida en este componente es la vivienda de una id específica. Esta id es recogida de la url y pasada al hook useUnaVivienda, que a su vez devuelve la vivienda de dicha id.
    const { buscando, vivienda } = useUnaVivienda(props.params.idVivienda);

    return (
        <div>
            <Menu></Menu>
            <div>
                {buscando ? <AjaxLoader></AjaxLoader>
                    : <ViviendaCompleta vivienda={vivienda}></ViviendaCompleta>
                }
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ViviendaDetallada;