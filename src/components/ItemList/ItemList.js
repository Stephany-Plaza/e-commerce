
import Items from '../ListItems/Item'

//simulacion de llamada a API
const ItemList=({items})=>{
    return(
    <ul>
        {items.map(item => {
            return <li key={item.id}>{item.title} </li>//se le pasa una key para que react reconozca cada uno
        })}
    </ul>
    )
}

export default ItemList

