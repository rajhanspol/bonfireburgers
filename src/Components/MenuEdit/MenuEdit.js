import React, { useState } from "react"
import AddItems from "./AddItems"
import EditItems from "./EditItems"


function MenuEdit(){

   const [toggleDisplay, setToggleDisplay] = useState(true)

    return(
        <div className="menuEditContainer">
            <div className="navBtn">
                <button onClick={() => {setToggleDisplay(true)}}>Add Item</button>
                <button onClick={() => {setToggleDisplay(false)}}>Edit Item</button>
            </div>
            <AddItems 
                display={toggleDisplay}
            />

            <EditItems 
                display={toggleDisplay}
            />

        </div>
    )
}

export default MenuEdit