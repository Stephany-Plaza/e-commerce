import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNotificationServices } from '../../services/notification/NotificationServices'
import { getProductById } from '../../services/firebase/firebase'





const ItemDetailContainer = (id) => {
    const [productoLocal, setProductoLocal] = useState([])
    const [loading, setLoading] = useState(true)


    const { productId } = useParams();
    const setNotification = useNotificationServices()

    useEffect(() => {
        setLoading(true)

        getProductById(productId).then(response => {
            setProductoLocal(response)
        }).catch((error) => {
            setNotification('error',`Error buscando producto: ${error}`)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProductoLocal()
        })

    }, [productId]) // eslint-disable-line

    return (
        <>
            <h1>Detalle de un solo producto</h1>
            {loading && productoLocal ? <h1>Loading...</h1> : <ItemDetail products={productoLocal} />}
        </>
    )
}
export default ItemDetailContainer



