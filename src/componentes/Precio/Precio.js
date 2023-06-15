const Precio = (props) => {

    if (props.index === 0) {
        return (
            <option value={props.precio.replace(/\./g, "")} selected={true}>{props.precio}</option>
        )
    } else {
        return (
            <option value={props.precio.replace(/\./g, "")}>{props.precio}</option>
        )
    }

}

export default Precio;