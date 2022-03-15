import { useContext, useState } from "react"
import CartContext from '../../context/CartContext'
import './Cart.css'
import { Link } from "react-router-dom"
import { useNotificationServices } from '../../services/notification/NotificationServices'
import { addDoc, collection, updateDoc, doc, getDocs, writeBatch, getDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase"


const Cart = () => {
    const { products, getTotal, removeItem, clearCart } = useContext(CartContext)
    const [processingOrder, setProcessingOrder] = useState(false)
    const setNotification = useNotificationServices()

    const confirmOder = () => {

        setProcessingOrder(true)

        const objOrder = {
            buyer: {
                name: 'Stephany',
                phone: '1582369',
                addres: 'my addres 123'
            },
            items: products,
            total: getTotal(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = [];

        objOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb, 'items', prod.id)).then(response => {
                if (response.data().stock >= prod.quantity) {
                    batch.update(doc(firestoreDb, 'items', response.id), {
                        stock: response.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({ id: response.id, ...response.data() })
                }
            })
        })

        if (outOfStock.length === 0) {
            addDoc(collection(firestoreDb, 'orders'), objOrder).then(({ id }) => {
                batch.commit().then(() => {
                    setNotification('success',`la orden se genero exitosamente, su nro de orden es: ${id}`)
                    //alert(`la orden se ha ejecutado correctamente, su nro de orden es: ${id}`)
                    //console.log(`la orden se ha ejecutado correctamente, su nro de orden es: ${id}`)
                    clearCart()
                })
            }).catch(error => {
                setNotification('error', error)
                //console.log('error')
            }).finally(() => {
                setProcessingOrder(false)
            })
        } else {

        }
    }


    if (processingOrder === true) {
        return <h1>Se esta procesando su orden</h1>
    }


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
        setNotification('success', `Se removio ${name} del carrito`)
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
            <button className="Button" onClick={() => clearCart()}>Cancelar Compra</button>
            <button className="Button" onClick={() => confirmOder()}>Confirmar Compra</button>
            <h1>Total: ${getTotal()} </h1>
        </>
    )
}

export default Cart 