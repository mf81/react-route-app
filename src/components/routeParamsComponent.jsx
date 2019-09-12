import React, { Component } from "react";

class RouteParams extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Route params </h1>
        <p>ID: {this.props.match.params.id}</p>
        <p>IDD: {this.props.match.params.idd}</p>
      </React.Fragment>
    );
  }
}

export default RouteParams;
