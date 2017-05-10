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
    });
  },

  redirectToRegistration: function () {
    this.setState({
      component: Registration
    });
  },

  redirectToMainApp: function (username, password) {
    var self = this;
    axios.post('http://localhost:3001/ask_token', {
      username: username,
      password: password
    }).then(function (response) {
      console.log(response.data.jwt);
      self.setState({
        jwt: response.data.jwt,
        component: MainApp
      });
    }).catch(function (err) {
      console.error(err)
    })

    /*this.setState({
      component: MainApp
    });*/
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
