function CartItems(props){

    const repeatItem = {
        name: props.name, 
        price: props.price, 
        qty: 1, 
        amount: props.price
    }

    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.amount}</p>
            <button onClick={() => props.removeItem(props.name)}>-</button>
            <p>{props.qty}</p>
            <button onClick={() => props.addItem(repeatItem)}>+</button>
        </div>
    )
}

export default CartItems