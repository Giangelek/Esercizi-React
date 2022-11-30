import React from "react";

import { Age } from "./Age";

export function Welcome({ name, age }){
    
    return(
        <div className="welcome">
            <h1>Welcome, {name}</h1>
            {age && <Age age={age}/>}
            
        </div>
    )
}

