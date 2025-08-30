import React from 'react';
import {useCart} from '../context/cart';
const Cart = () =>{
    const cart = useCart();
    const total = cart.items.reduce((sum, item) => {
  return sum + Number(item.price || 0); // ensure number, handle missing values
}, 0);

    return(
        <div className="cart">
            <h1>Cart</h1>
                {
                    cart && cart.items.map((item) => <li>{item.name} - ${item.price}</li>)
                }     
            <h5>Total Bill: ${total}</h5>
        </div>
    )
}

export default Cart;