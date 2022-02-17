import Items from "../ListItems/Item"
//simulacion de llamada a API
const ItemList=()=>{
    return(
    <ul>
        {Items.map(item => {
            return <li key={item.id}>{item.name} </li>//se le pasa una key para que react reconozca cada uno
        })}
    </ul>
    )
}

export default ItemList