import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import ValuesOfXY from "./components/xyPropsComponent";
import News from "./components/newsComponent";
import Blog from "./components/blogComponent";
import Home from "./components/homeComponent";
import HomeNavbar from "./components/homeNavBarComponent";
import RouteParams from "./components/routeParamsComponent";
import QueryString from "./components/queryStringComponent";
import NotFound from "./components/nothingToFound";
import ProgNav from "./components/programaticNavigationComponent";
import LoginForm from "./components/loginComponent";

class App extends Component {
  state = { valueOfX: "To jest X", valueOfY: "To jest Y" };
  render() {
    return (
      <React.Fragment>
        <HomeNavbar />
        <Switch>
          <Route path="/news" component={News} />
          <Route path="/login" component={LoginForm} />
          <Route path="/blog" component={Blog} />
          <Route
            path="/xy"
            render={props => (
              <ValuesOfXY
                valueOfX={this.state.valueOfX}
                valueOfY={this.state.valueOfY}
                {...props}
              />
            )}
          />
          <Route path="/route-params/:id/:idd?" component={RouteParams} />
          <Route path="/query-string" component={QueryString} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/buttons" component={ProgNav} />
          <Route path="/login" component={LoginForm} />

          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
