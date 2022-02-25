import ItemDetail from "../ItemDetail/ItemDetail"
import { DetalleItem } from "../ListItems/mock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { items } from "../ListItems/mock"




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
            <ItemDetail products={productoLocal}/>
        </>
    )
}
export default ItemDetailContainer