import React from "react";

export class Welcome extends React.Component{
    render(){
        return <p>Welcome, {this.props.name}</p>
    }
}

// se non viene indicato alcun nome lo spazio sarà vuoto
// è possibile impostare dei valori di default utilizzando:
Welcome.defaultProps = {
    name: "Utente",
}