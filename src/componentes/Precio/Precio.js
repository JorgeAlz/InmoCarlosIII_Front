const Precio = (props) => {

    if (props.index === 0) {
        return (
            <option value={props.precio.replace(".", "")} selected={true}>{props.precio}</option>
        )
    } else {
        return (
            <option value={props.precio.replace(".", "")}>{props.precio}</option>
        )
    }

}

export default Precio;