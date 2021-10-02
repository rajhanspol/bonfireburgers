import { useContext } from "react"
import { Context } from "../../../Context/Context"

function ItemContent(props){

    const ctx = useContext(Context)

    const orderedItem = 
        {
            name: props.name, 
            price: props.price, 
            qty: 1, 
            amount: props.price
        }


    return (
        <div>
            <h3>{props.name}</h3>
            <h4><i className="fas fa-rupee-sign rupee"></i>{props.price}</h4>
            <button onClick={() => ctx.addItemToCart(orderedItem)}>ADD</button>
            <p>{props.description}</p>
        </div>
    )
}

export default ItemContent