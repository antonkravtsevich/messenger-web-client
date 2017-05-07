import React from 'react';

var Login = new React.createClass({
  redirectToRegistration: function (e) {
    return this.props.toRegistration();
  },

  redirectToMainApp: function (e) {
    return this.props.toMainApp();
  },

  render: function() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button onClick={this.redirectToMainApp}>login</button>
            <p className="message">Not registered? <a href="#" onClick={this.redirectToRegistration}>Create an account</a></p>
          </form>
        </div>
      </div>
    );
  }
});

export default Login;
