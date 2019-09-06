import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeNavbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/xy">XY</Link>
        <Link to="/route-params/1">RouteParams</Link>
        <Link to="/query-string?staff=someONE&others=someTWO">QueryString</Link>
        <Link to="/buttons">Buttons</Link>
      </React.Fragment>
    );
  }
}

export default HomeNavbar;
