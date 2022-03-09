import { useContext, useState } from "react"
import CartContext from '../../context/CartContext'
import './Cart.css'
import { Link} from "react-router-dom"
//import setNotification from '../../services/notification'

const Cart = () => {
    const { products, getTotal, removeItem } = useContext(CartContext)
    //const setNotification = useNotificationServices()
    

    /*return(
        <Link to={'/cart'} className="CartWidget">
            <img src="./images/carrito-logo.png" alt='cart' className='CartImg'/>
            {getQuantity()}
        </Link>
    )*/

    if (products.length === 0) {
        return (
            <>
            <h1>No hay productos en el carrito</h1>
            <Link to={'/'}>
                <button>Volver a la lista de Productos</button>
            </Link>
            </>
        )
    }


    const handleRemoveItem = (id, name) => {
        removeItem(id)
        //setNotification('success', `Se removio ${name} del carrito`)
    }

    return (
        <>

            <h1>Carrito de Compras</h1>
            {
                products.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex', margin: '20px', border: '2px solid springgreen', padding: '5px' }}>
                            <h3 className="titleofproduct">{prod.title}</h3>
                            <picture>
                                <img src={prod.thumbnail} alt={prod.title} className="ItemImg" />
                            </picture>
                            <h3>Cantidad:  {prod.quantity}</h3>
                            <button className="Button" onClick={() => handleRemoveItem(prod.id, prod.title)}>X</button>
                        </div>
                    )
                })}
            <h1>Total: ${getTotal()}</h1>
        </>
    )
}

export default Cart