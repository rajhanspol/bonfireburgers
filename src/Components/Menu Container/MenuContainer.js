import { useContext } from 'react'
import {Context} from '../../Context/Context'
import ItemContent from './ItemContent/ItemContent'
import ItemHeader from './ItemHeader/ItemHeader'

function MenuContainer(){

    const ctx = useContext(Context)

    // Following loops are done because of the way menu data is stored in firebase.

    // First get the different Menu Groups, and then add corresponding items to them. eg. Wings is the Group name, and Classic Chicken Wings is a dish that should be placed in wings.

    let menuHeaderArr = []
    let menuArr = []


    // Get all unique MENU GROUPS using nested for loops, then use if statement to avoid duplicates
    for(let i = 0; i < ctx.orderMenu.length; i++){
        for(let j=0; j < ctx.orderMenu.length; j++){
            if(ctx.orderMenu[i].group === ctx.orderMenu[j].group){
                if(!menuHeaderArr.includes(ctx.orderMenu[i].group)){
                    menuHeaderArr.push(ctx.orderMenu[i].group)
                }    
            }
        }
    }


    // Prepare menu array with group name and corresponding items
    for(let i=0; i< menuHeaderArr.length; i++){
        menuArr.push({group_name: menuHeaderArr[i], items: []})
    }


    // Push all menu items to corresponding group names
    for(let i=0; i < menuArr.length; i++){
        for(let j=0; j< ctx.orderMenu.length; j++){
            if(menuArr[i].group_name === ctx.orderMenu[j].group){
                menuArr[i].items.push(ctx.orderMenu[j])
            }
        }
    }


    const menuList = menuArr.map(item => (
        <ItemHeader key={item.group_name} title={item.group_name} content={item.items}>
            {item.items.map(data => (
                <ItemContent 
                    key={data.name}
                    name={data.name}
                    price={data.value}
                    description={data.description}
                />
            ))}
        </ItemHeader>
    ))



    return (
        <div className="menuContainer">
            {menuList}
        </div>
    )
}

export default MenuContainer