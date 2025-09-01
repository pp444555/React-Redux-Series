import React from 'react';
import {useSelector} from 'react-redux';
import {getItemsSelector} from '../Redux/slices/cartSlice'

const Cart = () =>{
    const items = useSelector(getItemsSelector)
    const total = items.reduce((a,b) => a+b.price,0);
    console.log(items)
    return(
        <div className = "cart">
            <h2>Total Items: {items.length} - {total}</h2>
        </div>
    )
}

export default Cart