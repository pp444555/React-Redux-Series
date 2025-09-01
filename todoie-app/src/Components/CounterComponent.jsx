import React, {useState} from 'react';

const CounterComponenet = () =>{
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("");

    const checkNumber = (count)=>{
        if(count % 2 == 0){
            setValue('Even')
        }
        else{
            setValue("Odd")
        }

    }

    return(
    <div>
    <p>Count component - {count}</p>
    <h6>value is {value}</h6>
    <h2>Number is {count % 2 === 0 ? "even" : "odd"}</h2>
    <button onClick = { ()=> checkNumber(count)}>Check Value</button>
    <button onClick = { ()=> setCount(count+1)}>Increment</button>
    <button onClick = { ()=> setCount(count-1)}>decrement</button>
    </div>
    )
}

export default CounterComponenet