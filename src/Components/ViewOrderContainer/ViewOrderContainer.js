

function ViewOrderContainer(props){

  

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

                <button 
                disabled={props.accepted} 
                style={{backgroundColor: props.accepted? "grey":"rgb(248, 107, 88)",
                        display: props.rejected? "none" : "block"
                    }}
                >Pending</button>

                <button 
                disabled={!props.accepted} 
                style={{backgroundColor: props.accepted? "rgb(50, 223, 58)" : "grey",
                        display: props.rejected? "none" : "block"
                    }}
                >Accepted</button>
                <h5 style={{display: props.rejected? "block" : "none"}}>Order cannot be fullfilled. We will call you shortly.</h5>
            </div>
        </div>
    )
}

export default ViewOrderContainer