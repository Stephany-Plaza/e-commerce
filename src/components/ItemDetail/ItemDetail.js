import './Item.css'
import { Link } from 'react-router-dom'
import ItemCounter from '../counter/ItemCounter'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";



const ItemDetail = ({ products }) => {
    const [cartButton, setCartButton] = useState(false);
    const navigate = useNavigate()

    const onAdd = (quantity) => {
        alert(`gracias por su compra de ${quantity} `);
        setCartButton(true)
    }
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {products.title}
                </h2>
            </header>
            <picture>
                <img src={products.thumbnail} alt={products.title} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${products.price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {cartButton ? <button onClick={() => { navigate('/cart') }}>Ir al carrito</button> : <ItemCounter stock={products.stock} onAdd={onAdd} />}
            </footer>
        </article>
    )
}

export default ItemDetail
