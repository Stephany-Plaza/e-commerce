import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/firebase"





const ItemDetailContainer = (id) => {
    const [productoLocal, setProductoLocal] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams();


    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDb, 'items', productId)
        getDoc(docRef).then((response) => {
            const product = { id: response.id, ...response.data() }
            setProductoLocal(product)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProductoLocal()
        })
    }, [productId])

    return (
        <>
            <h1>Detalle de un solo producto</h1>
            {loading && productoLocal ? <h1>Loading...</h1> : <ItemDetail products={productoLocal} />}
        </>
    )
}
export default ItemDetailContainer



