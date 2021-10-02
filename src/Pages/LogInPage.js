import { useRef, useContext, useState } from "react"
import {AuthContext} from '../Context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import NavBar from "../Components/NavBar/NavBar"

function LogInPage(){

    const authCtx = useContext(AuthContext)

    const emailRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState("") 
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function onSubmitHandler(e){
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            await authCtx.logIn(emailRef.current.value, passwordRef.current.value)
            setLoading(false)
            history.push('/')
        } catch {
            setError("Failed to Log In")
        }
        
        
    }

    async function onTestLoginHandler(e){
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            await authCtx.logIn('test@bonfire.com', "test12345")
            setLoading(false)
            history.push('/')
        } catch {
            setError("Failed to Log In")
        }    
    }

    async function onAdminLoginHandler(e){
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            await authCtx.logIn('admin@bonfire.com', "admin12345")
            setLoading(false)
            history.push('/')
        } catch {
            setError("Failed to Log In")
        }    
    }


    return(
        <div className="logInPage">
            <NavBar />
            <h2 className="signinTitle">Log In</h2>
            <h4>You need to be logged in to place orders</h4>
            <button className="gstAccBtn" onClick={onTestLoginHandler}>Use Guest Account</button>
            <button className="gstAccBtn" onClick={onAdminLoginHandler}>Use Test - Admin Account</button>
            <h3>{error}</h3>
            <form className="signinForm" onSubmit={onSubmitHandler}>
                <div>
                    <label>Email: </label>
                    <input type="text" ref={emailRef} required></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" ref={passwordRef} required></input>
                </div>
                <div>
                    <button disabled={loading} className="signInFormBtn" type="submit">Log In</button>
                </div>
            </form>

            <h3 className="alreadyAcc">Don't have an account? 
                <Link to="/signin">
                    <button>Sign Up</button>
                </Link>
            </h3>
        </div>
    )

}

export default LogInPage