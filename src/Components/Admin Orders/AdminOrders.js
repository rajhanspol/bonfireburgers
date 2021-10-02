import { useState, useEffect } from "react"
import { firestore } from "../../Firebase/Firebase";
import AdminOrderContainer from "./AdminOrderContainer";

function AdminOrders(){

    const [allOrders, setAllOrders] = useState([])
    const [toggleBtn, setToggleBtn] = useState(true)
    const orderDatabase = firestore.collection('orders')

    useEffect(() => {
        orderDatabase
        .onSnapshot(
            (snapshot) => {
                setAllOrders(snapshot.docs.map(doc => 
                    {return {...doc.data(), id: doc.id}}
                    ))               
            })
    }, [])

    // .doc(doc.id).update({foo: "bar"});

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

    // console.log(allOrders)


    return(
    
            <div className="currentorderContainer">
                {displayorders}
            </div>
        
    )
}

export default AdminOrders