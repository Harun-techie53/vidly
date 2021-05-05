import React, { Component } from "react";
import Joi from "joi-browser";
import "./login.css";

class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    error: {},
  };
  schema = Joi.object({
    email: Joi.string().min(11).max(255).email().required().label("Email"),
    password: Joi.string().min(8).max(255).required().label("Password"),
  });

  handleInputChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      account,
    });
  };

  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;

    // const errors = {};
    // error.

    // return errors;
    return error;

    // const errors = {};
    // if (this.state.account.email.trim() === "")
    //   return (errors.email = "Email is required");
    // if (this.state.account.password.trim() === "")
    //   return (errors.password = "Password is required");
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted...");
    const errors = this.validate();
    console.log(errors);
    // this.setState({
    //   errors: errors || {},
    // });
  };

  render() {
    const { email, password } = this.state.account;
    return (
      <div className="login">
        <h2 className="text">Login Here</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
              className="form-control inputField"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />

            <div class="alert alert-danger" role="alert"></div>

            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
              value={password}
              onChange={this.handleInputChange}
              type="password"
              className="form-control inputField"
              id="exampleInputPassword1"
              placeholder="Password"
            />

            <div class="alert alert-danger" role="alert"></div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
