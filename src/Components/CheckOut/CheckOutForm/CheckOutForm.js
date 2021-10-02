import {useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'


function CheckOutForm(props){

    const history = useHistory()

    const [error, setError] = useState("")

    const nameRef = useRef()
    const locationRef = useRef()
    const contactRef = useRef()

    let orderItems = props.items.map(item => (
        {name: item.name, qty: item.qty}
    ))

    //console.log(orderItems)

    function placeOrderHandler(){
        let orderData = {
            name: nameRef.current.value,
            location: locationRef.current.value,
            contact: contactRef.current.value,
            items: orderItems,
            subTotal: props.totalAmount,
            orderAccepted: false,
            orderRejected: false,
            uid: props.uid
        }
        if(nameRef.current.value === "" || locationRef.current.value === "" || contactRef.current.value === ""){
            return setError("Please enter missing fields") 
        } else {
        props.onPlaceOrder(orderData)
        history.push('/')
        }
    }



    //console.log(orderData)

    return(
        <div className="chkOutFormContainer">
            <form className="signinForm" onSubmit={e => e.preventDefault()}>
                    {error && error}
                    <div>
                    <label>Name: </label>
                    <input type="text" ref={nameRef} required></input>
                </div>
                <div>
                    <label>Delivery Location: </label>
                    <input type="text" ref={locationRef} required></input>
                </div>
                <div>
                    <label>Contact Number: </label>
                    <input type="text" ref={contactRef} required></input>
                </div>
                <div>
                    <button className="signInFormBtn" type="submit" onClick={placeOrderHandler}>Place Order</button>
                </div>
            </form>
        </div>
    )
}

export default CheckOutForm

//() => {props.onPlaceOrder(orderData)}