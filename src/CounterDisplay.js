import React from "react";

export class CounterDisplay extends React.Component {
  render() {
    return <h1>Serviamo il cliente numero: {this.props.count}</h1>;
  }
}