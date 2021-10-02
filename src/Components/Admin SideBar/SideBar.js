function SideBar(props){

    function showOrderPage(){
        props.displayOrderPage(true)
        props.displayMenuPage(false)
        // props.displayextraCharge(false)
    }

    function showMenuPage(){
        props.displayOrderPage(false)
        props.displayMenuPage(true)
        // props.displayextraCharge(false)
    }

    // function showExtraCharges(){
    //     props.displayOrderPage(false)
    //     props.displayMenuPage(false)
    //     props.displayextraCharge(true)        
    // }

    return (
        <div className="sideBar">
            <button className="ordrBtn" onClick={showOrderPage}>Orders</button>
            <button onClick={showMenuPage}>Menu</button>
            {/* <button onClick={showExtraCharges}>Extra Charges</button> */}
        </div>
    )
}

export default SideBar