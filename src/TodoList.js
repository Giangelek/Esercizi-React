import React from "react";

export class TodoList extends React.Component {
  state = {
    items: [
      "Trova il castello del drago",
      "Sconfiggi la principessa",
      "Salva e sposa il drago",
    ],
    input:"",
  }

  handleInputAdd = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.input],
      input: "",
    });
  };


  handleInputSave = (event) => {
    event.preventDefault();
    this.setState({
      input: event.target.value,
    });
  };

  handleReset = (event) => {
    event.preventDefault();
    this.setState({
      items: []
    })
  }

  handleRemove(index) {
    let items = this.state.items;
    items.splice(index, 1);
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <p>Buoni propositi del Gran Cavaliere</p>
        {this.props.render(this.state.items, this.handleInputAdd)}
        <br/>
        <input value={this.state.input} onChange={this.handleInputSave}></input>
        <button onClick={this.state.input !== "" ? this.handleInputAdd : false}>Add to list</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}