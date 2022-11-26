import React from "react";

export class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container_titolo">{this.props.title}</div>
        <div className="container_contenuto">{this.props.children}</div>
      </div>
    );
  }
}
