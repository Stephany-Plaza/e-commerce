import './CartWidget.css'
const CartWidget = ({height,width})=>{
    return(
        <div className='contenedor-carrito'>
    <img className='imagen-carrito' src="./images/carrito-logo.png"></img>
    <p className='cantidad'>5</p>
    </div>
    )
}
export default CartWidget