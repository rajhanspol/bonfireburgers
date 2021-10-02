import {useContext, useState, useRef} from 'react'
import {Context} from '../../Context/Context'
import { firestore } from "../../Firebase/Firebase";

function EditItems(props){

    const ctx = useContext(Context)

    const orderMenu = ctx.orderMenu

    const [selectedItem, setSelectedItem] = useState("")
    const [loading, setLoading] = useState(false)
    const [displayText, setDisplaytext] = useState("")

    const database = firestore.collection('menu')

    const groupRef = useRef()
    const nameRef = useRef()
    const descriptionRef = useRef()
    const valueRef = useRef()


    async function onEditItem(itemId){
        setLoading(true)
        let editedItem = {
            group: groupRef.current.value,
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            value: parseInt(valueRef.current.value),
            id: itemId
        }
        await database
            .doc(itemId)
            .update(editedItem)
        setDisplaytext(`Item ${nameRef.current.value} has been updated.`)
        setLoading(false)
    }


    const options = orderMenu.map(data => (
        <option key={data.id} value={data.id}>{data.name}</option>
    ))


    const editForm = orderMenu.filter(data => data.id === selectedItem).map(data => (
        
        
            <form key={data.id} className="signinForm" onSubmit={(e) => {e.preventDefault()}}>
                <div>
                    <label>Group(case sensitive): </label>
                    <input type="text" ref={groupRef} defaultValue={data.group}></input>
                </div>
                <div>
                    <label>Name: </label>
                    <input type="text" ref={nameRef} defaultValue={data.name}></input>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" ref={descriptionRef} defaultValue={data.description}></input>
                </div>
                <div>
                    <label>Value: </label>
                    <input type="text" ref={valueRef} defaultValue={data.value}></input>
                </div>
                <div>
                    <button disabled={loading} className="signInFormBtn" type="submit" onClick={() => {onEditItem(data.id)}}>Edit Item</button>
                </div>
            </form>
        

    ))



    // console.log(orderMenu)
    // console.log(selectedItem)
    // console.log(editForm)
    

    return (
        <div style={{display: props.display? "none" : "block"}} className="editItemsContainer">
            
            <select onChange={(event) => {setSelectedItem(event.target.value)}}>
                {options}
            </select>

            <h4>{displayText}</h4>

            {editForm}


           

        </div>
    )
}



export default EditItems