import './Item.css'
import { Link } from 'react-router-dom'
import { items } from '../ListItems/mock'

const Item = ({product}) => {
   
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product?.title}
                </h2>
            </header>
            <picture>
                <img src={product?.thumbnail} alt={product?.title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${product?.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${product.id}`}>Ver Detalles</Link>
                
            </footer>
        </article>
    )
}

export default Item