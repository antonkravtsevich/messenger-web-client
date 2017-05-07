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
              <input type="text" placeholder="name"/>
              <input type="password" placeholder="password"/>
              <input type="text" placeholder="email address"/>
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
