import { createContext, useState } from "react";


//creamos el context(con su referencia)
const Context = createContext()

//ahora el custom provider que es el que envuelve a los hijos
export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    console.log(products)

    const addItem = (items, quantity) => {
        /*const newObj = {
            items,
            quantity
        }*/
        //actualizar el producto con la cantidad nueva, logica de producto repetido
        let itemInCart = products.find((cartItem) => cartItem.id === items.id);

        if (!itemInCart) return setProducts([...products, { ...items, quantity }]);//que pasa aqui?

        itemInCart.quantity += quantity;
        setProducts([
            ...products.filter((cartItem) => cartItem.id !== items.id),
            itemInCart,
        ]);
    }

    const removeItem = (id) => {
        const newProducts = products.filter(prod => prod.id !== id)
        setProducts(newProducts)
    }

    const clearCart = () => {
        setProducts([])
    }

    const getTotal = () => {
        let total = 0
        products.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    }

    const getQuantity = () => {
        let count = 0
        products.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }
    /*const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }*/



    return (
        <Context.Provider value={{
            products,
            addItem,
            removeItem,
            clearCart,
            getQuantity,
            getTotal
        }}>
            {children}
        </Context.Provider>
    )
}
export default Context



