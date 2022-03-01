import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getCategories } from '../ListItems/mock'

const Navbar = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        getCategories().then(categories=>{
            setCategories(categories)
        })
    },[])

    return (
        <>
            <nav className='NavBar'>
                <div><h3>
                    <NavLink to={'/'} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'}>Shoes Store</NavLink></h3></div>
                <div className='Categories'>
                    {categories.map(cat=> <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
                     isActive ? 'ActiveOption' : 'Option'
                     }>{cat.description}</NavLink>)}
                    {/*<NavLink to={'/category/claseA'} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'}>Tacos Clase A</NavLink>
                    <NavLink to={'/category/clasicos'} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'}>Tacos Clasicos</NavLink>
                    <NavLink to={'/category/camiseta'} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'}>Camisetas</NavLink>
                    <NavLink to={'/category/espinilleras'} className={({ isActive }) =>
                    isActive ? 'ActiveOption' : 'Option'}>Espinilleras</NavLink>*/}
                </div>
                <CartWidget />
            </nav>
        </>
    )
}
export default Navbar
