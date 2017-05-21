import React from 'react';
import LeftBar from './left/LeftBar'
import RightBar from './rigth/RightBar'
import axios from 'axios'
import axiosErrorLog from '../../controllers/logger'

var MainApp = new React.createClass({
  getInitialState: function () {
    return {
      user: {},
      chat_id: '',
    };
  },

  changeChatID: function (chat_id) {
    console.log("CHANGE CHAT TO: "+chat_id);
    this.setState({
      chat_id: chat_id
    });
  },

  //TODO PUT IT INTO LEFT BAR COMPONENT!!!
  /*loadAllUsers: function () {
    //DEBUG
    //console.log('MAINAPP: loadAllUSers');
    let self = this;
    axios.get('http://localhost:3001/users')
      .then(function (response) {
        //DEBUG
        console.log('users: ' + JSON.stringify(response.data.message, null, 2));

        self.setState({
          users: response.data.message
        })
      }).catch((error) => {
        axiosErrorLog('MAINAPP: loadAllUsers', error)
      })
  },*/

  //TODO PUT IT INTO LEFT BAR COMPONENT!!!
  // if searchBox empty, contactsBar show only exist chats
  // but if you want to begin texting with new user, you can
  // search him
  // so, if searchBox not empty, contactsBar show result of
  // search of all users
  /*changeUsersList: function (searchString) {
    //DEBUG
    //console.log('MAINAPP: changeUsersList');
    let self = this;
    if(searchString === ''){
      //DEBUG
      //console.log('searchString empty, current list is chats')

      this.setState({
        current_users_list: this.state.chats
      })
    }else {
      self.loadAllUsers();
      var lowSearchString = searchString.toLowerCase();
      var searchResult = this.state.users.filter(function (elem) {
        var lowName = elem.username.toLowerCase();
        return ((lowName.indexOf(lowSearchString) !== -1) && (self.state.user.username!=elem.username));
      });
      //DEBUG
      //console.log(JSON.stringify(searchResult));
      this.setState({
        current_users_list: searchResult
      });
    }
  },*/

  //TESTED, WORK FINE
  loadUserData: function(){
    //DEBUG
    //console.log('MAINAPP: loadUserData');
    let jwt = this.props.jwt;
    let self = this;

    axios.get('http://localhost:3001/users/data',{
      headers:{
        jwt: jwt
      }
    }).then(function (response) {
      //DEBUG:
      console.log('user: '+JSON.stringify(response.data.message, null, 2));
      //console.log('props.jwt: '+self.props.jwt);
      self.setState({
        user: response.data.message
      });
    }).catch((error) => {
      axiosErrorLog('MAINAPP: loadUserData', error)
    })
  },

  //TODO PUT IT INTO LEFT BAR COMPONENT!!!
  /*
  loadChats: function (callback) {
    //DEBUG
    //console.log('MAINAPP: loadChats');
    let jwt = this.props.jwt;
    let self = this;
    axios.get('http://localhost:3001/chats',{
      headers:{
        jwt: jwt
      }
    }).then(function (response) {
      //DEBUG:
      console.log('chats: '+JSON.stringify(response.data.message, null, 2));

      self.setState({
        chats: response.data.message
      });
      if (callback!=null){
        callback();
      }
    }).catch((error) => {
      axiosErrorLog('MAINAPP: loadChats', error)
    })
  },
  */

  //REFACTOR CREATE ONE METHOD!!!
  // PUT IT INTO LEFT BAR COMPONENT!!!
  /*
  changeChatByUserId: function(user_id) {
    axios.get('http://localhost:3001/chats/by_users/'+user_id, {
      headers:{
        jwt: jwt
      }
    }).then(function(response){
      this.setState({
        chat_id: response.message._id,
        current_messages: response.message.messages,
        companion: response.message.users[0];
      })
    }).catch((error) => {
      axiosErrorLog('MAINAPP: changeChatByUserId', error)
    })
  },

  changeChatByChatId: function(chat_id){
    axios.get('http://localhost:3001/chats/'+chat_id, {
      headers:{
        jwt: jwt
      }
    }).then(function(response){
      this.setState({
        chat_id: response.message._id,
        current_messages: response.message.messages,
        companion: response.message.users[0];
      })
    }).catch((error) => {
      axiosErrorLog('MAINAPP: changeChatByChatId', error)
    })
  },
  */

  //TODO this must be in RightBar
  /*reloadMessages: function () {
    //DEBUG
    //console.log('MAINAPP: reloadMessages');
    let self = this;
    let chat_id = this.state.chat_id;
    let jwt = this.props.jwt;
    if(this.state.chat_id!=""){
      axios.get('http://localhost:3001/chats/'+chat_id, {
        headers:{
          jwt: jwt
        }
      }).then(function (response) {
        self.setState({
          current_messages: response.data.message
        })
      }).catch((error) => {
        axiosErrorLog('MAINAPP: reloadMessages', error)
      })
    }
  },*/

  //TODO PUT IT IN LEFT BAR!!!
  /*sendMessage: function (text) {
    //DEBUG
    //console.log('MAINAPP: sendMessage');
    var jwt = this.props.jwt;
    var companion_id = this.state.companion_id;
    let self = this;
    const url = 'http://localhost:3001/messages';
    const params = {
      text: text,
      reciever: companion_id
    };
    const config = {
      headers: {
        'jwt': jwt
      }
    };

    if((companion_id!=='')&&(text!=='')){
      //DEBUG
      console.log('companion_id: '+companion_id);
      console.log('text: '+text);

      axios.post(url, params, config)
      .then(function (resp) {
        self.reloadMessages();
        self.loadChats();
      }).catch((error) => {
        axiosErrorLog('MAINAPP: sendMessage', error)
      })
    }
  },*/


  reloadData: function (callback) {
    //DEBUG
    //console.log('MAINAPP: reloadData');
    this.loadUserData();
    //this.loadChats(callback);
    //this.reloadMessages();
  },

  componentWillMount: function () {
    //DEBUG
    //console.log('MAINAPP: componentWillMount');

    //uncomment if NOT DEBUG
    //this.interval = setInterval(self.reloadData, 1000);
  },

  componentWillUnmount: function () {
    //DEBUG
    //console.log('MAINAPP: componentWillUnmount');
    clearInterval(this.interval);
  },

  render: function() {
    //DEBUG
    //console.log('MAINAPP: render');
    return (
      <div className="conteiner app">
      {
        <div className="row app-one">
          <LeftBar
            current_user={this.state.user}
            jwt={this.props.jwt}
            changeChatID={this.changeChatID}
          />
        {/*}<RightBar
          />*/}
        </div>
      }
    </div>
    );
  }
});

export default MainApp;
