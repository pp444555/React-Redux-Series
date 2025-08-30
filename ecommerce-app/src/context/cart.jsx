import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

export const useCart = () =>{
    const cart = useContext(CartContext);
    return cart;
}

export const Cartprovider = (props) =>{
    const [items,setItems] = useState([]);
    return (
        <CartContext.Provider value = {{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}
