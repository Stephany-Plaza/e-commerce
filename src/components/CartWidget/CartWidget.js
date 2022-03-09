import './CartWidget.css'
import { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const [cartView,setCartView] = useState(false)
    const { getQuantity } = useContext(CartContext)
    
    /*if(products>=1){
        setCartView(true)
    }*/
    //{cartView ? {} : null}
    
    return(
        <Link to={'/cart'} className="CartWidget">
            <img src="./images/carrito-logo.png" alt='cart' className='CartImg'/>
            {getQuantity()}
        </Link>
    ) ;
    
}

export default CartWidget


