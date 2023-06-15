const TipoVivienda = (props) => {

    if (props.index === 0) {
        return (
            <option value={props.tipoVivienda} selected={true} className="text-xs md:text-sm">{props.tipoVivienda}</option>
        )
    } else {
        return (
            <option value={props.tipoVivienda} className="text-xs md:text-sm">{props.tipoVivienda}</option>
        )
    }

}

export default TipoVivienda;