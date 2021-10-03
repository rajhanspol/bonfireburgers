import CheckOutForm from "../CheckOutForm/CheckOutForm";
import NavBar from "../../NavBar/NavBar";
import { AuthContext } from "../../../Context/AuthContext";
import { Context } from "../../../Context/Context";
import { useContext } from "react";
import CheckOutCart from "../CheckOutCart/CheckOutCart";



function CheckOutContainer(){

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
            uid={authCtx.currentUser && authCtx.currentUser.uid}
            // orderAccepted={ctx.orderAccepted}
            onPlaceOrder={ctx.placeOrder}
            />

        </div>
        
    )
}

export default CheckOutContainer