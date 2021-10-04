import { useState, useEffect } from "react"
import { firestore } from "../../Firebase/Firebase";
import AdminOrderContainer from "./AdminOrderContainer";

function AdminOrders(){

    const [allOrders, setAllOrders] = useState([])
    const [toggleBtn, setToggleBtn] = useState(true)
    const orderDatabase = firestore.collection('orders')


    // Get all user placed orders. Admin account has access to all placed orders as per firebase security rules.
    useEffect(() => {
        orderDatabase
        .onSnapshot(
            (snapshot) => {
                setAllOrders(snapshot.docs.map(doc => 
                    {return {...doc.data(), id: doc.id}}
                    ))               
            })
    }, [])

    
    // on Accept or reject order, change orderAccepted or orderRejected value to true, which will be updated for the user on View Orders page.
    function acceptOrder(id){
        orderDatabase
            .doc(id)
            .update({orderAccepted: true})
        setToggleBtn(false)
    }

    function rejectOrder(id){
        orderDatabase
            .doc(id)
            .update({orderRejected: true})
        setToggleBtn(false)
    }


    let displayorders = allOrders.map((data, index) => (
        <AdminOrderContainer
            key={index} 
            name={data.name}
            location={data.location}
            contact={data.contact}
            subtotal={data.subTotal}
            items={data.items}
            accepted={data.orderAccepted}
            rejected={data.orderRejected}
            orderId={data.id}
            onAcceptOrder={acceptOrder}
            onRejectOrder={rejectOrder}
            toggleButton = {toggleBtn}
        />
    ))

    return(
    
            <div className="currentorderContainer">
                {displayorders}
            </div>
        
    )
}

export default AdminOrders