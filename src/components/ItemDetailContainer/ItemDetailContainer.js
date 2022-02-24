import Item from "../ItemDetail/ItemDetail"
import { DetalleItem } from "../ListItems/Item"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Items } from "../ListItems/Item"




const ItemDetailContainer = (id)=>{
    const [productoLocal,setProductoLocal]= useState([])
    const {productId} = useParams();


    useEffect(()=>{
        DetalleItem(productId).then(r=>{
            return setProductoLocal(r)
        })
    },[productId])
    //console.log(productos)
    //console.log(params)
    return (
        <>
            <h1>'Detalle de un solo producto'</h1>
            <Item products={productoLocal}/>
        </>
    )
}
export default ItemDetailContainer