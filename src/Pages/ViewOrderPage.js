import { useContext, useEffect, useState } from "react"
import NavBar from "../Components/NavBar/NavBar"
import ViewOrderContainer from "../Components/ViewOrderContainer/ViewOrderContainer"
import { firestore } from "../Firebase/Firebase";
import {AuthContext} from '../Context/AuthContext'

function ViewOrderPage(){

    const authCtx = useContext(AuthContext)

    const [myOrder, setMyOrder] = useState([])
    const orderDatabase = firestore.collection('orders')

    // Get order data only of current user. Current user cannot access data of other users as per security rules setup in firebase.
    // onSnapshot listnes for order updates(order accepted or rejected)
    useEffect(() => {
        orderDatabase.where("uid", "==", authCtx.currentUser.uid)
            .onSnapshot((querySnapshot) => {
                let order = [];
                querySnapshot.forEach((doc) => {
                    order.push(doc.data());
                });
                
                setMyOrder(order)
            });


    }, [])



    
    // Map all orders and pass data to ViewOrderContainer

    let displayorders = myOrder.map((data, index) => (
        <ViewOrderContainer
            key={index} 
            name={data.name}
            location={data.location}
            contact={data.contact}
            subtotal={data.subTotal}
            items={data.items}
            accepted={data.orderAccepted}
            rejected={data.orderRejected}
        />
    ))



    return(
        <div className="homePage">
            <NavBar />
            <div className="currentorderContainer">
                {displayorders}
            </div>
        </div>
    )
}

export default ViewOrderPage