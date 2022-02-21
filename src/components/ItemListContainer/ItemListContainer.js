import FunctionCounter from "../counter/ItemCounter"
import { useEffect, useState } from "react"
import Items from "../ListItems/Item"
import ItemList from "../ItemList/ItemList"
import Item from "../ItemDetail/ItemDetail"


//simulacion de llamada a API
const getItems= ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(Items)
        })
    }, 2000)
}


const ItemListContainer = ({ greeting }) => {

    const [items,setItems]=useState([])

    //useEfect es para ejecutar el codigo que tiene adentro despues del return
    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=tacosdefutbol')
        .then(response=>{
           return response.json()
        }) .then(res=>{
            setItems(res.results)
        })
    }, [])

    //console.log(Items)
    return (
        <>
            <h1> {greeting}</h1>
            <ItemList items={items}/>
            <h1>{greeting='Detalle de un solo producto'}</h1>
            <Item Items={items} />
        </>
    )
}
export default ItemListContainer