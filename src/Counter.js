import { useEffect, useState } from 'react'

export function Counter ({initialValue = 0  }){
  
  const [counter, setCounter]  = useState(initialValue); 
  
  useEffect(() => {
    console.log('Il contatore è stato caricato')
    
    return() => {
      console.log('il contatore è stato eliminato')
    }
  },[])

  useEffect(() => {
    console.log(`attualmente il numero è ${counter}` )
  }, [counter] )

  function handleCounterIncrement() {
      setCounter((c) => c + 1 ) 
  }

  return (
      <div>
        <h2>Serviamo il numero: {counter}</h2>
        <button onClick={handleCounterIncrement}>Increment</button>
      </div>
    );
}