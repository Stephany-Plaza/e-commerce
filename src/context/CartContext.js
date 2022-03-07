import { createContext,useState } from "react";
import Item from "../components/Item/Item";

//creamos el context(con su referencia)
const Context = createContext()

//ahora el custom provider que es el que envuelve a los hijos
export const CartContextProvider=({children})=>{
    const[cart,setCart]=useState([])

    const addItem =(productToAdd,quantity)=>{
        const newObj = {
            productToAdd,
            quantity
        }
            //actualizar el producto con la cantidad nueva, logica de producto repetido
            let itemInCart = cart.find((cartItem)=>cartItem.id===productToAdd.id);

            if(!itemInCart) return setCart([...cart,{...productToAdd,quantity}]);

            itemInCart.quantity += quantity;
            setCart([
                ...cart.filter((cartItem)=> cartItem.id !== productToAdd.id),
                itemInCart,
            ]);
        }

    const removeItem=()=>{
        //para eliminar un item
    }
    const isInCart=(id)=>{
        return cart.some( p=> p.id===id )
    }


    console.log(cart)
    return (
        <Context.Provider value={{
            cart,
            addItem,
            removeItem
        }}>
            {children}
            </Context.Provider>

    )
}
export default Context

