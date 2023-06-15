const TipoVivienda = (props) => {

    if (props.index === 0) {
        return (
            <option value={props.tipoVivienda} selected={true}>{props.tipoVivienda}</option>
        )
    } else {
        return (
            <option value={props.tipoVivienda}>{props.tipoVivienda}</option>
        )
    }

}

export default TipoVivienda;