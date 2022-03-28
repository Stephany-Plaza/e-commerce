import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({ items }) => {
    return (
        <ul className='ListGroup'>
            {items.map(item => {
                return <div key={item.id}><Item product={item} /></div>
            })}
        </ul>
    )
}

export default ItemList

