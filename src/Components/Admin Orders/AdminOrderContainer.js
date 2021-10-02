function AdminOrderContainer(props){

    

    const gst = (props.subtotal * 2.5 / 100)
    const deliveryCharge = 30
    let tempTotal = props.subtotal + gst + gst + deliveryCharge
    const total = Math.round(tempTotal)

    let cart = props.items.map((data, index) => (
        <p key={index}>{data.name} x {data.qty}</p>
    ))



    return(
        <div>
            <h2>{props.name}</h2>
            <h4>Contact: {props.contact}</h4>
            <h3>Delivery Location:  {props.location}</h3>
                {cart}
            <h5>Total: {total}</h5>
            <div>
                {(!props.accepted && !props.rejected) ?
                <><button 
                    onClick={() => {props.onAcceptOrder(props.orderId)}}
                >Accept</button>
                
                <button
                    onClick={() => {props.onRejectOrder(props.orderId)}}    
                >Reject</button></> :
                
                <h3>Order {props.accepted ? "Accepted" : "Rejected"}</h3>
            }

            </div>
        </div>
    )
}

export default AdminOrderContainer