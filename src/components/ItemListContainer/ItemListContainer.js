import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, QuerySnapshot, query, where } from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase"




const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();


    useEffect(() => {
        const collectionRef = categoryId ?
            query(collection(firestoreDb, 'items'), where('category', '==', categoryId)) :
            collection(firestoreDb, 'items');


        getDocs(collectionRef).then(QuerySnapshot => {
            const products = QuerySnapshot.docs.map(doc => {
                console.log(doc)
                return { id: doc.id, ...doc.data() }
            })
            console.log(products)
            setProductos(products)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])
  
    return (
        <>
            <h1> {greeting}</h1>
            {loading ? <h1>Loading...</h1> : <ItemList items={productos} />}
        </>
    )
}
export default ItemListContainer






