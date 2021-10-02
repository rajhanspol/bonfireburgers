import CartItems from "./CartItems/CartItems"
import {useContext} from 'react'
import {Context} from '../../Context/Context'
import CartDetails from "./CartDetails/CartDetails"
import CartFooter from "./CartFooter/CartFooter"


function CartModal(props){

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
        <div>
            {props.children}
            <div className="modal" 
                style={{display: ctx.toggleModal? "block" : "none"}}
                onClick={ctx.hideModal}
                >
                
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <CartFooter 
                    toggleModal={ctx.hideModal}
                    arrow={<i class="fas fa-arrow-down"></i>}
                    />
                    <div className="cartItemContainer" >
                        {displayCartItems}
                    </div>
                    <CartDetails amount={ctx.cartState.totalAmount}/>
                </div>
            </div>
        </div>
    )
}

export default CartModal