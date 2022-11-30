import { useCounter } from './useCounter';

export function Counter ({initialValue = 0  }){
  
  const { counter, onIncrement} = useCounter(initialValue)

  return (
      <div>
        <h2>Serviamo il numero: {counter}</h2>
        <button onClick={onIncrement}>Increment</button>
      </div>
    );
}