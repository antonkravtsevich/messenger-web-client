import React from 'react';

var Login = new React.createClass({
  getInitialState: function () {
    return {
      username: "",
      password: ""
    }
  },

  redirectToRegistration: function (e) {
    return this.props.toRegistration();
  },

  redirectToMainApp: function (e) {
    alert("username: "+this.state.username+", password: "+this.state.password);
    //return this.props.toMainApp();
  },

  onChangeLogin: function (e) {
    this.setState({
      username: e.target.value
    })
  },

  onChangePass: function (e) {
    this.setState({
      password: e.target.value
    })
  },

  render: function() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.onChangeLogin}
              placeholder="Login"
            />
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.onChangePass}
              placeholder="Password"
            />
            <button onClick={this.redirectToMainApp}>login</button>
            <p className="message">Not registered? <a href="#" onClick={this.redirectToRegistration}>Create an account</a></p>
          </form>
        </div>
      </div>
    );
  }
});

export default Login;
