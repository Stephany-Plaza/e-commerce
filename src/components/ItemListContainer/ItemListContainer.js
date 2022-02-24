import FunctionCounter from "../counter/ItemCounter"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import Item from "../ItemDetail/ItemDetail"
import { getItems , getItemsbyCategory} from "../ListItems/Item"
import { useParams } from "react-router-dom"




const ItemListContainer = ({ greeting }) => {

    const [items,setItems]=useState([])
    const [productos,setProductos]= useState([])
    const {categoryId} = useParams();
    
   console.log(categoryId)

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
        })
    },[categoryId])
    //console.log(productos)
    //console.log(Items)
    return (
        <>
            <h1> {greeting}</h1>
            <ItemList items={items}/>
            <h1>{greeting='Detalle de los productos locales'}</h1>
            <ItemList items={productos} />
        </>
    )
}
export default ItemListContainer






