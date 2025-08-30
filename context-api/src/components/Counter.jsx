import React,{useContext} from 'react';
import {counterContext} from '../context/Counter';

const Counter = () =>{
  const Context = useContext(counterContext);
    return(
       <div>
         <button onClick = {() => Context.setCount(Context.count + 1)}>Increment</button>
        <button onClick = {() => Context.setCount(Context.count - 1)}>Increment</button>
       </div>

    )
}

export default Counter