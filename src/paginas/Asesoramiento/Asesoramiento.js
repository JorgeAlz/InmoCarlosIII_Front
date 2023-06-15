import BannerAsesoramiento from "../../componentes/Asesoramiento/BannerAsesoramiento";
import Estadisticas from "../../componentes/Asesoramiento/Estadísticas";
import Footer from "../../componentes/Footer/Footer";
import Menu from "../../componentes/Menu/Menu";

function Asesoramiento() {

    return (
        <div>
            <Menu></Menu>
            <Estadisticas></Estadisticas>
            <BannerAsesoramiento></BannerAsesoramiento>
            <Footer></Footer>
        </div>
    );
}

export default Asesoramiento;