import { useEffect, useState } from "react";

const ItemCounter = ({ stock, initial=1 }) => {
    const [count, setCount] = useState(initial); //useState devuelve un array de una estado y una funcion, asi que hay que desestructurarlo[state,setState]


    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }

    }
    const increment = () => {
        if (count === stock) {
            return false
        }
        setCount(count + 1);

    }
    const onAdd = () => {
        alert(`gracias por su compra de ${count}`);//esta funcion va afuera de este componente.
    }
    return (
        <>
            <h3>Counter</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </>
    )
}
export default ItemCounter
