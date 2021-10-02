import React, { useEffect, useState, useReducer } from "react";
import { firestore } from "../Firebase/Firebase";





const Context = React.createContext()

const defaultCartState = {
    items: [],
    totalAmount: 0
}


function cartReducer(state, action){
    if(action.type === "ADD") {
        
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.qty

        const exsistingCartItemIndex = state.items.findIndex(
            (item) => item.name === action.item.name
        )

        const exsistingCartItem = state.items[exsistingCartItemIndex]
        let updatedItems

        if (exsistingCartItem){
            const updatedItem = {
                ...exsistingCartItem,
                qty: exsistingCartItem.qty + action.item.qty,
                amount: exsistingCartItem.amount + action.item.price
            }
            updatedItems = [...state.items]
            updatedItems[exsistingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }       

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === "REMOVE"){
        const exsistingCartItemIndex = state.items.findIndex(
            item => item.name === action.name
        )
        const exsistingCartItem = state.items[exsistingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - exsistingCartItem.price
        let updatedItems
        if(exsistingCartItem.qty === 1){
            updatedItems = state.items.filter(item => item.name !== action.name)
        } else {
            const updatedItem = {
                ...exsistingCartItem,
                qty: exsistingCartItem.qty - 1,
                amount: exsistingCartItem.amount - exsistingCartItem.price
            }
            updatedItems = [...state.items]
            updatedItems[exsistingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === "REFRESH"){
        return {
            items: [],
            totalAmount: 0
        }
    }
    return defaultCartState
}




function ContextProvider(props){


    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    function addItemToCart(item){
        dispatchCartAction({type: "ADD", item: item})
    }

    function removeItemFromCart(name){
        dispatchCartAction({type: "REMOVE", name: name})
    }

    function refreshItemCart(){
        dispatchCartAction({type: "REFRESH"})
    }

    const [orderMenu, setOrderMenu] = useState([])
    const [toggleModal, setToggleModal] = useState(false)
    // const [extraCharge, setExtraCharge] = useState([])

    
    const database = firestore.collection('menu')
    const orderDatabase = firestore.collection('orders')
    // const exCharges = firestore.collection('extraCharges')

    function showModal(){
        setToggleModal(true)
    }

    function hideModal(){
        setToggleModal(false)
    }

    async function placeOrder(data){
        console.log(data)
        await orderDatabase.add(data)
        refreshItemCart()
    }


    useEffect(() => {
        return database
            .onSnapshot(
                (snapshot) => {
                    setOrderMenu(snapshot.docs.map(doc => 
                        {return {...doc.data(), id: doc.id}}))
                }               
            )            
    }, [])



    return (
        <Context.Provider
            value={{
                orderMenu,
                addItemToCart,
                cartState,
                removeItemFromCart,
                placeOrder, showModal, toggleModal, hideModal
                // extraCharge
            
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}