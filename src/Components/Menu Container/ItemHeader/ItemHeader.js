function ItemHeader(props){

    return(
        <div className="itemHeader">
            <h3>{props.title}</h3>
            <div className="itemContentCards">
            {props.children}
            </div>
        </div>
    )
}

export default ItemHeader