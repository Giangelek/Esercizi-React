import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state = {
        inputField: ''
    }

    handleInputChange = (event) => {
        const value = event.target.value

        this.setState({inputField : value, })
    }


    render(){
        return(
            <div>
                <h3>Per accedere alla sala macchine è necessaria l'identificazione!</h3>
                <label>Computer qui parla:</label><input name="inputField" value={this.state.inputField} onChange={this.handleInputChange} />
                <Welcome name={this.state.inputField} />
            </div>
        )
    }
}