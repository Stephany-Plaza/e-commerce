import './Item.css'
import ItemCounter from '../counter/ItemCounter'
import { useState, useContext, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import CartContext from '../../context/CartContext'
import { items } from '../ListItems/mock';



const ItemDetail = ({ products }) => {
    const [cartButton, setCartButton] = useState(false);
    const navigate = useNavigate()
    const[quantity,setQuantity]=useState(0)

    const {addItem}=useContext(CartContext)
    

    const onAdd = (quantity) => {
        setQuantity(quantity)

        const productToAdd=[
            products.id,
            products.title,
            products.price,
            products.category,
            quantity
        ]
        addItem(products,quantity)
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
                {cartButton ? <button onClick={() => { navigate('/cart') }}>Terminar mi compra</button> : <ItemCounter stock={products.stock} onAdd={onAdd} initial={1} />}
            </footer>
        </article>
    )
}

export default ItemDetail
