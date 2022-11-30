import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Age } from "./Age";

export function Welcome({ name, age }){
    const navigate = useNavigate()
    function handleDatabaseButtonClick(event){
        const {value} = event.target
        navigate(value)
    }
    return(
        <div className="welcome">
            <h1>Welcome, {name}</h1>
            <Age age={age}/>
            <div className="linkBar">
                <Link to="/counter">Vai al contatore clienti</Link>
                <button onClick={handleDatabaseButtonClick} value="users/giangelek">Vai al database ricercati</button>

            </div>
        </div>
    )
}

