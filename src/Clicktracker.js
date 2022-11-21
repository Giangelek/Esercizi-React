import React from "react";

export class ClickTracker extends React.Component{
    state = {
        click: "",
    }

    handleClick = (event) => {
        this.setState({click: event.target.innerHTML})
    }

    render(){
        return(
            <div>
                <h1>Prossima rotta, Capitano?</h1>
                <button onClick={this.handleClick}>Vulcano</button>
                <button onClick={this.handleClick}>Qo'noS</button>
                <button onClick={this.handleClick}>Romulus</button>
                <h3>Guardiamarina Crusher ci porti su {this.state.click} !</h3>
            </div>
        )
    }
}