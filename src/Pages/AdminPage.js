import { useState } from 'react'
import AdminOrders from '../Components/Admin Orders/AdminOrders'
import SideBar from '../Components/Admin SideBar/SideBar'
// import ExtraCharges from '../Components/MenuEdit/ExtraCharges'
import MenuEdit from '../Components/MenuEdit/MenuEdit'
import NavBar from '../Components/NavBar/NavBar'
import {Redirect} from 'react-router-dom'
import {AuthContext} from '../Context/AuthContext'
import { useContext } from 'react'

function AdminPage(){

    const authCtx = useContext(AuthContext)

    const [orderPage, setOrderPage] = useState(true)
    const [menuPage, setMenuPage] = useState(false)
    // const [extraCharge, setExtraCharge] = useState(false)

    return (
        <div>
            {authCtx.currentUser && authCtx.currentUser.uid === "knPUfvlbqIWIwnTbz7kkJFd8jDB3"? null : <Redirect to="/"/>}
            <NavBar />
            <div className="adminPageContainer">
            <SideBar 
                displayOrderPage={setOrderPage}
                displayMenuPage={setMenuPage}
                // displayextraCharge={setExtraCharge}
            />
            <div className="adminDetails" style={{display: orderPage? "block" : "none"}}><AdminOrders /></div>
            <div className="adminDetails" style={{display: menuPage? "block" : "none"}}><MenuEdit /></div>
            {/* <div className="adminDetails" style={{display: extraCharge? "block" : "none"}}><ExtraCharges/></div> */}
            
            </div>
        </div>
    )
}

export default AdminPage