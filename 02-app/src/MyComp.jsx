import React,{useEffect, useState} from 'react';

const MyComp = () => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    useEffect(()=>{
        console.log("My Comp is Mounting.....")

        return function(){
            console.log("Unmounting.....")
        };

    },[]);

    useEffect(()=>{
        console.log("count got updated",count)

        return function(){
            console.log("Returning count",count);
        }
    },[count]);

    return(
        <div>
            <p>Count is : {count}</p>
            {/* <p>Count2 is : {count2}</p> */}
            <button onClick = {() => setCount(count + 1)}>Update</button>
            {/* <button onClick = {() => setCount2(count2 + 1)}>Update 2</button> */}
        </div>
    )

}

export default MyComp;