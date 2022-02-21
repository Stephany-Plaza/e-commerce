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
        getItems().then(items=>{
            console.log(items)
            setItems(items)
        })
    }, [])

    console.log(Items)
    return (
        <>
            <h1> {greeting}</h1>
            <FunctionCounter stock={9} />
            <ItemList items={items}/>
        </>
    )
}
export default ItemListContainer