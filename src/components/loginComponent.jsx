import React from "react";
import Joi from "joi-browser";
import Form from "./form";

class LoginForm extends Form {
  componentDidMount() {
    this.setState({
      data: { username: "Maciek2222 ", password: "fijałkowski" },
      errors: {}
    });
  }

  schema = {
    username: Joi.string()
      .required()
      .label("Użytkownik")
      .error(() => {
        return {
          message: "Pole użytkownika nie może być puste..."
        };
      }),
    password: Joi.string()
      .required()
      .label("Hasło")
      .error(() => {
        return {
          message: "Pole hasła nie może być puste..."
        };
      })
  };

  doSubmit = () => {
    console.log("its submitted");
  };

  render() {
    console.log("Z loginComponent", this.state);
    return (
      <div className="container">
        <h1>Logowanie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Użytkownik:", "text", true)}
          {this.renderInput("password", "Hasło:", "password")}
          {this.renderButton("Zaloguj")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
