import {useHistory} from 'react-router-dom'


function CheckOutCart(props){

    const history = useHistory()

    function goBack(){
        history.push("/orderonline")
    }


    return (
        <div className="checkoutCart">
            <button onClick={goBack}>{"< Back to Menu"}</button>
            <div>
                
                <h2>Cart: {props.totalItems} items</h2>
                <p>Sub Total: {props.totalAmount}</p>
                <p>CGST: {props.gst}</p>
                <p>SGST: {props.gst}</p>
                <p>Delivery Charges: {props.deliveryCharge}</p>
                <h2>Total: {props.total}</h2>
                
            </div>
        </div>
    )
}

export default CheckOutCart