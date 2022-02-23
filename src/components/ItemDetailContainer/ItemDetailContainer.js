import Item from "../ItemDetail/ItemDetail"
import { DetalleItem } from "../ItemListContainer/ItemListContainer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Items from "../ItemDetail/ItemDetail"



const ItemDetailContainer = (id)=>{
    const [productoLocal,setProductoLocal]= useState([])
    const params = useParams();


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
export default ItemDetailContainer