import React from "react";

export class TodoList extends React.Component {
  state = {
    items: [
      "Trova il castello del drago",
      "Sconfiggi la principessa",
      "Salva e sposa il drago",
    ],
  }

  handleInputAdd = (event) => {
    event.preventDefault()
    this.setState({
        items:[...this.state.items, this.state.input]
    })
  };

  handleInputSave = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  

  render() {
    return (
      <div>
        <p>Buoni propositi del Gran Cavaliere</p>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index + 1}>{item}</li>
          ))}
          <br/>
          
        </ul>
        <input onChange={this.handleInputSave}></input>
        <button onClick={this.state.input !== "" ? this.handleInputAdd : false}>Add to list</button>
      </div>
    );
  }
}