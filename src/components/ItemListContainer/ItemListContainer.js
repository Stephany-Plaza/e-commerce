import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    
    const setNotification = useNotificationServices()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(response => {
            setProductos(response)
        }).catch((error) => {
            setNotification('error', error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProductos()
        })          
    }, [categoryId]) // eslint-disable-line

    return (
        <>
            <h1> {greeting}</h1>
            {loading ? <h1>Loading...</h1> : <ItemList items={productos} />}
        </>
    )
}
export default ItemListContainer






