import imagenFin from "../../img/fin.png";

const FinalPagina = () => {

    return (
        <div className="flex flex-col items-center mt-12">
            <img src={imagenFin} alt="Final" className="w-96"></img>
            <h1 className="mt-6 mb-16 font-bold text-3xl">Parece que has llegado al final...</h1>
        </div>
    )

}

export default FinalPagina;