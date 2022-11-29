import React from "react";
import{useState} from "react";

export function ClickCounter({initialValue}){
    const [count, setCounter] = useState(initialValue)


    function counterIncrement(){
        setCounter(count + 1)
    }

    return(
            <div>
                <h1>Aiuta il Capitano Picard a distruggere le navi Romulane:</h1>
                <button onClick={counterIncrement}>     
                    Ordina di armare e sparare con i phasers
                </button>
                <h3>Navi distrutte: {count}</h3>

            </div>
    )
        
    
}