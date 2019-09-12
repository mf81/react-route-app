import React from "react";
import Joi from "joi-browser";
import Form from "./form";

class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    console.log("its submitted");
  };

  render() {
    return (
      <div className="container">
        <h1>Logowanie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Uzytkownik:", "text", true)}
          {this.renderInput("password", "Hasło:", "password")}
          {this.renderButton("Zaloguj")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
