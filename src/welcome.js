import React from "react";
import { Link } from "react-router-dom";
import { Age } from "./Age";

export function Welcome({ name, age }){
    return(
        <div className="welcome">
            <h1>Welcome, {name}</h1>
            <Age age={age}/>
            <div className="linkBar">
                <Link to="/counter">Vai al contatore clienti</Link>
                

            </div>
        </div>
    )
}

