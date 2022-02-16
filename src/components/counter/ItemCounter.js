import { useState } from "react";

const FunctionCounter=({stock})=>{
    const [count, setCount]= useState(0); //useState devuelve un array de una estado y una funcion, asi que hay que desestructurarlo[state,setState]

    const decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
        
    }
    const increment=()=>{
        if(count===stock){
            return false
        }
            setCount(count+1);
        
    }
    const buyBotton=()=>{
        alert('gracias por su compra');
    }
    return(
        <>
        <h3>Counter</h3>
        <h3>{count}</h3>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={buyBotton}>Agregar al Carrito</button>
        </>
    )
}
export default FunctionCounter
