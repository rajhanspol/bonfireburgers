import React from 'react'
import { useState, useEffect } from 'react'
import { auth } from '../Firebase/Firebase'

const AuthContext = React.createContext()

function AuthContextProvider(props){

    const [currentUser, setCurrentUser] = useState()


    function signUp(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function logIn(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logOut(){
        return auth.signOut()
    }

    
    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsub
    }, [])

    //console.log(currentUser)


    return (
        <AuthContext.Provider
            value={{
                currentUser,signUp,logIn, logOut
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext}