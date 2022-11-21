import React from "react";

export class ClickCounter extends React.Component{
    state = {
        count: 0,
    }

    counterIncrement(){
        this.setState({count: this.state.count + 1})
    }

    render(){
        return(
            <div>
                <h1>Aiuta il Capitano Picard a distruggere le navi Romulane:</h1>
                <button onClick={this.counterIncrement.bind(this)}>     
                    Ordina di armare e sparare con i phasers
                </button>
                <h3>Navi distrutte: {this.state.count}</h3>

            </div>
        )
    }
}