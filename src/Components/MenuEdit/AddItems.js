import {useRef, useState} from 'react'
import { firestore } from "../../Firebase/Firebase";

function AddItems(props){

    const [loading, setLoading] = useState(false)
    const [itemAddedText, setItemAddedText] = useState("") 

    const groupRef = useRef()
    const nameRef = useRef()
    const descriptionRef = useRef()
    const valueRef = useRef()

    const database = firestore.collection('menu')

    async function addItem(){
        setLoading(true)
        let menuItem = {
            group: groupRef.current.value,
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            value: parseInt(valueRef.current.value)
        }
        await database.add(menuItem)
            setItemAddedText(`${nameRef.current.value} has been added to group ${groupRef.current.value}`)
            groupRef.current.value = null
            nameRef.current.value = null
            descriptionRef.current.value = null
            valueRef.current.value = null
            setLoading(false)

    }


    return(
        <div className="addItemsContainer" style={{display: props.display? "block" : "none"}}>
            <h4>{itemAddedText}</h4>
           <form className="signinForm" onSubmit={(e) => {e.preventDefault()}}>
                <div>
                    <label>Group(case sensitive): </label>
                    <input type="text" ref={groupRef} required></input>
                </div>
                <div>
                    <label>Name: </label>
                    <input type="text" ref={nameRef} required></input>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" ref={descriptionRef} required></input>
                </div>
                <div>
                    <label>Value: </label>
                    <input type="text" ref={valueRef} required></input>
                </div>
                <div>
                    <button disabled={loading} className="signInFormBtn" onClick={() => {addItem()}} type="submit">Add Item to Menu</button>
                </div>
            </form>
        </div>
    )
}

export default AddItems