import { createContext, useState } from "react";



const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [client, setClient] = useState({})

    const registerClient = (newClient) => {
        setClient(newClient)
    }

    const addItem = (items, quantity) => {

        let itemInCart = products.find((cartItem) => cartItem.id === items.id);

        if (!itemInCart) return setProducts([...products, { ...items, quantity }]);

        /*if(itemInCart.quantity+quantity>itemInCart.stock){
            return setProducts([...products]);
        }*/

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

    return (
        <Context.Provider value={{
            products,
            client,
            registerClient,
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



