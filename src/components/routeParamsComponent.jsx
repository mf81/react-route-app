import React, { Component } from "react";

class RouteParams extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Route params </h1>
        <p>ID: {this.props.match.params.id}</p>
        <p>IDD: {this.props.match.params.idd}</p>
      </div>
    );
  }
}

export default RouteParams;
