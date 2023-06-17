const AjaxLoader = (props) => {

    return (
        <div className="flex justify-center mt-20 mb-20">
            <img src={props.loader} alt="ajax-loader"/>
        </div>
    )
}

export default AjaxLoader;