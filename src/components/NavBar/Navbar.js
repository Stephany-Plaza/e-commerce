import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ()=>{
    return(
        <>
        <nav>
            <h1 className="h1">Bienvenidos al tecnoStore</h1>
            <ul className="nav">
            <div className="img"><img src={"./images/logo192.png"} alt='logo' /></div>
            <li className="navLi"><a href="#">Tacos clase A</a></li>
                <li className="navLi"><a href="#">Tacos Clasicos</a></li>
                <li className="navLi"><a href="#">Camisetas</a></li>
                <li className="navLi"><a href="#">Espinilleras</a></li>
            </ul>
            <CartWidget />
        </nav>
        </>
    )
}
export default Navbar
