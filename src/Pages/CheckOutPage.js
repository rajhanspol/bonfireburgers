import CheckOutForm from "../Components/CheckOut/CheckOutForm/CheckOutForm"
import NavBar from "../Components/NavBar/NavBar"
import {Redirect} from 'react-router-dom'
import {AuthContext} from '../Context/AuthContext'
import { Context } from "../Context/Context"
import { useContext } from "react"
import CheckOutCart from "../Components/CheckOut/CheckOutCart/CheckOutCart"

function CheckOutPage(){

    const authCtx = useContext(AuthContext)
    const ctx = useContext(Context)

    const allItems = ctx.cartState.items.map(item => item.qty)
    const totalItems = allItems.reduce((a,b) => a + b, 0)

    const gst = (ctx.cartState.totalAmount * 2.5 / 100)
    const deliveryCharge = 30
    let tempTotal = ctx.cartState.totalAmount + gst + gst + deliveryCharge
    const total = Math.round(tempTotal)

    return (
        <div>
            {authCtx.currentUser? null : <Redirect to="/login" />}
            <NavBar />
            <CheckOutCart 
                totalItems={totalItems}
                totalAmount={ctx.cartState.totalAmount}
                gst={gst}
                deliveryCharge={deliveryCharge}
                total={total}
            />
            <CheckOutForm 
            items={ctx.cartState.items}
            totalAmount={ctx.cartState.totalAmount}
            total={total}
            deliveryCharge={deliveryCharge}
            uid={authCtx.currentUser.uid}
            // orderAccepted={ctx.orderAccepted}
            onPlaceOrder={ctx.placeOrder}
            />

        </div>
    )
}

export default CheckOutPage