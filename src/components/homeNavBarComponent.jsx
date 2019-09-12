import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeNavbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="btn btn-primary m-2">
          Home
        </Link>
        <Link to="/news" className="btn btn-primary m-2">
          News
        </Link>
        <Link to="/blog" className="btn btn-primary m-2">
          Blog
        </Link>
        <Link to="/xy" className="btn btn-primary m-2">
          XY
        </Link>
        <Link to="/route-params/1" className="btn btn-primary m-2">
          RouteParams
        </Link>
        <Link
          to="/query-string?staff=someONE&others=someTWO"
          className="btn btn-primary m-2"
        >
          QueryString
        </Link>
        <Link to="/buttons" className="btn btn-primary m-2">
          Buttons
        </Link>
        <Link to="/login" className="btn btn-primary m-2">
          Login
        </Link>
      </React.Fragment>
    );
  }
}

export default HomeNavbar;
