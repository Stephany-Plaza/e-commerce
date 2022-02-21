import FunctionCounter from "../counter/ItemCounter"
import { useEffect, useState } from "react"
import Items from "../ListItems/Item"
import ItemList from "../ItemList/ItemList"



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
            console.log(res.results)
        })
    }, [])

    //console.log(Items)
    return (
        <>
            <h1> {greeting}</h1>
            <ItemList Items={items}/>
            <h1>{greeting='Lista de productos desde ItemList'}</h1>
           
        </>
    )
}
export default ItemListContainer