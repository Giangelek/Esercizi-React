import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(){
    const [count, setCount] = useState(0)

    useEffect(() => handleCounterChange, [count])
    
    function handleCounterChange(){setInterval(() =>{
        setCount({count: count + this.props.increment})
    },1000 ) }   
    
    
    return(
            <CounterDisplay count={count} />
        )    
    
}