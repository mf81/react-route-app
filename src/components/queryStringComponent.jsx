import React, { Component } from "react";
import queryString from "query-string";

class QueryString extends Component {
  state = {};
  render() {
    const { location } = this.props;
    const result = queryString.parse(location.search);
    return (
      <div>
        <h1>QueryString</h1>
        <p>Staff: {result.staff}</p>
        <p>Others: {result.others}</p>
      </div>
    );
  }
}

export default QueryString;
