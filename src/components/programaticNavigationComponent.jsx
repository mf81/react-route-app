import React, { Component } from "react";

class ProgNav extends Component {
  state = {};

  handleClick = () => {
    this.props.history.push("/news");
  };
  handleClick2 = () => {
    this.props.history.replace("/news");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Buttons:</h1>
        <button onClick={this.handleClick}>Push to News with history</button>
        <p>After render News not back to priv site but back to site before</p>
        <button onClick={this.handleClick2}>Push to Nes withOUT history</button>
      </React.Fragment>
    );
  }
}

export default ProgNav;
