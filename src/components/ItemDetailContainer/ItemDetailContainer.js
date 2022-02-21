import Items from "../ListItems/Item"
import { useEffect, useState } from "react"

const getItem= ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(Items[0])
        })
    }, 2000)
}


const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        getItem.then(response=>{
            console.log(response)
        })
    })
}



