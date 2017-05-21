import React from 'react';
import axios from 'axios';
import axiosErrorLog from '../../controllers/logger';

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
    var self = this;
    axios.post('http://188.166.93.46:3001/ask_token', {
      username: this.state.username,
      password: this.state.password
    }).then(function (response) {
      if(response.data.status!='error'){
        var jwt = response.data.jwt;
        return self.props.toMainApp(jwt);
      } else {
        alert(response.data.message);
      }
    })
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
