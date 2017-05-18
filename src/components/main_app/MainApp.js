import React from 'react';
import LeftBar from './left/LeftBar'
import RightBar from './rigth/RightBar'
import axios from 'axios'

var MainApp = new React.createClass({
  getInitialState: function () {
    return {
      user: {},
      users: [],
      chats: [],
      current_users_list: [],
      current_messages: [],
      chat_id: '',
      companion_id: '',
      companion_name: '',
      searchString: ''
    };
  },

  loadAllUsers: function () {
    let self = this;
    axios.get('http://localhost:3001/users')
      .then(function (response) {
        //DEBUG
        //console.log('users: ' + JSON.stringify(response.data.message));

        self.setState({
          users: response.data.message
        })
      }).catch(function (err) {
        console.error('loadAllUsers, '+err);
      })
  },

  // if searchBox empty, contactsBar show only exist chats
  // but if you want to begin texting with new user, you can
  // search him
  // so, if searchBox not empty, contactsBar show result of
  // search of all users
  changeUsersList: function (searchString) {
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
  },

  loadUserData: function(){
    let jwt = this.props.jwt;
    let self = this;

    axios.get('http://localhost:3001/users/data',{
      headers:{
        jwt: jwt
      }
    }).then(function (response) {
      //DEBUG:
      //console.log('user: '+JSON.stringify(response.data.message));
      //console.log('props.jwt: '+self.props.jwt);
      self.setState({
        user: response.data.message
      });
    }).catch(function (ex) {
      console.error('loadUserData, '+ex)
    })
  },

  loadChats: function (callback) {
    let jwt = this.props.jwt;
    let self = this;
    axios.get('http://localhost:3001/chats',{
      headers:{
        jwt: jwt
      }
    }).then(function (response) {
      //DEBUG:
      //console.log('chats: '+JSON.stringify(response.data.message));

      self.setState({
        chats: response.data.message
      });
      if (callback!=null){
        callback();
      }
    })
  },

  changeChat: function (companion_id) {
    let jwt = this.props.jwt;
    let self = this;

    //get chat_id by users ids
    //console.log('MainApp: changeChat: companion_id: '+companion_id);
    axios.get('http://localhost:3001/chats/by_users/'+companion_id, {
      headers:{
        jwt: jwt
      }
    }).then(function(response_chat_id){
      var chat_id = response_chat_id.data.message;
      //console.log('MainApp: changeChat: chat_id: '+chat_id);
      axios.get('http://localhost:3001/chats/'+chat_id, {
        headers:{
          jwt: jwt
        }
      }).then(function(response_chat){
        //get companion_name
        axios.get('http://localhost:3001/users/'+companion_id)
          .then(function (response_user) {
            // DEBUG
            //console.log('New user for conversation: '+response_user.data.message.username);
            self.setState({
              chat_id: chat_id,
              companion_id: companion_id,
              companion_name: response_user.data.message.username,
              current_messages: response_chat.data.message
            });
          }).catch(function(ex){
            console.error('change chat: 1: ', ex);
          })
      }).catch(function(ex){
        console.error('change chat: 2: ', ex);
      })
    }).catch(function(ex){
      console.error('change chat: 3: ', ex);
    })
  },

  reloadMessages: function () {
    let self = this;
    let chat_id = this.state.chat_id;
    let jwt = this.props.jwt;
    axios.get('http://localhost:3001/chats/'+chat_id, {
      headers:{
        jwt: jwt
      }
    }).then(function (response) {
      self.setState({
        current_messages: response.data.message
      })
    })
  },

  //TODO messages list reload
  sendMessage: function (text) {
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
      })
      .catch(function (ex) {
        console.error(ex);
      })
    }
  },

  reloadData: function (callback) {
    console.log('reloadData');
    this.loadUserData();
    this.loadChats(callback);
    this.reloadMessages();
  },

  componentWillMount: function () {
    let self=this;
    let chats=this.state.chats;
    self.reloadData(function () {
      self.setState({
        current_users_list: self.state.chats
      })
    });
    this.interval = setInterval(self.reloadData, 1000);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div className="conteiner app">
        <div className="row app-one">
          <LeftBar
            users_list={this.state.current_users_list}
            changeChat={this.changeChat}
            changeUsersList={this.changeUsersList}
          />
          <RightBar
            companion_name={this.state.companion_name}
            messages={this.state.current_messages}
            user_id={this.state.user._id}
            sendMessage={this.sendMessage}
          />
        </div>
      </div>
    );
  }
});

export default MainApp;
