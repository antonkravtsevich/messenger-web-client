import React from 'react';
import SearchBox from './search_box/SearchBox'
import ContactsBar from './contacts_bar/ContactsBar'
import axios from 'axios'
import axiosErrorLog from '../../../controllers/logger'

var LeftBar = new React.createClass({
  // TODO: make function that handle searh text

  getInitialState: function () {
    return({
      search_string: '',
      list_type: 'chats',
      list: []
    })
  },

  loadAllUsers: function (query) {
    //DEBUG
    //console.log('MAINAPP: loadAllUSers');
    let self = this;
    axios.get('http://188.166.93.46:3001/users')
      .then(function (response) {
        //DEBUG
        console.log('users: ' + JSON.stringify(response.data.message, null, 2));
        //TODO create filter
        var allUsers = response.data.message;
        var filterResult = allUsers.filter((user) => {
          var searchableString = (user.personal_data.first_name+" "+user.personal_data.last_name).toLowerCase();
          return searchableString.indexOf(query) !== -1;
        });
        self.setState({
          list_type: 'users',
          list: filterResult
        })
      }).catch((error) => {
        axiosErrorLog('CONTACTSBAR: loadAllUsers', error);
      })
  },

  loadAllChats: function () {
    //DEBUG
    //console.log('MAINAPP: loadChats');
    let jwt = this.props.jwt;
    let self = this;
    axios.get('http://188.166.93.46:3001/chats',{
      headers:{
        jwt: jwt
      }
    }).then(function (response) {
      //DEBUG:
      //console.log('chats: '+JSON.stringify(response.data.message, null, 2));
      self.setState({
        list_type: 'chats',
        list: response.data.message
      });
    })
  },

  changeSearchString: function (search_string) {
    if (search_string === ''){
      this.setState({
        list_type: 'chats',
        search_string: ''
      });
      this.loadAllChats();
    } else {
      this.setState({
        list_type: 'users',
        search_string: search_string
      })
      this.loadAllUsers(search_string);
    }
  },

  //make that evry second
  updateContactList: function () {
    //DEBUG
    //console.log("LEFTBAR: reloadChats");
    if(this.state.search_string === ''){
      this.loadAllChats();
    }
  },

  componentWillMount: function () {
    this.interval = setInterval(this.updateContactList, 200);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div className="col-sm-4 side">
        <div className="side-one">
          <SearchBox changeSearchString={this.changeSearchString}/>
          <ContactsBar
            jwt={this.props.jwt}
            current_user={this.props.current_user}
            changeChatID={this.props.changeChatID}
            list_type={this.state.list_type}
            list={this.state.list}
          />
        </div>
      </div>
    );
  }
});

export default LeftBar;
