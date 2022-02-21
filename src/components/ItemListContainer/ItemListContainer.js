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
    const [productos,setProductos]= useState([])
    
   

    //useEfect es para ejecutar el codigo que tiene adentro despues del return
    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=tacosdefutbol')
        .then(response=>{
           return response.json()
        }) .then(res=>{
            setItems(res.results)
        })
    }, [])

    useEffect(()=>{
        getItems().then(response=>{
            return setProductos(response)
        })
    },[])
    //console.log(productos)
    //console.log(Items)
    return (
        <>
            <h1> {greeting}</h1>
            <ItemList items={items}/>
            <h1>{greeting='Detalle de los productos locales'}</h1>
            <ItemList items={productos} />
            <ItemDetailContainer />
        </>
    )
}
export default ItemListContainer

const DetalleItem= ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(Items[0])
        })
    }, 2000)
}

const ItemDetailContainer = ()=>{
    const [productoLocal,setProductoLocal]= useState([])
    useEffect(()=>{
        DetalleItem().then(r=>{
            return setProductoLocal(r)
        })
    },[])
    //console.log(productos)
    //console.log(Items)
    return (
        <>
            <h1>'Detalle de un solo producto'</h1>
            <Item products={productoLocal}/>
    
        </>
    )
}


