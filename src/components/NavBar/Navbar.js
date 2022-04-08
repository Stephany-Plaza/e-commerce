import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { getDocs, collection } from 'firebase/firestore'
import { getCategories } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const Navbar = () => {
    const [categories, setCategories] = useState([])
    const { products } = useContext(CartContext)

    const setNotification = useNotificationServices()

    useEffect(() => {
        getCategories(categories).then(response =>{
            setCategories(response)
        }).catch((error) => {
            setNotification('error', error)
        })}, [])
    
    /*
    getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(category => {
                return { id: category.id, ...category.data() }
            })
            setCategories(categories)
        })
    }, [])
    */ 
    return (
        <>
            <nav className='NavBar'>
                <div>
                    <h3>
                        <NavLink to={'/'} className={({ isActive }) =>
                            isActive ? 'ActiveOption' : 'Option'}>Shoes Store</NavLink>
                    </h3>
                </div>
                <div className='Categories'>
                    {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'
                    }>{cat.description}</NavLink>)}
                </div>
                {products.length > 0 && <CartWidget />}
            </nav>
        </>
    )
}

export default Navbar
