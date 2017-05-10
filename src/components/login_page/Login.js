import React from 'react';
import axios from 'axios';

var Login = new React.createClass({
getInitialState: function () {
  return {
    username: "",
    password: "",
    jwt: ""
  }
},

redirectToRegistration: function (e) {
  return this.props.toRegistration();
},

redirectToMainApp: function (e) {
  return this.props.toMainApp(this.state.username, this.state.password);
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
            className="loginInput"
            value={this.state.username}
            onChange={this.onChangeLogin}
            placeholder="Login"
          />
          <input
            type="password"
            id="password"
            className="loginInput"
            value={this.state.password}
            onChange={this.onChangePass}
            placeholder="Password"
          />
          <input
            className="loginButton"
            type="button"
            onClick={this.redirectToMainApp}
            value="login"
          />
          <p className="message">Not registered? <a href="#" onClick={this.redirectToRegistration}>Create an account</a></p>
        </form>
      </div>
    </div>
  );
}
});

export default Login;
