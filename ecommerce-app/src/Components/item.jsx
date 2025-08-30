import React, { useContext } from 'react';
import { useCart } from '../context/cart'
const Item = (props) => {
    const cart = useCart();
    console.log(cart);
    return (
        <div className="item-card">
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <button onClick={() => cart.setItems([...cart.items, { name: props.name, price: props.price },])}>Add to Card</button>
        </div>
    )
}

export default Item;