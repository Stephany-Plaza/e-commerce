import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { DetalleItem } from "../ListItems/mock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"





const ItemDetailContainer = (id)=>{
    const [productoLocal,setProductoLocal]= useState([])
    const [loading,setLoading] = useState(true)
    const {productId} = useParams();


    useEffect(()=>{
        DetalleItem(productId).then(r=>{
            setProductoLocal(r)
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })
        return (()=>{
            setProductoLocal()
        })
    },[productId])
    //console.log(productos)
    //console.log(params)
    return (
        <>
            <h1>Detalle de un solo producto</h1>
            {loading && productoLocal? <h1>Loading...</h1> : <ItemDetail products={productoLocal}/>}
        </>
    )
}
export default ItemDetailContainer