import {Redirect} from 'react-router-dom'
import {AuthContext} from '../Context/AuthContext'

import React, { useContext } from "react"
import CheckOutContainer from "../Components/CheckOut/CheckOutContainer/CheckOutContainer"

function CheckOutPage(){

    const authCtx = useContext(AuthContext)

    return (
        <React.Fragment>
            {authCtx.currentUser? null : <Redirect to="/login" />}
            <CheckOutContainer />
        
        </React.Fragment>
    )
}

export default CheckOutPage