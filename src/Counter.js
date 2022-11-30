import { useCounter } from './useCounter';

export function Counter ({initialValue = 0  }){
  
  const { counter, handleCounterIncrement} = useCounter(initialValue)

  return (
      <div>
        <h2>Serviamo il numero: {counter}</h2>
        <button onClick={handleCounterIncrement}>Increment</button>
      </div>
    );
}