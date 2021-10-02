import {Link} from 'react-router-dom'

function CartDetails(props){
    return (
        <div className="cartDetails">
            <p>Sub Total: {props.amount}</p>
            <Link to="/checkoutpage" >
                <button disabled={props.amount <= 0}>Check Out</button>
            </Link>
        </div>
    )
}

export default CartDetails