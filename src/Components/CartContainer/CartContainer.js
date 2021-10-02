import CartItems from "./CartItems/CartItems"
import {useContext} from 'react'
import {Context} from '../../Context/Context'
import CartDetails from "./CartDetails/CartDetails"

function CartContainer(){

    const ctx = useContext(Context)

    const displayCartItems = ctx.cartState.items.map(data => (
        <CartItems 
        key={data.name}
        name={data.name}
        price={data.price}
        qty={data.qty}
        amount={data.amount}
        addItem = {ctx.addItemToCart}
        removeItem = {ctx.removeItemFromCart}
        />
    ))

    return (
        <div className="cartContainer">
            <div className="cartItemContainer">
                {displayCartItems}
            </div>
            <CartDetails amount={ctx.cartState.totalAmount}/>
        </div>
    )
}

export default CartContainer