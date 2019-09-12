import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    result.error.details.map(m => {
      return (errors[m.path[0]] = m.message);
    });
    return errors;
  };

  validateProperty = currentTarget => {
    const obj = { [currentTarget.name]: currentTarget.value };
    const singleSchema = {
      [currentTarget.name]: this.schema[currentTarget.name]
    };
    const { error } = Joi.validate(obj, singleSchema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = e => {
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text", autoFocus) {
    return (
      <Input
        type={type}
        label={label}
        name={name}
        onChange={this.handleChange}
        value={this.state[name]}
        errors={this.state.errors}
        autoFocus={autoFocus}
      />
    );
  }
}

export default Form;
