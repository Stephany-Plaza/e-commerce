import { useContext } from "react"
import CartContext from '../../context/CartContext'
//import setNotification from '../../services/notification'

const Cart = () => {
    const { products, getTotal, removeItem } = useContext(CartContext)
    //const setNotification = useNotificationServices()
    
    if (products.length === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    const handleRemoveItem = (id, name) => {
        removeItem(id)
        //setNotification('success', `Se removio ${name} del carrito`)
    }
   
    return (
        <>
            <h1>Cart</h1>
            {
                products.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex' }}>
                            <h3>{prod.title}</h3>
                            <h3>Cantidad  {prod.quantity}</h3>
                            <button onClick={() => handleRemoveItem(prod.id, prod.title)}>X</button>
                        </div>
                    )
                    })}
            <h1>Total: ${getTotal()}</h1>
        
        </>
    )
}

export default Cart