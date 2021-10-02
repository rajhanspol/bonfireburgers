import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import 'firebase/compat/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAE9Kc0NMr_9_Gkm3Tvy40Jg341RC2ksfA",
    authDomain: "bonfire-online.firebaseapp.com",
    projectId: "bonfire-online",
    storageBucket: "bonfire-online.appspot.com",
    messagingSenderId: "864523840218",
    appId: "1:864523840218:web:624767addde5c320de53e3"
  };




const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export const firestore = app.firestore()


export default app
