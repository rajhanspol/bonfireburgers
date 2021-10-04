//import logoImg from '../../img/bonfirelogo.jpg'

import { useContext } from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../Context/AuthContext'
import LogOut from '../LogOut/LogOut'



function NavBar(){

    const authCtx = useContext(AuthContext)


    return (
        
        <div className="navigation">

            <div>
                <h1>Bonfire Burgers</h1>
                <h4 style={{display: authCtx.currentUser && authCtx.currentUser.email !== "admin@bonfire.com"? "block" : "none"}}>Logged in as: {authCtx.currentUser && authCtx.currentUser.email}</h4>
            </div>
            
            <Link to="/">
                <button>Home</button>
            </Link>

            <Link to="/orderonline">
                <button>Order online</button>
            </Link>

            <Link to="/login" style={{display: authCtx.currentUser? "none" : "block"}}>
                <button >Log In</button>
            </Link>

            <Link to="/signin" style={{display: authCtx.currentUser? "none" : "block"}}>
                <button >Sign In</button>
            </Link>

            <Link to="/adminpage" style={{display: authCtx.currentUser && authCtx.currentUser.email === "admin@bonfire.com"? "block" : "none"}}>
                <button>Admin Dashboard</button>
            </Link>

            <Link to="/vieworders" style={{display: authCtx.currentUser && authCtx.currentUser.email !== "admin@bonfire.com"? "block" : "none"}}>
                <button>View Orders</button>
            </Link>
                        
            <LogOut />

            
        </div>

    
    )
}

export default NavBar