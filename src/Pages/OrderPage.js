import { useContext } from 'react'
import CartContainer from "../Components/CartContainer/CartContainer"
import CartFooter from "../Components/CartContainer/CartFooter/CartFooter"
import CartModal from "../Components/CartContainer/CartModal"
import MenuContainer from "../Components/Menu Container/MenuContainer"
import NavBar from "../Components/NavBar/NavBar"
import {Context} from '../Context/Context'


function OrderPage(){

    const ctx = useContext(Context)
    // Wrapped in modal for small screens. Modal does not show on larger screens
    return (
        
            <CartModal>
            <NavBar />
            <div className="menuandCart">
                <MenuContainer />                
                <CartContainer />   
            </div>
            <CartFooter toggleModal={ctx.showModal} arrow={<i class="fas fa-arrow-up"></i>}/>
            </CartModal>
        
    )
}

export default OrderPage