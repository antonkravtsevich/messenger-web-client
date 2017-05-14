import React from 'react';
import MainApp from './components/main_app/MainApp';
import Login from './components/login_page/Login';
import Registration from './components/registration_page/Registration'
import axios from 'axios'

var App = new React.createClass({

  getInitialState: function () {
    return{
      component: Login,
      jwt: ""
    }
  },

  redirectToLogin: function () {
    this.setState({
      component: Login
    })
  },

  redirectToRegistration: function () {
    this.setState({
      component: Registration
    })
  },

  redirectToMainApp: function (jwt) {
    this.setState({
      jwt: jwt,
      component: MainApp
    });
  },

  setJWT: function (jwt) {
    this.setState({
      jwt: jwt
    });
    console.log('App setJWT');
  },

  render: function() {
    return (
      <this.state.component
        toMainApp={this.redirectToMainApp}
        toLogin={this.redirectToLogin}
        toRegistration={this.redirectToRegistration}
        jwt={this.state.jwt}/>
    );
  }
});

export default App;
