import { useState } from "react"

export function useCounter(initialValue = 0){
    const [counter, setCounter] = useState(initialValue)
    
    function handleCounterIncrement() {
      setCounter((c) => c + 1 ) 
    }
  
    return {
      counter: counter,
      handleCounterIncrement: handleCounterIncrement,
    }
  
  }