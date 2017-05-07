import React from 'react';
import MainApp from './components/main_app/MainApp';
import Login from './components/login_page/Login';
import Registration from './components/registration_page/Registration'

var App = new React.createClass({

  getInitialState: function () {
    return{
      component: Login
    }
  },

  redirectToLogin: function () {
    this.setState({
      component: Login
    });
  },

  redirectToRegistration: function () {
    this.setState({
      component: Registration
    });
  },

  redirectToMainApp: function () {
    this.setState({
      component: MainApp
    });
  },

  render: function() {
    return (
      <this.state.component
        toMainApp={this.redirectToMainApp}
        toLogin={this.redirectToLogin}
        toRegistration={this.redirectToRegistration}/>
    );
  }
});

export default App;
