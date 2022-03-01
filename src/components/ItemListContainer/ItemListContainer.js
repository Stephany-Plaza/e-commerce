import ItemCounter from "../counter/ItemCounter"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getItems} from '../ListItems/mock'
import { useParams } from "react-router-dom"




const ItemListContainer = ({ greeting }) => {

    const [items,setItems]=useState([])
    const [productos,setProductos]= useState([])
    const [loading,setLoading]=useState(true)
    const {categoryId} = useParams();
    
   

    //useEfect es para ejecutar el codigo que tiene adentro despues del return
    /*useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=tacosdefutbol')
        .then(response=>{
           return response.json()
        }) .then(res=>{
            setItems(res.results)
        })
    }, [])*/

    useEffect(()=>{
        getItems(categoryId).then(response=>{
            return setProductos(response)
        }).finally(()=>{
            setLoading(false)
        })
    },[categoryId])
    //console.log(productos)
    //console.log(Items)
    return (
        <>
            <h1> {greeting}</h1>
            {/* <ItemList items={items}/> */}
            {loading?<h1>Loading...</h1>:<ItemList items={productos} />}
        </>
    )
}
export default ItemListContainer






