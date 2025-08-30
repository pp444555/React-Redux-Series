import { createContext, useState } from "react";

export const counterContext = createContext(null);

export const CounterProvider = (props) => {
    const [count,setCount] = useState(5);
    return (
        <counterContext.Provider value={{count,setCount}}>
            {props.children}
        </counterContext.Provider>
    )
}