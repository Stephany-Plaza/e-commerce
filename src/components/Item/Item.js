import './Item.css'
import { Link } from 'react-router-dom'
import { useState , useEffect,useContext} from 'react'
import CartContext from '../../context/CartContext';


const Item = ({ product }) => {

    const [stockValidation , setStockValidation] = useState(true);
    const { products } = useContext(CartContext)
    useEffect(()=>{
        let itemInCart = products.find((cartItem) => cartItem.id === product.id);
        if(itemInCart){
            if(product?.stock - itemInCart.quantity <= 0){
                setStockValidation(false);
            }
        }
        if(product?.stock <= 0){
            setStockValidation(false);
        }
    })
    

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product?.title}
                </h2>
            </header>
            <picture>
                <img src={product?.thumbnail} alt={product?.title} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${product?.price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {stockValidation? <Link to={`/detail/${product.id}`}>Ver Detalles</Link>:<h3 className='warningText'>Fuera de Stock</h3>}

            </footer>
        </article>
    )
}

export default Item