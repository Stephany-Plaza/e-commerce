import './ItemList.css'
import Item from '../Item/Item'

//simulacion de llamada a API
const ItemList=({items})=>{
    return(
    <ul className='ListGroup'>
        {items.map(item => {
            return <div key={item.id}><Item product={item}/></div>//se le pasa una key para que react reconozca cada uno
        })}
    </ul>
    )
}

export default ItemList

