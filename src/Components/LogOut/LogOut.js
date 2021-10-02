import React, {useContext, useState} from 'react'
import {AuthContext} from '../../Context/AuthContext'

import {useHistory} from 'react-router-dom'

function LogOut(){

    const [error, setError] = useState("")

    const authCtx = useContext(AuthContext)
    
    const history = useHistory()
    
    async function onLogOutHandler(){
        setError("")
        
        try {
            await authCtx.logOut()
            history.push('/')
        } catch {
            setError("Failed to LogOut")
            console.log(error)
        }
    }

    return (
        <React.Fragment>
            {error && error}
            <button onClick={onLogOutHandler} style={{display: authCtx.currentUser? "block" : "none"}}>Log Out</button>
        </React.Fragment>
    )
}

export default LogOut