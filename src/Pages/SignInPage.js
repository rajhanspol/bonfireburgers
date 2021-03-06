import { useContext, useRef, useState } from "react"
import {Link, useHistory} from 'react-router-dom'
import NavBar from "../Components/NavBar/NavBar"
import { AuthContext } from "../Context/AuthContext"



function SignInPage(){  

    const authCtx = useContext(AuthContext)

    
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef =  useRef()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    // New user sign in function
    async function onSubmitHandler(e){
        e.preventDefault()

        if(passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError("")
            setLoading(true)
            await authCtx.signUp(emailRef.current.value, passwordRef.current.value)
            history.push('/')
            setLoading(false)
        } catch {
            setError("Failed to create account")
        }
        

    }


    return (
        <div>
            <NavBar />
            <h2 className="signinTitle">Sign Up</h2>
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
                    <label>Confirm Password: </label>
                    <input type="text" ref={confirmPasswordRef} required></input>
                </div>
                <div>
                    <button disabled={loading} className="signInFormBtn" type="submit">Sign Up</button>
                </div>
            </form>

            <h3 className="alreadyAcc">Already have an account? 
                <Link to="/login">
                    <button className="logInFormBtn">Log In</button>
                </Link>
            </h3>

        </div>
    )
}

export default SignInPage