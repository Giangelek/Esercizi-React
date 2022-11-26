import React from "react";

export class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <divm className="container_titolo">{this.props.title}</divm>
        <div className="container_contenuto">{this.props.children}</div>
      </div>
    );
  }
}
