import React from 'react';
import axios from 'axios';
import axiosErrorLog from '../../controllers/logger'

//TODO: registration on server

var Registration = new React.createClass({
  getInitialState: function () {
    return{
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      conf_password: ""
    }
  },

  onChangeLogin: function (e) {
    this.setState({
      username: e.target.value
    })
  },

  onChangeMail: function (e) {
    this.setState({
      email: e.target.value
    })
  },

  onChangeFirstName: function (e) {
    this.setState({
      first_name: e.target.value
    })
  },

  onChangeLastName: function (e) {
    this.setState({
      last_name: e.target.value
    })
  },

  onChangePass: function (e) {
    this.setState({
      password: e.target.value
    })
  },

  onChangeConfPass: function (e) {
    this.setState({
      conf_password: e.target.value
    })
  },

  redirectToLogin: function (e) {
    return this.props.toLogin();
  },

  createUser: function (e) {
    if(this.state.password === this.state.conf_password){
      axios.post('http://localhost:3001/users', {
        username: this.state.username,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email
      }).then(function (res) {
        alert(res.data.message);
      }).catch((error) => {
        axiosErrorLog('REFISTRATION: createUser', error)
      })
    } else {
      alert('Passwords not same');
    }
  },

  render: function() {
    return (
      <div>
        <div className="login-page">
          <div className="form">
            <form className="register-form">
              <input
                type="text"
                className="loginInput"
                value={this.state.username}
                onChange={this.onChangeLogin}
                placeholder="Login"
              />
              <input
                type="text"
                className="loginInput"
                value={this.state.email}
                onChange={this.onChangeMail}
                placeholder="Email"
              />
              <input
                type="text"
                className="loginInput"
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
                placeholder="First name"
              />
              <input
                type="text"
                className="loginInput"
                value={this.state.last_name}
                onChange={this.onChangeLastName}
                placeholder="Last name"
              />
              <input
                type="password"
                className="loginInput"
                value={this.state.password}
                onChange={this.onChangePass}
                placeholder="Password"
              />
              <input
                type="password"
                className="loginInput"
                value={this.state.conf_password}
                onChange={this.onChangeConfPass}
                placeholder="Confirm password"
              />
              <input
                className="loginButton"
                type="button"
                onClick={this.createUser}
                value="create"
              />
              <p className="message">Already registered? <a href="#" onClick={this.redirectToLogin}>Sign In</a></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default Registration;
