import {useContext} from 'react'
import {Context} from '../../../Context/Context'

// Cart footer only shows up when screen is small.

function CartFooter(props){

    const ctx = useContext(Context)

    const allItems = ctx.cartState.items.map(item => item.qty)
    const totalItems = allItems.reduce((a,b) => a + b, 0)

    return (
            <div className="cartFooter"
            
            >
                <button onClick={props.toggleModal}>{props.arrow}</button>
                <h4>Cart({totalItems})</h4>
                <h4>Subtotal({ctx.cartState.totalAmount})</h4>
            </div>
        
    )
}

export default CartFooter