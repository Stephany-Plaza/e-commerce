import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='NavBar'>
                <div><h3>
                    <NavLink to={'/'} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'}>Shoes Store</NavLink></h3></div>
                <div className='Categories'>
                    <NavLink to={'/category/claseA'} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'}>Tacos Clase A</NavLink>
                    <NavLink to={'/category/clasicos'} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'}>Tacos Clasicos</NavLink>
                    <NavLink to={'/category/camiseta'} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'}>Camisetas</NavLink>
                    <NavLink to={'/category/espinilleras'} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'}>Espinilleras</NavLink>
                </div>
                <CartWidget />
            </nav>
        </>
    )
}
export default Navbar
