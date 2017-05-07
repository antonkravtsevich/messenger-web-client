import React from 'react';

var Registration = new React.createClass({
  redirectToLogin: function (e) {
    return this.props.toLogin();
  },

  redirectToMainApp: function (e) {
    return this.props.toMainApp();
  },

  render: function() {
    return (
      <div>
        <div className="login-page">
          <div className="form">
            <form className="register-form">
              <input type="text" id="username" placeholder="Login"/>
              <input type="text" id="email" placeholder="Email address"/>
              <input type="text" id="first_name" placeholder="First name" />
              <input type="text" id="last_name" placeholder="Last name" />
              <input type="password" id="password" placeholder="Password"/>
              <input type="password" id="conf_password" placeholder="Confirm password" />
              <button onClick={this.redirectToMainApp}>create</button>
              <p className="message">Already registered? <a href="#" onClick={this.redirectToLogin}>Sign In</a></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default Registration;
