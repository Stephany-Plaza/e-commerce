/*import { useContext, useState } from "react"
import CartContext from '../../context/CartContext'
import './Cart.css'
import { Link } from "react-router-dom"
import { useNotificationServices } from '../../services/notification/NotificationServices'
import { addDoc, collection, updateDoc, doc, getDocs, writeBatch, getDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase"
import  ContactForm  from "../ContactForm/ContactForm"




const Cart = () => {
    const { products, getTotal, removeItem, clearCart, client } = useContext(CartContext)
    const [processingOrder, setProcessingOrder] = useState(false)
    const [displayClientForm, setDisplayClientForm] = useState(false)
    const setNotification = useNotificationServices()

    const confirmOder = () => {

        setProcessingOrder(true)

        const objOrder = {
            buyer: {
                ...client
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
                    setNotification('success', `la orden se genero exitosamente, su nro de orden es: ${id}`)
                    clearCart()
                })
            }).catch(error => {
                setNotification('error', error)
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
            {displayClientForm ? <ContactForm/> : <button className="Button" onClick={() => setDisplayClientForm(true)}>Procesar Compra</button> }
            <h1>Total: ${getTotal()} </h1>
        </>
    )
}

export default Cart */
import { useState, useContext, useRef } from 'react'
import './Cart.css'
import Togglable from '../Togglable/Togglable'
import ContactForm from '../ContactForm/ContactForm'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { writeBatch, getDoc, collection, addDoc, Timestamp, where, query, documentId, doc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })
    const { products, clearCart, getTotal, removeItem } = useContext(CartContext)
    
    const contactFormRef = useRef()

    const setNotification = useNotificationServices()

    const confirmOrder = () => {
        if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
            setProcessingOrder(true)
            
            const objOrder = {
                buyer: contact,
                items: products,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(firestoreDb)
            const outOfStock = []
            
            const ids = objOrder.items.map(i => i.id)

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
                        setNotification('success', `la orden se genero exitosamente, su nro de orden es: ${id}`)
                        clearCart()
                    })
                }).catch(error => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
            }

        } else {
             setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }

    if(processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }

    if(products.length === 0) {
        return (
            <div>
                <h1>Cart</h1>
                <h2>No hay productos en el carrito</h2>
            </div>
        )
    }

    return ( 
        <div>
            <h1>Cart</h1>
            { products.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="Button">Cancelar compra</button>
            <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>
            {
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
                
                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Telefono: {contact.phone}</h4>
                        <h4>Direccion: {contact.address}</h4>
                        <h4>Comentario: {contact.comment}</h4>
                        <button onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                                className='Button' 
                                style={{backgroundColor: '#db4025'}}>
                            Borrar datos de contacto
                        </button>
                    </div>    
            }
            <Togglable buttonLabelShow={
                        (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                            ? 'Editar contacto' 
                            : 'Agregar contacto'
                        } 
                        ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
            </Togglable>          
        </div>
    )
}

export default Cart