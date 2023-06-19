import loader from "../../img/ajax-loader.gif";

const AjaxLoader = (props) => {

    let realLoader = "";
    props.loader === undefined ? realLoader = loader : realLoader = props.loader;

    return (
        <div className="flex justify-center mt-20 mb-20">
            <img src={realLoader} alt="ajax-loader"/>
        </div>
    )
}

export default AjaxLoader;