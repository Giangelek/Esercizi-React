import React from "react";

export class Welcome extends React.Component{
    render(){
        return (
        <div>
            <p>Welcome, {this.props.name}</p>
            <p>Your age is {this.props.age}</p>
        </div>
        )
    }
}

// se non viene indicato alcun nome lo spazio sarà vuoto
// è possibile impostare dei valori di default utilizzando:
Welcome.defaultProps = {
    name: "Utente",
}